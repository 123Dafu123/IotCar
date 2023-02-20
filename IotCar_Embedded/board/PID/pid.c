/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-07-20     24345       the first version
 */
#include <PID/pid.h>

rt_thread_t pid_thread;

typedef struct Speed_PID Speed_PID;
struct Speed_PID
{
    int last_bias;
    int now_bias;
    int now_pwm;
    int target;
    int current;
    float p;
    float i;
};
Speed_PID left_speed_pid={0};
Speed_PID right_speed_pid={0};

static void pid_left_control()
{
    left_speed_pid.now_bias=left_speed_pid.target-left_speed_pid.current;
    left_speed_pid.now_pwm+=left_speed_pid.p * (left_speed_pid.now_bias - left_speed_pid.last_bias)
                            +left_speed_pid.i* left_speed_pid.now_bias;
    left_speed_pid.last_bias=left_speed_pid.now_bias;
}

static void pid_right_control()
{
    right_speed_pid.now_bias=right_speed_pid.target-right_speed_pid.current;
    right_speed_pid.now_pwm+=right_speed_pid.p*(right_speed_pid.now_bias-right_speed_pid.last_bias)
                            +right_speed_pid.i*right_speed_pid.now_bias;
    right_speed_pid.last_bias=right_speed_pid.now_bias;
}

static void pid_thread_entry(void *parametet)
{
    while(1)
    {
        left_speed_pid.current=MG513_get_left_code();
        right_speed_pid.current=MG513_get_right_code();

        pid_left_control();
        pid_right_control();

        MG513_left_set_pwm(left_speed_pid.now_pwm*PWM_K);
        MG513_right_set_pwm(right_speed_pid.now_pwm*PWM_K);

        rt_thread_mdelay(10);
    }
}

void pid_speed_control_init()
{
    left_speed_pid.p=LEFT_P;
    left_speed_pid.i=LEFT_I;

    right_speed_pid.p=RIGHT_P;
    right_speed_pid.i=RIGHT_I;

    pid_thread=rt_thread_create("pid", pid_thread_entry, RT_NULL, 1024, 1, 5);
    rt_thread_startup(pid_thread);
    pid_set(0, 0);
}

void pid_set(int velocity, int turn)
{
    left_speed_pid.target = velocity + turn;
    right_speed_pid.target = velocity - turn;

    if(left_speed_pid.target>20)left_speed_pid.target=20;
    if(left_speed_pid.target<-20)left_speed_pid.target=-20;
    if(right_speed_pid.target>20)right_speed_pid.target=20;
    if(right_speed_pid.target<-20)right_speed_pid.target=-20;
}

void pid_speed_brake()
{
    MG513_brake();
    left_speed_pid.target=0;
    right_speed_pid.target=0;
}

void pid_speed_free()
{
    MG513_free();
    left_speed_pid.target=0;
    right_speed_pid.target=0;
}

int pid_get_left_speed()
{
    return left_speed_pid.current;
}

int pid_get_right_speed()
{

    return right_speed_pid.current;
}

static void change_l(int argc,char **argv)
{
    if(argc==3)
    {
        left_speed_pid.p=atof(argv[1]);
        left_speed_pid.i=atof(argv[2]);
    }
    else
    {
        rt_kprintf("\nusage:change_l [PID_P_L] [PID_I_L]\n");
    }
}
MSH_CMD_EXPORT(change_l,change left pid args)

static void change_r(int argc,char **argv)
{
    if(argc==3)
    {
        right_speed_pid.p=atof(argv[1]);
        right_speed_pid.i=atof(argv[2]);
    }
    else
    {
        rt_kprintf("\nusage:change_r [PID_P_R] [PID_I_R]\n");
    }
}
MSH_CMD_EXPORT(change_r,change right pid args)

static void set(int argc,char **argv)
{
    if(argc==3)
    {
        pid_set(atoi(argv[1]),atoi(argv[2]));
    }
    else
    {
        rt_kprintf("\nusage:set [velocity] [turn]\n");
    }
}
MSH_CMD_EXPORT(set,set velocity and turn)



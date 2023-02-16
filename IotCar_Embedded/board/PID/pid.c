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

rt_timer_t pid_speed_timer;
typedef struct Speed_PID Speed_PID;
struct Speed_PID
{
    int sum_bias;
    int last_bias;
    int now_bias;
    int now_pwm;
    int target;
    int current;
    float p;
    float i;
    float d;
};
Speed_PID left_speed_pid;
Speed_PID right_speed_pid;

static void pid_speed_control_left()
{
    left_speed_pid.now_bias=left_speed_pid.target-left_speed_pid.current;
    left_speed_pid.sum_bias+=left_speed_pid.now_bias;
    if(left_speed_pid.sum_bias>100)left_speed_pid.sum_bias=100;
    if(left_speed_pid.sum_bias<-100)left_speed_pid.sum_bias=-100;
    left_speed_pid.now_pwm=left_speed_pid.p*left_speed_pid.now_bias+left_speed_pid.i*left_speed_pid.sum_bias+
            left_speed_pid.d*(left_speed_pid.now_bias-left_speed_pid.last_bias);
    left_speed_pid.last_bias=left_speed_pid.now_bias;
}

static void pid_speed_control_right()
{
    right_speed_pid.now_bias=right_speed_pid.target-right_speed_pid.current;
    right_speed_pid.sum_bias+=right_speed_pid.now_bias;
    if(right_speed_pid.sum_bias>100)right_speed_pid.sum_bias=100;
    if(right_speed_pid.sum_bias<-100)right_speed_pid.sum_bias=-100;
    right_speed_pid.now_pwm=right_speed_pid.p*right_speed_pid.now_bias+right_speed_pid.i*right_speed_pid.sum_bias+
            right_speed_pid.d*(right_speed_pid.now_bias-right_speed_pid.last_bias);

    right_speed_pid.last_bias=right_speed_pid.now_bias;
}

static void pid_speed_timer_timeout(void *parameter)
{
    left_speed_pid.current=MG513_get_left_code();
    right_speed_pid.current=MG513_get_right_code();

    pid_speed_control_left();
    pid_speed_control_right();

    MG513_left_set_pwm(left_speed_pid.now_pwm);
    MG513_right_set_pwm(right_speed_pid.now_pwm);
}


void pid_speed_control_init()
{
    rt_memset(&left_speed_pid, 0, sizeof(left_speed_pid));
    rt_memset(&right_speed_pid, 0, sizeof(right_speed_pid));

    left_speed_pid.p=2000;
    left_speed_pid.i=200;
    left_speed_pid.d=8000;//4000

    right_speed_pid.p=4000;
    right_speed_pid.i=300;
    right_speed_pid.d=8000;//4000

    pid_speed_timer=rt_timer_create("pid_speed_timer",
            pid_speed_timer_timeout, RT_NULL,10, RT_TIMER_FLAG_PERIODIC);
    rt_timer_start(pid_speed_timer);
}

void pid_set_left_speed(int target_speed)
{
    left_speed_pid.target=target_speed;
}

void pid_set_right_speed(int target_speed)
{
    right_speed_pid.target=target_speed;
}


void pid_speed_brake()
{
    MG513_brake();
    left_speed_pid.target=0;
    right_speed_pid.target=0;
    rt_timer_delete(pid_speed_timer);
}

void pid_speed_free()
{
    left_speed_pid.target=0;
    right_speed_pid.target=0;
    MG513_free();
}

int pid_get_left_speed()
{
    return left_speed_pid.current;
}

int pid_get_right_speed()
{
    return right_speed_pid.current;
}




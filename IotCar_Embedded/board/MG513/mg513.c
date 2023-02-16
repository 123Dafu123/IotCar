/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-07-13     24345       the first version
 */
#include <MG513/mg513.h>

struct rt_device_pwm *pwm4;
int Code_left=0;
int Code_right=0;
int speed_left=0;
int speed_right=0;

static void MG513_left_encode_irq_handler(void *argument)
{
    if(rt_pin_read(left_encode_A)==PIN_LOW)
    {
        if(rt_pin_read(left_encode_B)==PIN_LOW)
        {
            Code_left--;
            speed_left--;
        }
        else
        {
            Code_left++;
            speed_left++;
        }
    }
    else
    {
        if(rt_pin_read(left_encode_B)==PIN_LOW)
        {
            Code_left++;
            speed_left++;
        }
        else
        {
            Code_left--;
            speed_left--;
        }
    }
}

static void MG513_right_encode_irq_handler(void *argument)
{
    if(rt_pin_read(right_encode_A)==PIN_LOW)
    {
        if(rt_pin_read(right_encode_B)==PIN_LOW)
        {
            Code_right++;
            speed_right++;
        }
        else
        {
            Code_right--;
            speed_right--;
        }
    }
    else
    {
        if(rt_pin_read(right_encode_B)==PIN_LOW)
        {
            Code_right--;
            speed_right--;
        }
        else
        {
            Code_right++;
            speed_right++;
        }
    }
}

void MG513_init()
{
    rt_pin_mode(left_in1, PIN_MODE_OUTPUT);
    rt_pin_mode(left_in2, PIN_MODE_OUTPUT);
    rt_pin_mode(right_in1, PIN_MODE_OUTPUT);
    rt_pin_mode(right_in2, PIN_MODE_OUTPUT);

    rt_pin_mode(left_encode_A, PIN_MODE_INPUT);
    rt_pin_mode(left_encode_B, PIN_MODE_INPUT);
    rt_pin_attach_irq(left_encode_A, PIN_IRQ_MODE_RISING_FALLING, MG513_left_encode_irq_handler, RT_NULL);
    rt_pin_irq_enable(left_encode_A, PIN_IRQ_ENABLE);

    rt_pin_mode(right_encode_A, PIN_MODE_INPUT);
    rt_pin_mode(right_encode_B, PIN_MODE_INPUT);
    rt_pin_attach_irq(right_encode_A, PIN_IRQ_MODE_RISING_FALLING, MG513_right_encode_irq_handler, RT_NULL);
    rt_pin_irq_enable(right_encode_A, PIN_IRQ_ENABLE);

    pwm4=(struct rt_device_pwm *)rt_device_find(pwm_name);
    rt_pwm_set(pwm4, left_pwm_channel, pwm_period, 0);
    rt_pwm_set(pwm4, right_pwm_channel, pwm_period, 0);
    rt_pwm_enable(pwm4, left_pwm_channel);
    rt_pwm_enable(pwm4, right_pwm_channel);

    rt_pin_write(left_in1, PIN_LOW);
    rt_pin_write(left_in2, PIN_LOW);
    rt_pin_write(right_in1, PIN_LOW);
    rt_pin_write(right_in2, PIN_LOW);
}

void MG513_left_set_pwm(rt_int32_t speed)
{
    if(speed>0)
    {
        if(speed>100000)speed=100000;
        rt_pin_write(left_in1, PIN_HIGH);
        rt_pin_write(left_in2, PIN_LOW);
        rt_pwm_set(pwm4, left_pwm_channel, pwm_period,speed);
    }
    else
    {
        if(speed<-100000)speed=-100000;
        rt_pin_write(left_in1, PIN_LOW);
        rt_pin_write(left_in2, PIN_HIGH);
        rt_pwm_set(pwm4, left_pwm_channel, pwm_period, -1*speed);
    }
}

void MG513_right_set_pwm(rt_int32_t speed)
{
    if(speed>0)
    {
        if(speed>100000)speed=100000;
        rt_pin_write(right_in1, PIN_HIGH);
        rt_pin_write(right_in2, PIN_LOW);
        rt_pwm_set(pwm4, right_pwm_channel, pwm_period,speed);
    }
    else
    {
        if(speed<-100000)speed=-100000;
        rt_pin_write(right_in1, PIN_LOW);
        rt_pin_write(right_in2, PIN_HIGH);
        rt_pwm_set(pwm4,right_pwm_channel, pwm_period, -1*speed);
    }
}

void MG513_brake()
{
    rt_pin_write(left_in1, PIN_HIGH);
    rt_pin_write(left_in2, PIN_HIGH);
    rt_pin_write(right_in1, PIN_HIGH);
    rt_pin_write(right_in2, PIN_HIGH);
    rt_pwm_set(pwm4, left_pwm_channel, pwm_period,0);
    rt_pwm_set(pwm4, right_pwm_channel, pwm_period,0);
}

void MG513_free(){
    rt_pin_write(left_in1, PIN_LOW);
    rt_pin_write(left_in2, PIN_LOW);
    rt_pin_write(right_in1, PIN_LOW);
    rt_pin_write(right_in2, PIN_LOW);
    rt_pwm_set(pwm4, left_pwm_channel, pwm_period,0);
    rt_pwm_set(pwm4, right_pwm_channel, pwm_period,0);
}

int MG513_get_left_code()
{
    int Code_left_now=Code_left;
    Code_left=0;
    return Code_left_now;
}

int MG513_get_right_code()
{
    int Code_right_now=Code_right;
    Code_right=0;
    return Code_right_now;
}

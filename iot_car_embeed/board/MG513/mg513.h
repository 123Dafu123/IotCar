/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-07-13     24345       the first version
 */
#ifndef BOARD_MG513_MG513_H_
#define BOARD_MG513_MG513_H_

#include <rtthread.h>
#include <rtdevice.h>
#include <board.h>
#define pwm_name "pwm4"
#define pwm_period 100000
#define left_pwm_channel 3
#define left_in1 GET_PIN(C,4)
#define left_in2 GET_PIN(A,4)
#define left_encode_A GET_PIN(B,12)
#define left_encode_B GET_PIN(B,13)
#define right_pwm_channel 4
#define right_in1 GET_PIN(B,11)
#define right_in2 GET_PIN(B,10)
#define right_encode_A GET_PIN(B,14)
#define right_encode_B GET_PIN(B,15)

void MG513_init();

void MG513_left_set_pwm(rt_int32_t speed);

void MG513_right_set_pwm(rt_int32_t speed);

void MG513_brake();

void MG513_free();

int MG513_get_left_code();

int MG513_get_right_code();

#endif /* BOARD_MG513_MG513_H_ */

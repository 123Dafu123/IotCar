/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-07-20     24345       the first version
 */
#ifndef BOARD_PID_PID_H_
#define BOARD_PID_PID_H_

#include <rtthread.h>
#include <rtdevice.h>
#include <board.h>
#include <MG513/mg513.h>

#define PWM_K          13.88f
#define LEFT_P         32
#define LEFT_I         32
#define RIGHT_P        32
#define RIGHT_I        32

void pid_speed_control_init();

void pid_set(int velocity, int turn);

void pid_speed_brake();

void pid_speed_free();

int pid_get_left_speed();

int pid_get_right_speed();

#endif /* BOARD_PID_PID_H_ */

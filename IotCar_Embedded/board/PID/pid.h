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

void pid_speed_control_init();

void pid_set_left_speed(int target_speed);

void pid_set_right_speed(int target_speed);

void pid_speed_brake();

void pid_speed_free();

int pid_get_left_speed();

int pid_get_right_speed();

#endif /* BOARD_PID_PID_H_ */

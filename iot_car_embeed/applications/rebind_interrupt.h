/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-09-22     24345       the first version
 */
#ifndef APPLICATIONS_REBIND_INTERRUPT_H_
#define APPLICATIONS_REBIND_INTERRUPT_H_

#include <rtthread.h>
#include <rtdevice.h>
#include <board.h>

#include <drv_lcd.h>
#include <qr.h>

#define key0 GET_PIN(D,10)
#define key1 GET_PIN(D,9)

void rebind_init();

#endif /* APPLICATIONS_REBIND_INTERRUPT_H_ */

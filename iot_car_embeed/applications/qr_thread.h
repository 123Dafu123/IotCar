/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-08-22     24345       the first version
 */
#ifndef APPLICATIONS_QR_THREAD_H_
#define APPLICATIONS_QR_THREAD_H_

#include <rtthread.h>

#include <wifi_thread_my.h>
#include <drv_lcd.h>

#include <webclient.h>

#include <id.h>


extern rt_sem_t car_bind;

void qr_thread_init();


#endif /* APPLICATIONS_QR_THREAD_H_ */

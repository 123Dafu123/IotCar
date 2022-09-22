/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-08-20     24345       the first version
 */
#ifndef APPLICATIONS_WIFI_THREAD_MY_H_
#define APPLICATIONS_WIFI_THREAD_MY_H_

#include <rtthread.h>

#include <wlan_mgnt.h>
#include <wlan_prot.h>
#include <wlan_cfg.h>

#include <fal.h>
#include <easyflash.h>

#include <drv_lcd.h>

extern rt_sem_t wifi_ready;
void wifi_thread_init();

#endif /* APPLICATIONS_WIFI_THREAD_MY_H_ */

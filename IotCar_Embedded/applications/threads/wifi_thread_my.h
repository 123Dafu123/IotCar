#ifndef APPLICATIONS_THREADS_WIFI_THREAD_MY_H_
#define APPLICATIONS_THREADS_WIFI_THREAD_MY_H_

#include <rtthread.h>

#include <wlan_mgnt.h>
#include <wlan_prot.h>
#include <wlan_cfg.h>
#include <fal.h>
#include <easyflash.h>
#include <drv_lcd.h>

#include <mutexs/mutexs_my.h>
#include <sems/sems_my.h>

void wifi_thread_entry(void *parameters);

#endif /* APPLICATIONS_THREADS_WIFI_THREAD_MY_H_ */

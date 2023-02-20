#ifndef APPLICATIONS_THREADS_OTA_THREAD_H_

#define APPLICATIONS_THREADS_OTA_THREAD_H_

#include <rtthread.h>
#include <rtdevice.h>
#include <board.h>

#include <recourses/id.h>
#include <recourses/app_version.h>
#include <mutexs/mutexs_my.h>
#include <sems/sems_my.h>

#include <webclient.h>
#include <drv_lcd.h>

#define http_ota_key GET_PIN(D,9)

void ota_thread_entry(void *parameters);

#endif /* APPLICATIONS_THREADS_OTA_THREAD_H_ */

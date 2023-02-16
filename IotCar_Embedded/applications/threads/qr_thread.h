#ifndef APPLICATIONS_THREADS_QR_THREAD_H_

#define APPLICATIONS_THREADS_QR_THREAD_H_

#include <rtthread.h>

#include <drv_lcd.h>
#include <webclient.h>

#include <recourses/id.h>
#include <recourses/qr.h>
#include <mutexs/mutexs_my.h>
#include <sems/sems_my.h>

void qr_thread_entry(void *parameters);

#endif /* APPLICATIONS_THREADS_QR_THREAD_H_ */

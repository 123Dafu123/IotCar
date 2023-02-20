#ifndef APPLICATIONS_THREADS_HTTP_THREAD_H_

#define APPLICATIONS_THREADS_HTTP_THREAD_H_

#include <rtthread.h>
#include <stdio.h>

#include <recourses/id.h>
#include <mutexs/mutexs_my.h>
#include <sems/sems_my.h>

#include <webclient.h>
#include <MG513/mg513.h>
#include <PID/pid.h>
#include <drv_lcd.h>

void http_thread_entry(void *parameters);

#endif /* APPLICATIONS_THREADS_HTTP_THREAD_H_ */

#ifndef APPLICATIONS_REBIND_IRQ_H_
#define APPLICATIONS_REBIND_IRQ_H_

#include <rtthread.h>
#include <rtdevice.h>
#include <board.h>

#include <drv_lcd.h>
#include <webclient.h>

#include <recourses/id.h>
#include <recourses/qr.h>
#include <sems/sems_my.h>
#include <mutexs/mutexs_my.h>

#define bind_enter_key GET_PIN(D,10)
#define bind_exit_key GET_PIN(D,8)

void rebind_thread_entry(void *parameters);

#endif /* APPLICATIONS_REBIND_IRQ_H_ */

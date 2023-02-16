#ifndef APPLICATIONS_SEMS_SEMS_MY_H_
#define APPLICATIONS_SEMS_SEMS_MY_H_

#include <rtthread.h>

extern rt_sem_t wifi_ready;
extern rt_sem_t wifi_reconnect;
extern rt_sem_t http_ready;
extern rt_sem_t car_bind;

#endif /* APPLICATIONS_SEMS_SEMS_MY_H_ */

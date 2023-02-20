#include <rtthread.h>
#include <rtdevice.h>
#include <board.h>

#include <recourses/id.h>
#include <recourses/app_version.h>

#include <fal.h>
#include <easyflash.h>
#include <MG513/mg513.h>
#include <PID/pid.h>

#include <mutexs/mutexs_my.h>
#include <sems/sems_my.h>

#include <threads/http_thread.h>
#include <threads/ota_thread.h>
#include <threads/qr_thread.h>
#include <threads/rebind_thread.h>
#include <threads/wifi_thread_my.h>

rt_thread_t wifi_thread=RT_NULL;
rt_thread_t qr_thread=RT_NULL;
rt_thread_t http_thread=RT_NULL;
rt_thread_t rebind_thread=RT_NULL;
rt_thread_t ota_thread=RT_NULL;

int main(void)
{
    rt_kprintf("\nCar ID %s\n",this_id);
    rt_kprintf("\nThis application is %s\n",APP_VERSION);

    //init device
    fal_init();
    easyflash_init();
    MG513_init();
    pid_speed_control_init();
    lcd_clear(WHITE);
    lcd_show_string(0, 80, 32, "Car ID %s",this_id);
    lcd_show_string(0, 120, 32, "VERSION %s",APP_VERSION);

    //init sem
    wifi_ready=rt_sem_create("wifi_ready",0,RT_IPC_FLAG_PRIO);
    wifi_reconnect=rt_sem_create("wifi_reconnect", 1, RT_IPC_FLAG_PRIO);
    http_ready=rt_sem_create("http_ready",0,RT_IPC_FLAG_PRIO);
    car_bind=rt_sem_create("car_bind", 0, RT_IPC_FLAG_PRIO);

    //init mutex
    http_opt_lock=rt_mutex_create("http_lock", RT_IPC_FLAG_PRIO);

    //init and start thread
    wifi_thread=rt_thread_create("wifi_thread",wifi_thread_entry,RT_NULL, 2048, 3, 5);
    rt_thread_startup(wifi_thread);

    qr_thread=rt_thread_create("qr",qr_thread_entry, RT_NULL,2048, 3,5);
    rt_thread_startup(qr_thread);

    http_thread=rt_thread_create("http", http_thread_entry, RT_NULL,4096, 3, 5);
    rt_thread_startup(http_thread);

    rebind_thread=rt_thread_create("rebind", rebind_thread_entry, RT_NULL, 1024, 3, 5);
    rt_thread_startup(rebind_thread);

    ota_thread=rt_thread_create("ota", ota_thread_entry, RT_NULL, 2048, 2, 1000);
    rt_thread_startup(ota_thread);

    return 0;
}

static int ota_app_vtor_reconfig(void)
{
    #define NVIC_VTOR_MASK   0x3FFFFF80
    /* Set the Vector Table base location by user application firmware definition */
    SCB->VTOR = RT_APP_PART_ADDR & NVIC_VTOR_MASK;

    return 0;
}
INIT_BOARD_EXPORT(ota_app_vtor_reconfig);

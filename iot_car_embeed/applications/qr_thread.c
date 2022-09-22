/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-08-22     24345       the first version
 */
#include <qr_thread.h>

#include <qr.h>

#define head_len 1024
#define resp_len 1024
#define read_once 16
#define url_len 256
#define url_text "http://192.168.43.84:8088/carSta/api/getBindSta?id=%s"
#define url_reg  "http://192.168.43.84:8088/carSta/api/regCar?id=%s"

rt_sem_t car_bind=RT_NULL;
rt_thread_t qr_thread=RT_NULL;

static void qr_thread_entry(void *params)
{
    rt_sem_take(wifi_ready, RT_WAITING_FOREVER);
    rt_sem_delete(wifi_ready);

    char *url=rt_calloc(1, url_len);
    char *resp_data=RT_NULL;
    int read_len = 0;
    int pos=0;

    struct webclient_session *session =RT_NULL;
    rt_sprintf(url,url_reg,this_id);

    session =webclient_session_create(head_len);
    webclient_get(session,url);
    webclient_close(session);

    rt_sprintf(url,url_text,this_id);
    lcd_clear(WHITE);
    while(1)
    {
        pos=0;
        resp_data=rt_calloc(1, resp_len);
        session =webclient_session_create(head_len);
        webclient_get(session, url);
        while(1)
        {
            read_len=webclient_read(session, resp_data+pos,read_once);
            pos+=read_len;
            if(read_len<=0)break;
        }
        webclient_close(session);

        if(rt_strcmp(resp_data,"true")==0)
        {
            lcd_clear(WHITE);
            lcd_show_string(20,100,32,"car is bind!");
            rt_thread_mdelay(3000);
            rt_sem_release(car_bind);
            break;
        }
        else
        {
            lcd_show_string(40, 0,32,"scan code!");
            lcd_show_image(71, 70,97, 100,gImage_qr);
        }
        rt_free(resp_data);
        rt_thread_mdelay(1000);
    }
    rt_free(url);
    rt_sem_release(car_bind);
}

void qr_thread_init()
{
    car_bind=rt_sem_create("car_bind", 0, RT_IPC_FLAG_PRIO);
    qr_thread=rt_thread_create("qr",qr_thread_entry, RT_NULL,2048, 3,5);
    rt_thread_startup(qr_thread);
}

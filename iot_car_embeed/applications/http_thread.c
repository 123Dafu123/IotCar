/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-08-20     24345       the first version
 */
#include <http_thread.h>

#define head_len 1024
#define resp_len 1024
#define read_once 16
#define url_len 256
#define url_text "http://192.168.43.84:8088/carSta/api/getSta?id=%s"
#define url_post_text "http://192.168.43.84:8088/carSta/api/setSta?leftSpeed=%d&rightSpeed=%d&id=%s"

rt_thread_t http_thread=RT_NULL;

static void sta_prase(char *root)
{
    int left=0;
    int right=0;
    char grea=0;
    sscanf(root,"{\"leftSpeed\":%d,\"rightSpeed\":%d,\"grea\":\"%c\"}",&left,&right,&grea);

    if(grea=='P')
    {
        pid_set_left_speed(0);
        pid_set_right_speed(0);
        MG513_brake();
    }
    else if(grea=='N')
    {
        pid_set_left_speed(0);
        pid_set_right_speed(0);
        MG513_free();
    }
    else if(grea=='R')
    {
        pid_set_left_speed(-1*left);
        pid_set_right_speed(-1*right);
    }
    else if(grea=='D')
    {
        pid_set_left_speed(left);
        pid_set_right_speed(right);
    }
}

static void http_thread_entry(void *para)
{
    rt_sem_take(car_bind, RT_WAITING_FOREVER);
    rt_sem_delete(car_bind);

    lcd_clear(WHITE);
    lcd_show_string(0, 100, 32, "car is running");

    char *url=rt_calloc(1, url_len);
    char *url_post=rt_calloc(1,url_len);
    char *resp_data=rt_calloc(1, resp_len);
    int read_len = 0;
    int pos=0;

    rt_sprintf(url,url_text,this_id);
    struct webclient_session *session =RT_NULL ;

    while(1)
    {
        pos=0;
        session =webclient_session_create(head_len);
        webclient_get(session, url);
        while(1)
        {
            read_len=webclient_read(session, resp_data+pos,read_once);
            pos+=read_len;
            if(read_len<=0)break;
        }
        sta_prase(resp_data);
        webclient_close(session);

        session=webclient_session_create(head_len);
        rt_sprintf(url_post, url_post_text,pid_get_left_speed(),pid_get_right_speed(),this_id);
        webclient_get(session, url_post);
        webclient_close(session);

        rt_thread_mdelay(100);
    }

    rt_free(url);
    rt_free(resp_data);
}

void http_thread_init()
{
    http_thread=rt_thread_create("http", http_thread_entry, RT_NULL,
            2048, 3, 5);
    MG513_init();
    pid_speed_control_init();
    rt_thread_startup(http_thread);
}

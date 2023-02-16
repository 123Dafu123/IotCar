#include <threads/http_thread.h>

#define head_len 1024
#define resp_len 1024
#define read_once 16
#define url_len 256
#define url_get "http://192.168.43.84:8088/carSta/api/getSta?id=%s"
#define url_post "http://192.168.43.84:8088/carSta/api/setSta?leftSpeed=%d&rightSpeed=%d&id=%s"
#define url_online "http://192.168.43.84:8088/carSta/api/online?id=%s"

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

void http_thread_entry(void *parameters)
{
    char url[url_len]={0};
    char resp_data[resp_len]={0};
    int read_len = 0;
    int pos=0;
    struct webclient_session *session =RT_NULL ;

    rt_sem_take(car_bind, RT_WAITING_FOREVER);
    rt_sem_delete(car_bind);

    lcd_clear(WHITE);
    lcd_show_string(0, 100, 32, "car is running");

    rt_sem_release(http_ready);
    rt_sem_release(http_ready);

    while(1)
    {
        rt_mutex_take(http_opt_lock, RT_WAITING_FOREVER);

        session =webclient_session_create(head_len);
        pos=0;
        rt_sprintf(url,url_get,this_id);
        webclient_get(session, url);
        while(1)
        {
            read_len=webclient_read(session, resp_data+pos,read_once);
            pos+=read_len;
            if(read_len<=0)break;
        }
        sta_prase(resp_data);
        webclient_close(session);
        rt_memset(url, 0, sizeof(url));
        rt_memset(resp_data, 0, sizeof(resp_data));

        session =webclient_session_create(head_len);
        rt_sprintf(url, url_post,pid_get_left_speed(),pid_get_right_speed(),this_id);
        webclient_get(session, url);
        webclient_close(session);
        rt_memset(url, 0, sizeof(url));
        rt_memset(resp_data, 0, sizeof(resp_data));

        session =webclient_session_create(head_len);
        rt_sprintf(url, url_online,this_id);
        webclient_get(session, url);
        rt_memset(url, 0, sizeof(url));
        rt_memset(resp_data, 0, sizeof(resp_data));
        webclient_close(session);

        rt_mutex_release(http_opt_lock);

        rt_thread_mdelay(30);
    }

    rt_free(url);
}


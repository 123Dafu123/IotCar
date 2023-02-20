#include <threads/qr_thread.h>

#define head_len 1024
#define resp_len 1024
#define read_once 16
#define url_len 256
#define url_get "http://192.168.43.84:8088/carSta/api/getBindSta?id=%s"
#define url_reg  "http://192.168.43.84:8088/carSta/api/regCar?id=%s"

void qr_thread_entry(void *parameters)
{
    char url[url_len]={0};
    char resp_data[resp_len]={0};
    int read_len = 0;
    int pos=0;
    struct webclient_session *session =RT_NULL;

    rt_sem_take(wifi_ready, RT_WAITING_FOREVER);
    rt_sem_delete(wifi_ready);

    rt_sprintf(url,url_reg,this_id);
    session =webclient_session_create(head_len);
    webclient_get(session,url);
    webclient_close(session);
    rt_memset(url, 0, sizeof(url));

    lcd_clear(WHITE);

    while(1)
    {
        pos=0;
        rt_sprintf(url,url_get,this_id);
        session =webclient_session_create(head_len);
        webclient_get(session, url);
        while(1)
        {
            read_len=webclient_read(session, resp_data+pos,read_once);
            pos+=read_len;
            if(read_len<=0)break;
        }
        if(rt_strcmp(resp_data,"true")==0)
        {
            lcd_clear(WHITE);
            lcd_show_string(20,100,32,"car is bind!");
            rt_thread_mdelay(3000);
            webclient_close(session);
            rt_sem_release(car_bind);
            break;
        }
        else
        {
            lcd_show_string(40, 0,32,"scan code!");
            lcd_show_image(71, 70,97, 100,gImage_qr);
        }
        webclient_close(session);
        rt_memset(url, 0, sizeof(url));
        rt_memset(resp_data, 0, sizeof(resp_data));

        rt_thread_mdelay(1000);
    }

    rt_sem_release(car_bind);
}


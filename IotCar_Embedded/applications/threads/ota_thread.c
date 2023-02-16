#include <threads/ota_thread.h>

#define head_len 1024
#define resp_len 256
#define read_once 16
#define url_len 256
#define url_check "http://192.168.43.84:8088/OTA/api/checkUpdateByCid?cid=%s"
#define url_update "http://192.168.43.84:8088/OTA/api/updateVersion?cid=%s"


void ota_thread_entry(void *parameters)
{
    char url[url_len]={0};
    char resp_data[resp_len]={0};
    int read_len = 0;
    int pos=0;
    struct webclient_session *session =RT_NULL ;

    rt_sem_take(http_ready, RT_WAITING_FOREVER);

    rt_pin_mode(http_ota_key, PIN_MODE_INPUT);

    while(1)
    {
        if(rt_pin_read(http_ota_key)==PIN_LOW)
        {
            rt_mutex_take(http_opt_lock, RT_WAITING_FOREVER);
            session =webclient_session_create(head_len);
            pos=0;
            rt_sprintf(url,url_check,this_id);
            webclient_get(session, url);
            while(1)
            {
                read_len=webclient_read(session, resp_data+pos,read_once);
                pos+=read_len;
                if(read_len<=0)break;
            }
            if(rt_strcmp(resp_data,"true")==0)
            {
                webclient_close(session);
                rt_memset(url, 0, sizeof(url));
                rt_memset(resp_data, 0, sizeof(resp_data));

                session =webclient_session_create(head_len);
                rt_sprintf(url,url_update,this_id);
                webclient_get(session, url);
                webclient_close(session);
                rt_memset(url, 0, sizeof(url));

                lcd_clear(WHITE);
                lcd_show_string(0, 80, 32, "VERSION %s",APP_VERSION);
                lcd_show_string(0, 120, 32, "ota is running");
                extern void http_ota(uint8_t argc, char **argv);
                http_ota(0,NULL);
            }
            else
            {
                webclient_close(session);
                rt_memset(url, 0, sizeof(url));
                rt_memset(resp_data, 0, sizeof(resp_data));

                lcd_clear(WHITE);
                lcd_show_string(0, 80, 32,"VERSION %s",APP_VERSION);
                lcd_show_string(0, 120, 32, "version is newest");
                rt_thread_mdelay(1000);
                lcd_clear(WHITE);
                lcd_show_string(0, 100, 32, "car is running");
            }
            rt_mutex_release(http_opt_lock);
        }
        rt_thread_mdelay(50);
    }
}

#include <threads/wifi_thread_my.h>

char *ssid="";
char *pswd="";
rt_err_t ret=RT_EOK;

void wifi_thread_entry(void *parameters)
{
    ssid=rt_strdup(ef_get_env("ssid"));
    pswd=rt_strdup(ef_get_env("pswd"));
    if(ssid==NULL)ssid="";
    if(pswd==NULL)pswd="";
    rt_wlan_set_mode(RT_WLAN_DEVICE_STA_NAME, RT_WLAN_STATION);
    ret=rt_wlan_connect(ssid,pswd);
    while(1)
    {
        rt_sem_take(wifi_reconnect, RT_WAITING_FOREVER);
        if(ret==RT_EOK)
        {
            lcd_clear(WHITE);
            lcd_show_string(0,100, 32, "wifi connected!");
            rt_thread_mdelay(3000);
            rt_sem_release(wifi_ready);
            break;
        }
        else
        {
            lcd_clear(WHITE);
            lcd_show_string(0, 0, 32, "wifi connect");
            lcd_show_string(0, 40, 32, "failed! please");
            lcd_show_string(0, 80, 32, "set wifi by");
            lcd_show_string(0, 120, 32, "serial");
        }
    }
}

static void set_wifi(int argc,char **argv)
{
    ssid=argv[1];
    pswd=argv[2];
    ef_set_env("ssid", ssid);
    ef_set_env("pswd", pswd);
    ef_save_env();
    ret=rt_wlan_connect(ssid, pswd);
    rt_sem_release(wifi_reconnect);
}
MSH_CMD_EXPORT(set_wifi,set_wifi)



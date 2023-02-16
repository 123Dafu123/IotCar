#include <threads/rebind_thread.h>

int sta=0;

static void bind_enter()
{
   lcd_clear(WHITE);
   lcd_show_string(40, 0,32,"scan code!");
   lcd_show_image(71, 70,97, 100,gImage_qr);
}

static void bind_exit()
{
    lcd_clear(WHITE);
    lcd_show_string(0, 100, 32, "car is running");
}

void rebind_thread_entry(void *parameters)
{
    rt_sem_take(http_ready, RT_WAITING_FOREVER);

    rt_pin_mode(bind_enter_key,PIN_MODE_INPUT);
    rt_pin_mode(bind_exit_key, PIN_MODE_INPUT);

    while(1)
    {
        if(rt_pin_read(bind_enter_key)==PIN_LOW)
        {
            bind_enter();
        }
        else if(rt_pin_read(bind_exit_key)==PIN_LOW&&sta==0)
        {
            bind_exit();
        }
        rt_thread_mdelay(50);
    }
}

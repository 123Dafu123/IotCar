/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2022-09-22     24345       the first version
 */
#include <rebind_interrupt.h>

int sta=0;

static void key0_hrq(void *param)
{
    if(sta==0)
    {
        lcd_clear(WHITE);
        lcd_show_string(40, 0,32,"scan code!");
        lcd_show_image(71, 70,97, 100,gImage_qr);
        sta=1;
    }
}

static void key1_hrq(void *param)
{
    if(sta==1)
    {
        lcd_clear(WHITE);
        lcd_show_string(0, 100, 32, "car is running");
    }
}

void rebind_init()
{
    rt_pin_mode(key0, PIN_MODE_INPUT);
    rt_pin_mode(key1, PIN_MODE_INPUT);

    rt_pin_attach_irq(key0, PIN_IRQ_MODE_FALLING,key0_hrq, RT_NULL);
    rt_pin_attach_irq(key1, PIN_IRQ_MODE_FALLING,key1_hrq, RT_NULL);

    rt_pin_irq_enable(key0, PIN_IRQ_ENABLE);
    rt_pin_irq_enable(key1, PIN_IRQ_ENABLE);
}

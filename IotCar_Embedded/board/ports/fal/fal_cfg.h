/*
 * Copyright (c) 2006-2021, RT-Thread Development Team
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Change Logs:
 * Date           Author       Notes
 * 2018-08-21     MurphyZhao   the first version
 */
#ifndef _FAL_CFG_H_
#define _FAL_CFG_H_

#include <rtthread.h>
#include <board.h>

/* enable stm32l4 onchip flash driver sample */
#define FAL_FLASH_PORT_DRIVER_STM32L4
/* enable SFUD flash driver sample */
#define FAL_FLASH_PORT_DRIVER_SFUD
#define RT_APP_PART_ADDR 0x08008000

extern const struct fal_flash_dev stm32_onchip_flash;
extern const struct fal_flash_dev nor_flash0;

/* flash device table */
#define FAL_FLASH_DEV_TABLE                                          \
{                                                                    \
    &stm32_onchip_flash,                                             \
    &nor_flash0,                                                     \
}
/* ====================== Partition Configuration ========================== */
#ifdef FAL_PART_HAS_TABLE_CFG
/* partition table */
#define FAL_PART_TABLE                                                                                              \
{                                                                                                                   \
    {FAL_PART_MAGIC_WROD, "bootloader", "onchip_flash",                                    0,        32 * 1024, 0}, \
    {FAL_PART_MAGIC_WROD,        "app", "onchip_flash",                            32 * 1024,       480 * 1024, 0}, \
    {FAL_PART_MAGIC_WROD,  "easyflash",    "nor_flash",                                    0,      1024 * 1024, 0}, \
    {FAL_PART_MAGIC_WROD,   "download",    "nor_flash",                          1024 * 1024,      1024 * 1024, 0}, \
    {FAL_PART_MAGIC_WROD, "filesystem",    "nor_flash",                   (1024+1024) * 1024, 14 * 1024 * 1024, 0}, \
}
#endif /* FAL_PART_HAS_TABLE_CFG */
#endif /* _FAL_CFG_H_ */

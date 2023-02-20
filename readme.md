本系统是由springboot构成后端，uniapp构成前端手机app，rt-thread+stm32构成前端嵌入式系统，mssql做后台数据库的物联网系统。

用户可用手机app控制小车，并可实现多用户绑定、控制不同小车。

详情可见设计报告。

IotCar_Database为数据库文件

IotCar_Embeed为嵌入式小车源码

IotCar_Server为后台服务端源码

IotCar_APP为手机app源码

更新信息：2.0.1版本
	1.小车支持了OTA升级功能，优化小车控制，支持x轴速度以及绕z轴旋转速度直接控制，支持原地转向功能
	2.优化了手机APP登录方式
	3.服务端提供了版本管理API
	4.更新了设计报告

<template>
	<view>
		<log-reg class="content" @log="logHandler" @reg="regHandler"></log-reg>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onShow() {
			plus.navigator.setFullscreen(true)
		},
		methods: {
			logHandler(log) {
				uni.request({
					url: `http://192.168.43.84:8088/logReg/api/logCheck?id=${log.id}&pswd=${log.pswd}`,
					method: "GET",
					success(res) {
						if (res.data) {
							uni.redirectTo({
								url: `/pages/index/index?id=${log.id}`
							})
							uni.showToast({
								title: "登录成功",
								icon: "success"
							})
						} else {
							uni.showToast({
								title: "密码或账号错误",
								icon: "error"
							})
						}
					},
					timeout: 1000,
					fail() {
						uni.showToast({
							title: "网络异常",
							icon: "error"
						})
					}
				})
			},
			regHandler(reg) {
				uni.request({
					url: `http://192.168.43.84:8088/logReg/api/reg?id=${reg.id}&name=${reg.name}&phone=${reg.phone}&pswd=${reg.pswd}`,
					method: "GET",
					timeout: 1000,
					success(res) {
						if (res.data) {
							uni.showToast({
								title: "注册成功",
								icon: "success"
							})
						} else {
							uni.showToast({
								title: "该id已注册",
								icon: "error"
							})
						}
					},
					fail() {
						uni.showToast({
							title: "网络异常",
							icon: "error"
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
		max-width: 800px;
		margin: 0 auto;
		height: 100%;
		background-color: white;
		position: relative;
	}

	.content {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>

<template>
	<view class="user-info">
		<button class="info" @click="seenHandler"></button>
		<view :class="{'yes':seen,'no':!seen}" class="box">
			<view><span>账号&nbsp;:</span><input type="text" v-model="id" /></view>
			<view><span>用户&nbsp;:</span><input type="text" v-model="name" /></view>
			<view><span>手机&nbsp;:</span><input type="text" v-model="phone" /></view>
			<view><span>密码&nbsp;:</span><input type="text" v-model="pswd" /></view>
			<button class="mod" @click="modHandler">修改</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				name: "",
				phone: "",
				pswd: "",
				seen: false
			}
		},
		methods: {
			seenHandler(e) {
				this.seen = !this.seen
				uni.request({
					url: `http://192.168.43.84:8088/user/api/getUser?id=${this.userId}`,
					method: "GET",
					success: (res) => {
						this.id = res.data[0].id
						this.name = res.data[0].name
						this.phone = res.data[0].phone
						this.pswd = res.data[0].pswd
					}
				})
			},
			modHandler(e) {
				uni.request({
					url: `http://192.168.43.84:8088/user/api/modUser?id=${this.id}&name=${this.name}&phone=${this.phone}&pswd=${this.pswd}&oldId=${this.userId}`,
					method: "GET",
					timeout: 1000,
					fail: (e) => {
						uni.showToast({
							title: "网络异常",
							icon: "error"
						})
					},
					success: (e) => {
						if (e.data) {
							this.flashUser()
							uni.showToast({
								title: "修改成功",
								icon: "success"
							})
						} else {
							this.flashUser()
							uni.showToast({
								title: "修改失败",
								icon: "error"
							})
						}
					}

				})
			},
			flashUser() {
				uni.request({
					url: `http://192.168.43.84:8088/user/api/getUser?id=${this.userId}`,
					method: "GET",
					success: (res) => {
						this.id = res.data[0].id
						this.name = res.data[0].name
						this.phone = res.data[0].phone
						this.pswd = res.data[0].pswd
					}
				})
			}
		},
		mounted() {
			this.flashUser()
		},
		props: {
			userId: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>
	.box {
		width: 250px;
		height: 200px;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		background-color: white;
		box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
		position: relative;
		font-size: 12px;
		border-radius: 20px;
	}

	.no {
		display: none;
	}

	.yes {
		display: flex;
	}

	.info {
		width: 30px;
		height: 30px;
		border-radius: 15px;
		background-image: url(@/static/info.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100%;
	}

	.box view {
		display: flex;
		flex-direction: row;
		margin-top: 10px;
		margin-left: 10px;
	}

	.box view span {
		width: 40px;
		height: 20px;
		line-height: 20px;
		display: inline-block;
	}

	.box input {
		display: inline-block;
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		text-indent: 10px;
	}

	.box input:hover {
		border: 1px #aa488f solid;
		border-radius: 10px;
		transform: scale(1.1);
		box-shadow: 0px 6px 20px rgba(170, 72, 143, 0.603);
	}

	.mod {
		background-color: #aa488f;
		color: white;
		width: 100px;
		height: 30px;
		font-size: 16px;
		border-radius: 15px;
		line-height: 30px;
	}
</style>

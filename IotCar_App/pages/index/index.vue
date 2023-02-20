<template>
	<view class="content">
		<speedControler name="left" @acc-speed="()=>{setSpeed(`acc`)}" @dec-speed="()=>{setSpeed(`dec`)}"
			@brake="()=>{brake(`speed`)}" @disBrake="()=>{disBrake(`speed`)}">
		</speedControler>
		<runinfo :isBrake="isBrake" :isConnected="isConnected" :leftSpeedPanel="leftSpeedPanel"
			:rightSpeedPanel="rightSpeedPanel">
		</runinfo>
		<turnControler name="right" @acc-turn="()=>{setTurn(`acc`)}" @dec-turn="()=>{setTurn(`dec`)}"
			@brake=" ()=>{brake(`turn`)}" @disBrake="()=>{disBrake(`turn`)}">
		</turnControler>
	</view>
	<grea class=" bottom" @changeGrea="changeGrea"></grea>
	<bind-car class="bind" @bind="bindHandler" :bindId="bindId" :isBind="isBind"></bind-car>
	<user-info class="info" :userId="id"></user-info>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				bindId: "",
				isBind: false,
				isBrake: false,
				isConnected: false,
				xSpeed: 0,
				zSpeed: 0,
				grea: "P",
				leftSpeedPanel: {
					id: 'left',
					min: 0,
					max: 20,
					value: 0,
					status: false,
					startAngle: 0.75,
					endAngele: 0.35,
					padding: 0,
					name: '<',
					width: 200,
					axisTick: {
						color: '#aa488f,#aa909d',
						number: 10,
						subNumber: 10,
						width: 20,
						subWidth: 10,
						subHeight: 2,
						padding: 20
					},
					detail: {
						title: {
							offsetCenter: [0, 0],
							color: "#aa488f",
							fontSize: 36,
							fontWeight: 1000
						},
						value: {
							color: "#aa488f",
							fontSize: 20,
							fontSize: 18
						}
					}
				},
				rightSpeedPanel: {
					id: 'right',
					min: 0,
					max: 20,
					value: 0,
					status: false,
					startAngle: 0.75,
					endAngele: 0.35,
					padding: 0,
					name: '>',
					width: 200,
					axisTick: {
						color: '#aa488f,#aa909d',
						number: 10,
						subNumber: 10,
						width: 20,
						subWidth: 10,
						subHeight: 2,
						padding: 20
					},
					detail: {
						title: {
							offsetCenter: [0, 0],
							color: "#aa488f",
							fontSize: 36,
							fontWeight: 1000
						},
						value: {
							color: "#aa488f",
							fontSize: 20,
							fontSize: 18
						}
					}
				}
			}
		},
		methods: {
			changeGrea(grea) {
				this.grea = grea
				this.xSpeed = 0
				this.zSpeed = 0
			},
			setSpeed(direct) {
				if (direct == 'acc') {
					if (this.xSpeed < 20)
						this.xSpeed++;
				}
				if (direct == 'dec') {
					if (this.xSpeed > 0)
						this.xSpeed--;
				}
			},
			setTurn(direct) {
				if (direct == 'acc') {
					if (this.zSpeed < 20)
						this.zSpeed++;
				}
				if (direct == 'dec') {
					if (this.zSpeed > -20)
						this.zSpeed--;
				}
			},
			brake(direct) {
				this.isBrake = true
				if (direct == 'speed') {
					this.xSpeed = 0
					this.zSpeed = 0
				} else if (direct == 'turn') {
					this.zSpeed = 0
				}

			},
			disBrake(direct) {
				this.isBrake = false
			},
			bindHandler(e) {
				uni.scanCode({
					success: (res) => {
						var carId = res.result
						uni.request({
							url: `http://192.168.43.84:8088/bind/api/bindCar?uid=${this.id}&cid=${carId}`,
							method: "GET",
							success: (res) => {
								if (res.data) {
									this.isBind = true
									this.bindId = carId
									uni.showToast({
										title: "绑定成功",
										icon: "success"
									})
								} else {
									uni.showToast({
										title: "绑定失败",
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
					}
				})

			}
		},
		onLoad(option) {
			this.id = option.id
		},
		mounted() {
			uni.request({
				url: `http://192.168.43.84:8088/bind/api/checkBind?uid=${this.id}`,
				method: "GET",
				success: (res) => {
					if (res.data.length == 0) {
						this.isBind = false
						this.bindId = ""
					} else {
						this.isBind = true
						this.bindId = res.data[0].id
					}
				}
			})

			setInterval(
				() => {
					uni.request({
						url: `http://192.168.43.84:8088/appSta/api/getSta?id=${this.id}`,
						method: "GET",
						success: (res) => {
							if (res.data[0] != undefined) {
								this.isConnected = res.data[0].connectedSta
								this.leftSpeedPanel.value = res.data[0].leftSpeed
								this.rightSpeedPanel.value = res.data[0].rightSpeed
							}
						}
					})

					uni.request({
						url: `http://192.168.43.84:8088/appSta/api/setSta?leftS=${this.xSpeed}&rightS=${this.zSpeed}&grea=${this.grea}&id=${this.id}`,
						method: "GET",
					})
				}, 10
			)
		}
	}
</script>

<style scoped>
	page {
		max-width: 800px;
		margin: 0 auto;
		height: 100%;
		background-color: white;
		position: relative;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.bottom {
		position: absolute;
		left: 50%;
		bottom: 8%;
		transform: translateX(-50%);
	}

	.bind {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.info {
		position: absolute;
		z-index: 999;
		top: 10px;
		left: 10px;
	}
</style>

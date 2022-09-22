<template>
	<view class="runinfo">
		<best-gauge class="left" :config="leftSpeedPanel"></best-gauge>
		<view class="staAndGerainfo">
			<image src="@/static/ini.png" class="logo"></image>
			<view class=" staView">
				<view class="wifiSta" :class="{'connected':isConnected,'disConnected':!isConnected}"></view>
				<view class="brakeSta" :class="{'brake':isBrake,'disBrake':!isBrake}"></view>
			</view>
		</view>
		<best-gauge class="right" :config="rightSpeedPanel"></best-gauge>
	</view>

</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			isBrake: {
				type: Boolean,
				default: false
			},
			isConnected: {
				type: Boolean,
				default: true
			},
			leftSpeedPanel: {
				type: Object,
				default: {}
			},
			rightSpeedPanel: {
				type: Object,
				default: {}
			}
		}
	}
</script>

<style scoped>
	.runinfo {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border-radius: 20px;
		box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
		background-color: white;
		width: 640px;
		position: relative;
	}

	.staAndGerainfo {
		font-size: 20px;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #21252b;

	}

	.staAndGerainfo .logo {
		height: 50px;
		width: 50px;
		display: block;
	}

	.staAndGerainfo .staView {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.staAndGerainfo .wifiSta {
		height: 30px;
		width: 30px;
		background-size: 100%;
		background-position: center;
	}

	.connected {
		background-image: url("@/static/wifi-green.png");
	}

	.disConnected {
		background-image: url("@/static/wifi-red.png");
	}

	.staAndGerainfo .brakeSta {
		height: 30px;
		width: 30px;
		background-size: 100%;
		background-position: center;
		background-image: url("@/static/stop.png");
		transition: opacity .2s;
	}

	.brake {
		opacity: 1;
	}

	.disBrake {
		opacity: 0;
	}

	.gauge-box.left {

		width: 200px;
		transform: translateY(0%);
	}

	.gauge-box.right {
		width: 200px;

	}
</style>

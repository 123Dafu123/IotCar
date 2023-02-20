<template>
	<view class="speedControler">
		<view class="acc" @touchstart="acc"></view>
		<view class="stop" @touchstart="brake" @touchend="disBrake"></view>
		<view class="dec" @touchstart="dec"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			acc(e) {
				this.$emit('acc-speed')
				uni.vibrateShort()
			},
			brake(e) {
				this.$emit('brake')
				uni.vibrateShort()
			},
			disBrake(e) {
				this.$emit('disBrake')
				uni.vibrateShort()
			},
			dec(e) {
				this.$emit('dec-speed')
				uni.vibrateShort()
			}
		}
	}
</script>

<style scoped>
	.speedControler {
		height: 200px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.acc {
		width: 40px;
		height: 40px;
		margin: 10px;
		border: none;
		background-image: url("@/static/up.png");
		background-position: center;
		background-size: 100%;
		background-color: white;

	}

	.acc:active {
		background-image: url("@/static/up-a.png");
	}

	.dec {
		width: 40px;
		height: 40px;
		margin: 10px;
		border: none;
		background-image: url("@/static/down.png");
		background-position: center;
		background-size: 100%;
		background-color: white;
	}

	.dec:active {
		background-image: url("@/static/down-a.png");
	}

	.stop {
		margin: 10px;
		width: 50px;
		height: 50px;
		background-image: url("@/static/stop-car.png");
		background-position: center;
		background-size: 100%;
	}

	.stop:active {
		background-image: url("@/static/stop-car-a.png");
	}
</style>

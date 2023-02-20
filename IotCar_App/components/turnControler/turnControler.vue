<template>
	<view>
		<view class="turnControler">
			<view class="acc" @touchstart="acc" @touchend="accEnd"></view>
			<view class="stop" @touchstart="brake" @touchend="disBrake"></view>
			<view class="dec" @touchstart="dec" @touchend="decEnd"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			acc(e) {
				this.$emit('acc-turn')
				uni.vibrateShort()
			},
			accEnd(e) {
				this.$emit('acc-turn-end')
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
				this.$emit('dec-turn')
				uni.vibrateShort()
			},
			decEnd(e) {
				this.$emit('dec-turn-end')
				uni.vibrateShort()
			}
		}
	}
</script>

<style>
	.turnControler {
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
		transform: rotateZ(90deg);

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
		transform: rotateZ(90deg);
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

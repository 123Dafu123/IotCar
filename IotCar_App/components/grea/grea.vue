<template>
	<view class="geraView">
		<swiper class="gera" @change="changeGrea" easing-function="linear">
			<swiper-item v-for="grea in greaList">{{grea}}</swiper-item>
		</swiper>
		<view class="nowGera">{{grea}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				greaList: ["P", "R", "N", "D"],
				grea: "P"
			}
		},
		methods: {
			changeGrea(e) {
				this.grea = this.greaList[e.detail.current]
				this.$emit('changeGrea', this.grea)
				uni.vibrateShort();
			}
		}
	}
</script>

<style scoped>
	.geraView {
		width: 200px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.geraView .gera {
		font-size: 20px;
		height: 40px;
		width: 80px;
		line-height: 40px;
		text-align: center;
		color: white;
		background-color: #21252b;
		border-radius: 20px;
	}

	.geraView .nowGera {
		font-size: 20px;
		width: 40px;
		height: 40px;
		line-height: 40px;
		background-color: #21252b;
		text-align: center;
		color: white;
		border-radius: 20px;
	}
</style>

<template>
	<view class="bind-car">
		{{isBind?`已绑定:`:`未绑定`}}
		{{bindId}}
		<button @click="bindHandler">{{isBind?`改绑`:`去绑定`}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			isBind: {
				type: Boolean,
				default: false
			},
			bindId: {
				type: String,
				default: ""
			}
		},
		methods: {
			bindHandler(e) {
				this.$emit('bind')
			}
		}
	}
</script>

<style scoped>
	.bind-car {
		width: 200px;
		height: 20px;
		line-height: 20px;
		border: 1px #aa488f solid;
		border-radius: 10px;
		font-size: 12px;
		position: relative;
		text-align: left;
		text-indent: 20px;
		color: black;
	}

	.bind-car button {
		display: inline-block;
		width: 70px;
		height: 20px;
		line-height: 20px;
		border: none;
		position: absolute;
		right: -1px;
		border-radius: 10px;
		background-color: #aa488f;
		color: white;
		font-size: 12px;
		text-indent: 0;
	}
</style>

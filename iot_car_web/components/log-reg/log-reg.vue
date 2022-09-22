<template>
	<view class="log-reg">
		<view class="log-reg-box">
			<text class="title">登录</text>
			<input class="loginfo" type="text" placeholder="请输入手机号或id" v-model="logId" />
			<input class="loginfo safe" type="password" placeholder="请输入密码" v-model="logPswd" />
			<button class="check" @click="logHandler">登录</button>
		</view>
		<view class="log-reg-box reg">
			<text class="title">注册</text>
			<input class="loginfo" type="text" placeholder="请输入id" v-model="regId" />
			<input class="loginfo" type="text" placeholder="请输入用户名" v-model="regName" />
			<input class="loginfo" type="text" placeholder="请输入手机号" v-model="regPhone" />
			<input class="loginfo" type="text" placeholder="请输入密码" v-model="regPswd" />
			<button class="check" @click="regHanler">注册</button>
		</view>
		<view class="sliderBox" :class="{'sliderleft':log,'sliderright':!log}">
			<text class="title">{{log?"还未注册?":"欢迎注册!"}}</text>
			<button class="check" @click="sliderBoxCheckHandler">{{log?"去注册":"去登录"}}> </button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				log: true,
				logId: "",
				logPswd: "",
				regId: "",
				regName: "",
				regPhone: "",
				regPswd: ""
			};
		},
		methods: {
			sliderBoxCheckHandler() {
				this.log = !this.log
			},
			logHandler() {
				this.$emit("log", {
					id: this.logId,
					pswd: this.logPswd
				})
			},
			regHanler() {
				this.$emit("reg", {
					id: this.regId,
					name: this.regName,
					phone: this.regPhone,
					pswd: this.regPswd
				})
			}
		}
	}
</script>

<style scoped>
	.log-reg {
		border-radius: 20px;
		box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
		background-color: white;
		width: 640px;
		height: 250px;
		position: relative;
	}

	.log-reg-box {
		width: 320px;
		height: 250px;
		border-radius: 20px 0 0 20px;
		position: absolute;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.reg {
		left: 0;
	}

	.title {
		font-size: 30px;
		color: #aa488f;
		font-weight: bolder;
	}


	.loginfo {
		width: 200px;
		height: 20px;
		line-height: 20px;
		font-size: 16px;
		border: 1px #aa488f solid;
		border-radius: 10px;
		text-indent: 10px;
		transition: all 0.2s;
		color: black;
	}

	.loginfo:hover {
		transform: scale(1.1);
		box-shadow: 0px 6px 20px rgba(170, 72, 143, 0.603);
	}

	.loginfo:active {
		transform: scale(1.1);
		box-shadow: 0px 6px 20px rgba(170, 72, 143, 0.603);
	}

	.check {
		width: 100px;
		height: 30px;
		line-height: 30px;
		border-radius: 15px;
		border: none;
		background-color: #aa488f;
		color: white;
		font-size: 20px;
	}

	.check:active {
		transform: scale(1.1);
		box-shadow: 0px 6px 20px rgba(170, 72, 143, 0.603);
	}

	.sliderBox {
		width: 320px;
		height: 250px;
		left: 0;
		position: absolute;
		z-index: 1;
		background-color: #aa488f;
		transition: all 1s;
	}

	.sliderleft {
		transform: translateX(0);
		border-radius: 20px 0 0 20px;
	}

	.sliderright {
		transform: translateX(100%);
		border-radius: 0px 20px 20px 0px;
	}

	.sliderBox .title {
		display: block;
		color: white;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.sliderBox .check {
		background-color: white;
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		color: #aa488f;
		transition: all .2s;
	}

	.sliderBox .check:active {
		color: #aa879f;

	}
</style>

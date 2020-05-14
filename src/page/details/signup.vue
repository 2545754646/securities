<template>
	<div class="login">
		<div class="top">
			美港通
		</div>
		<div class="content">
			<div class="left fl">
				<div style="position: absolute;left: 0;top: 0;">
					<img src="../../assets/image/left-1.png" />
				</div>
				<div style="position: absolute;right: 0;bottom: 0;">
					<img src="../../assets/image/left-2.png" />
				</div>
				<div class="cont">
					<h3>梦飞 美港宝</h3>
					<h5>简明直观的市场交易软件</h5>
					<p style="color: #707f95;margin-bottom: 15px;">吉姆.罗杰斯<span style="margin-left: 20px;">华尔街著名投资人</span></p>
					<p style="line-height: 26px;">美港宝全球资产配置等一站式港股美股交易平台，一个身份证开户，买遍全球资本市场。</p>
					<p style="line-height: 26px;margin-bottom: 86px;">更懂华人的国际化股票交易软件：根据华人的投资习惯开发的全球化股票软件，完全汉化的个股信息、交易指标和全球新闻资讯，无障碍买遍全球资本市场 。</p>
					<p style="border-top: 1px solid #566374;padding-top: 20px;">梦飞专业版 — 覆盖美股、ETF、期权、港股、英股、A股等</p>
				</div>
			</div>
			<div class="right fr">
				<div class="session-form__container">
					<h2 class="session-form__header">注册<span>已有账号？<router-link to="/login" style="color: #7abdc3;" tag="span">点此登录</router-link></span></h2>
					<div v-if="use">
						<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
							<el-form-item label="" prop="mobile">
								<el-input placeholder="请输入手机号" type="text" v-model="ruleForm.mobile" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="" prop="checkPass">
								<el-input placeholder="请输入密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="" prop="recheckPass">
								<el-input placeholder="请再次输入密码" type="password" v-model="ruleForm.recheckPass" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="" prop="code">
								<el-input placeholder="手机验证码" type="text" v-model="ruleForm.code" autocomplete="off" style="width: 50%;float:left;"></el-input>
								<el-button style="width: 50%;color: #FE7300;border: 1px solid #FE7300;" v-show="show" @click="yzm()">发送验证码</el-button>
								<el-button style="width: 50%;color: #FE7300;border: 1px solid #FE7300;margin-left: 0;" disabled v-show="!show">{{count}}秒后获取</el-button>
							</el-form-item>
							<el-form-item label="" prop="checked">
								<!--<p class="mode">-->
									<el-checkbox v-model="ruleForm.checked">我已阅读并同意</el-checkbox><a href="#">使用条款</a>以及<a href="#">非活跃账号处理规范</a>
								<!--</p>-->
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
							</el-form-item>
						</el-form>
					</div>
					<p class="dl"><!--<span class="c"><i class="iconfont icon-c1"></i></span>--><img src="../../assets/image/bt.png" style="margin-right: 10px;"/>使用提供的账号登录</p>
					<div class="session-login-oauth__container">
						<div class="field">
							<div class="ui horizontal divider session-login__oauth-title">
								<span class="text-muted">
									其他方式登录
								</span>
							</div>
						</div>
						<div class="ui horizontal list session-oauth__list" style="position: relative;">
							<div class="item">
								<div class="git-other-login-icon">
									<i class="icon-weixindenglu iconfont wechat" title="使用微信帐号登录"></i>
								</div>
							</div>
							<div class="item">
								<div class="git-other-login-icon">
									<i class="icon-QQ iconfont qq" title="使用 QQ 帐号登录"></i>
								</div>
							</div>
							<div class="item">
								<div class="git-other-login-icon">
									<i class="github icon-dingding1 iconfont" title="使用钉钉帐号登录"></i>
								</div>
							</div>
							<div class="item">
								<div class="git-other-login-icon">
									<i class="weibo icon-weibo-copy iconfont" title="使用微博帐号登录"></i>
								</div>
							</div>
							<div class="item">
								<span class="session-oauth__other-icon js-popup-default" data-popup-hoverable="true" data-position="left center">
									<i class="iconfont icon-more"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--<div class="bottom">
			<img src="../../assets/image/bg-right.png" />
		</div>-->
	</div>
</template>

<script>
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				let pattphone = /^1[3456789][0-9]{9}$/;
				if(value === '') {
					callback(new Error('请输入手机号'));
				} else if (!pattphone.test(this.ruleForm.mobile)){
					callback(new Error('手机号格式不正确'))
				}else {
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					callback();
				}
			};
			var validatePass3 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.checkPass) {
					callback(new Error('两次输入密码不一致'))
				} else {
					callback();
				}
			};
//			var validatePass3 = (rule, value, callback) => {
//				if(value === '') {
//					callback(new Error('请输入手机号'));
//				} else {
//					callback();
//				}
//			};
			var validatePass4 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入验证码'));
				} else {
					callback();
				}
			};
			var validatePass5 = (rule, value, callback) => {
				if(value === false) {
					callback(new Error('请同意协议'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					mobile: '', //账号
					checkPass: '', //密码
					recheckPass: '',
					code: '',
					checked: false
				},
				rules: {
					mobile: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					recheckPass: [{
						validator: validatePass3,
						trigger: 'blur'
					}],
					code: [{
						validator: validatePass4,
						trigger: 'blur'
					}],
					checked: [{
						validator: validatePass5,
						trigger: 'blur'
					}]
				},
				sendId: '', //发送短信验证码id
//				checked: false, //是否勾选协议
				use: true, //账号密码登录
				show: true, //是否显示
				count: '', //秒
				timer: null, //时间
			}
		},
		mounted() {
			
			
		},
		created () {
			
		},
		methods: {
			//账号密码注册
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						let param = new URLSearchParams();
						param.append("Telephone", this.ruleForm.mobile);
						param.append("UserPassword", this.ruleForm.checkPass);
						param.append("ValidateCode", this.ruleForm.code);
						param.append("SendID", this.sendId);
						this.$axios({
								method: "post",
//								url: this.$store.state.api + "api/ALogin/Login",
								url: "/api/api/UserInfo/RegisterAccount",
								async: false,
								data: param
							})
							.then(
								function(data) {
									console.log(data)
									if(data.data.ExcuteCode == 0){
										this.$message({
								            message: '注册成功',
								            type: 'success'
								        });
								        this.$router.push('/login')
//								        localStorage.setItem('Token',data.data.Token);
//								        localStorage.setItem('parameter',JSON.stringify(data.data.Msg));
									}else{
										this.$message.error(data.data.ExcuteMessage);
				          				return false
									}
								}.bind(this)
							)
							.catch(function(err) {
								console.log(err);
								console.log("执行失败");
							});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			
			//获取验证码
			yzm() {
				this.ruleForm.code = ''
				let pattphone = /^1[3456789][0-9]{9}$/
				if(this.ruleForm.mobile == '' || this.ruleForm.mobile == null) {
					this.$message.error('手机号不能为空');
				} else if(!pattphone.test(this.ruleForm.mobile)) {
					this.$message.error('手机号格式有误');
				} else {
					let param = new URLSearchParams()
					param.append('Telephone', this.ruleForm.mobile)
					param.append('SendType', 0)
					this.$axios({
							method: 'post',
							url: "/api/api/RecordTelephoneSend/SendTelephoneMessage",
							async: false,
							data: param,
						})
						.then(function(data) {
							console.log(data)
							if(data.data.ExcuteCode == 1) {
								this.$message.error(data.data.ExcuteMessage);
								return false
							} else {
								this.$message({
									message: data.data.ExcuteMessage,
									type: 'success'
								});
								this.sendId = data.data.Data.SendID;
								const TIME_COUNT = 59;
								if(!this.timer) {
									this.count = TIME_COUNT;
									this.show = false;
									this.timer = setInterval(() => {
										if(this.count > 1 && this.count <= TIME_COUNT) {
											this.count--;
										} else {
											this.show = true;
											clearInterval(this.timer);
											this.timer = null;
										}
									}, 1000)
								}
							}
						}.bind(this))
						.catch(function(err) {
							console.log(err)
							console.log('执行失败')
						});
				}
			},
			
			
//			//短信验证码登录
//			dx1() {
//				this.dx = false;
//				this.user = true;
//				this.mob = true;
//				this.use = false;
//			},
//			//账号密码登录
//			user1() {
//				this.user = false;
//				this.dx = true;
//				this.use = true;
//				this.mob = false;
//			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		.top {
			text-align: center;
			line-height: 160px;
			font-weight: bold;
			font-size: 40px;
		}
		.content {
			width: 1000px;
			height: 567px;
			margin: auto;
			overflow: hidden;
			position: relative;
			z-index: 9;
			box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.3);
			.left {
				float: left;
				width: 50%;
				height: 567px;
				position: relative;
				box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.3);
				background: linear-gradient(0deg, #3A485A 0%, #607089 100%);
				.cont{
					padding: 95px 80px 48px;
					color: #fff;
					font-size: 13px;
					h3{
						font-size: 28px;
						margin-bottom: 10px;
					}
					h5{
						font-size: 20px;
						margin-bottom: 50px;
					}
				}
			}
			.right {
				float: left;
				width: 50%;
				height: 567px;
				background: #FFFFFF;
				box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.3);
				.session-form__container {
					height: 100%;
					padding: 84px 75px 48px;
					.session-form__header {
						margin-bottom: 24px;
						font-size: 24px;
						color: #404b58;
						line-height: 24px;
						span {
							float: right;
							font-size: 12px;
							cursor: pointer;
						}
					}
					/deep/ .el-form-item__content {
						margin-left: 0 !important;
					}
					.el-button--primary {
						background: #f38d30;
						width: 100%;
						border: 1px solid #f38d30;
						font-size: 16px;
					}
					.mode {
						margin-bottom: 20px;
						color: #005980;
						cursor: pointer;
					}
					.dl {
						text-align: center;
						font-size: 16px;
						color: #323232;
						.c {
							width: 32px;
							height: 32px;
							background: #45b128;
							display: inline-block;
							border-radius: 50%;
							text-align: center;
							line-height: 32px;
							margin-right: 20px;
							i {
								color: #fff;
								font-size: 20px;
							}
						}
					}
					.session-login-oauth__container {
						margin-top: 24px;
						.divider {
							display: table;
							white-space: nowrap;
							height: auto;
							margin: '';
							line-height: 1;
							text-align: center;
							font-weight: normal;
							margin: 1rem 0rem;
							text-transform: uppercase;
							letter-spacing: 0.05em;
							color: #8C92A4;
						}
						.divider:before {
							background-position: right 1em top 50%;
						}
						.divider:after {
							background-position: left 1em top 50%;
						}
						.divider:before,
						.divider:after {
							background-image: url(../../assets/image/hx.png);
							content: '';
							display: table-cell;
							position: relative;
							top: 50%;
							width: 50%;
							background-repeat: no-repeat;
						}
						.list {
							overflow: hidden;
							.item {
								width: 20%;
								height: 50px;
								float: left;
								text-align: center;
								i {
									font-size: 32px;
									cursor: pointer;
								}
								.wechat {
									color: #46D800;
								}
								.qq {
									color: #00b0fb;
								}
								.github {
									color: #3795F9;
								    font-size: 36px;
								}
								.weibo{
									color: #e32932;
								}
							}
							.session-oauth__other-icon {
								width: 32px;
								height: 32px;
								display: inline-block;
								background: #8DAEC6;
								text-align: center;
								line-height: 32px;
								border-radius: 50%;
								i {
									color: #fff;
									font-size: 20px;
								}
							}
							.session-oauth__other-list {
								overflow: hidden;
								.git-other-login-icon {
									width: 25%;
									float: left;
								}
							}
						}
					}
				}
			}
		}
		.bottom {
			position: absolute;
			bottom: 0;
			right: 0;
		}
	}
</style>
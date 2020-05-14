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
					<h2 class="session-form__header">重置密码<!--<span>没有账号？<router-link to="/signup" style="color: #7abdc3;" tag="span">点此注册</router-link></span>--></h2>
					<!--<div v-if="use">
						<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
							<el-form-item label="" prop="name">
								<el-input placeholder="请输入手机号" type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="" prop="checkPass">
								<el-input placeholder="请输入密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
							</el-form-item>
							<p class="mode">
								<el-checkbox v-model="checked">记住我</el-checkbox><span class="fr" v-if="dx" @click="dx1()" style="float:right;">短信验证登录</span><span class="fr" v-if="user" @click="user1()">用户名密码登录</span></p>
							<el-form-item>
								<el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
							</el-form-item>
						</el-form>
					</div>-->
					<div>
						<el-form :model="ruleForm1" status-icon :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
							<el-form-item label="" prop="mobile">
								<el-input placeholder="请输入手机号" type="text" v-model="ruleForm1.mobile" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="" prop="code">
								<el-input placeholder="手机验证码" type="text" v-model="ruleForm1.code" autocomplete="off" style="width: 50%;float:left;"></el-input>
								<el-button style="width: 50%;color: #FE7300;border: 1px solid #FE7300;" v-show="show" @click="yzm()">发送验证码</el-button>
								<el-button style="width: 50%;color: #FE7300;border: 1px solid #FE7300;margin-left: 0;" disabled v-show="!show">{{count}}秒后获取</el-button>
							</el-form-item>
							<el-form-item label="" prop="checkPass">
								<el-input placeholder="请重置密码" type="password" v-model="ruleForm1.checkPass" autocomplete="off"></el-input>
							</el-form-item>
							<!--<p class="mode">
								<el-checkbox v-model="checked">记住我</el-checkbox><span class="fr" v-if="dx" @click="dx1()">短信验证登录</span><span class="fr" v-if="user" @click="user1()" style="float:right;">用户名密码登录</span></p>-->
							<el-form-item>
								<el-button type="primary" @click="submitForm1('ruleForm1')">重置密码</el-button>
							</el-form-item>
						</el-form>
					</div>
					<!--<p style="text-align: center;margin-bottom: 20px;cursor: pointer;"><a style="color: #005980;">已有账号，忘记密码？</a></p>-->
					<!--<div class="session-login-oauth__container">
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
					</div>-->
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
//			var validatePass = (rule, value, callback) => {
//				if(value === '') {
//					callback(new Error('请输入账号'));
//				} else {
//					callback();
//				}
//			};
			var validatePass1 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入手机号'));
				} else {
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入验证码'));
				} else {
					callback();
				}
			};
			var validatePass3 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入新密码'));
				} else {
					callback();
				}
			};
			return {
				ruleForm1: {
					mobile: '', //手机号
					code: '', //验证码
					checkPass: ''
				},
				rules: {
					mobile: [{
						validator: validatePass1,
						trigger: 'blur'
					}],
					code: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass3,
						trigger: 'blur'
					}]
				},
				checked: false, //是否记住账号密码
				dx: true, //短信验证码登录
				user: false, //账号密码登录
				mob: false, //短信验证码登录
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
			//账号密码登录
//			submitForm(formName) {
//				this.$refs[formName].validate((valid) => {
//					if(valid) {
//						let param = new URLSearchParams();
//						param.append("Account", this.ruleForm.name);
//						param.append("UserPassword", this.ruleForm.checkPass);//
//						this.$axios({
//								method: "post",
////								url: this.$store.state.api + "api/ALogin/Login",
//								url: "/api/api/UserInfo/LoginUserSystem",
//								async: false,
//								data: param
//							})
//							.then(
//								function(data) {
//									console.log(data)
//									if(data.data.ExcuteCode == 0) {
//										console.log(data.data)
//										this.$message({
//											message: '登录成功',
//											type: 'success'
//										});
//										localStorage.setItem('Token',data.data.Data.UserAuthenticationToken);
//										localStorage.setItem('parameter',JSON.stringify(data.data.ExcuteMessage));
//										this.$router.push('/layout/my');
//										const self = this;
//						                //判断复选框是否被勾选 勾选则调用配置cookie方法
//						                if (self.checked == true) {
//						                    //传入账号名，密码，和保存天数3个参数
//						                    self.setCookie(this.ruleForm.name, this.ruleForm.checkPass, 7);
//						                }else {
//						                  self.clearCookie();
//						                }
//									} else {
//										this.$message.error(data.data.ExcuteMessage);
//				          				return false
//									}
//								}.bind(this)
//							)
//							.catch(function(err) {
//								console.log(err);
//								console.log("执行失败");
//							});
//					} else {
//						console.log('error submit!!');
//						return false;
//					}
//				});
//			},
			//获取验证码
			yzm() {
				this.ruleForm1.code = ''
				let pattphone = /^1[3456789][0-9]{9}$/
				if(this.ruleForm1.mobile == '' || this.ruleForm1.mobile == null) {
					this.$message.error('手机号不能为空');
				} else if(!pattphone.test(this.ruleForm1.mobile)) {
					this.$message.error('手机号格式有误');
				} else {
					let param = new URLSearchParams()
					param.append('Telephone', this.ruleForm1.mobile);
					param.append('SendType', 1)
					this.$axios({
							method: 'post',
							url: "/api/api/RecordTelephoneSend/SendTelephoneMessage",
							async: false,
							data: param,
						})
						.then(function(data) {
							console.log(data)
							if(data.data.ExcuteCode == 0) {
								this.$message({
									message: data.data.ExcuteMessage,
									type: 'success'
								});
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
							} else {
								this.$message.error(data.data.ExcuteMessage);
								return false
							}
						}.bind(this))
						.catch(function(err) {
							console.log(err)
							console.log('执行失败')
						});
				}
			},
			//重置密码
			submitForm1(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						let param = new URLSearchParams();
						param.append('Telephone', this.ruleForm1.mobile);
						param.append('ValidateCode', this.ruleForm1.code);
						param.append('NewUserPassword', this.ruleForm1.checkPass);
							this.$axios({
								method: 'post',
//								url: this.$store.state.api + 'api/ALogin/PhoneLogin',
								url: '/api/api/UserInfo/ForgetPassword',
								async: false,
								data: param,
							})
							.then(function(data) {
								console.log(data)
//								console.log(data)
//								if(data.data.Code == 0){
//									this.$message.error(data.data.Msg);
//			          				return false
//								}else{
//									this.$message({
//							            message: '登录成功',
//							            type: 'success'
//							        });
//							        localStorage.setItem('Token',data.data.Token);
//							        localStorage.setItem('parameter',JSON.stringify(data.data.Msg));
//							        this.$router.push('/index')
//								}
								if (data.data.ExcuteCode == 0) {
									this.$message({
							            message: '重置密码成功',
							            type: 'success'
							        });
							        localStorage.setItem('Token',data.data.Data.UserAuthenticationToken);
							        localStorage.setItem('parameter',JSON.stringify(data.data.ExcuteMessage));
							        this.$router.push('/login')
								} else {
									this.$message.error(data.data.ExcuteMessage);
									return false;
								}
							}.bind(this))
							.catch(function(err) {
								console.log(err)
								console.log('执行失败')
							});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			//短信验证码登录
			dx1() {
				this.dx = false;
				this.user = true;
				this.mob = true;
				this.use = false;
			},
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
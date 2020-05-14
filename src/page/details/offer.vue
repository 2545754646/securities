<template>
	<div class="offer">
		<!--头部标题-->
		<Head :title="offer" />
		<div class="content">
			<div class="content-left">
				<ul class="content-left-head">
					<li class="item-title">
						<img :src="0 === nowIndex? tabBarImgArr[0].selected : tabBarImgArr[0].normal" 
							src="../../assets/image/offer_star.jpg" 
							class="star" />
					</li>
					<li class="item-title">
						<img :src="1 === nowIndex? tabBarImgArr[1].selected : tabBarImgArr[1].normal" class="clock"/>
					</li>
				</ul>
				<div class="content-left-content">
					<div class="item-content show">
						<!--全部/港股/美股/沪深的导航-->
						<ul class="offer-nav">
							<router-link to="/layout/offer/all" tag="li" active-class="active">全部</router-link>
							<router-link to="/layout/offer/hk" tag="li" active-class="active">港股</router-link>
							<router-link to="/layout/offer/meigu" tag="li" active-class="active">美股</router-link>
							<router-link to="/layout/offer/hushen" tag="li" active-class="active">沪深</router-link>
						</ul>
						<div class="navView">
							<router-view></router-view>
						</div>
					</div>
					<div class="item-content">
						内容2
					</div>
				</div>
			</div>
			<div class="content-center">
				<div class="kline">
					<div class="kline-top">
						<span class='kline-title'>腾讯控股</span>
						<span class='kline-title kline-item select'>分时</span>
						<span class='kline-title kline-item'>多日</span>
						<span class='kline-title kline-item'>日k</span>
						<span class='kline-title kline-item'>周k</span>
						<span class='kline-title kline-item'>月k</span>
						<span class='kline-title kline-item'>季k</span>
						<span class='kline-title kline-item'>年k</span>
						<span class='kline-title kline-item'>1分</span>
						<span class='kline-title kline-item'>3分</span>
						<span class='kline-title kline-item'>5分</span>
						<span class='kline-title kline-item'>15分</span>
						<span class='kline-title kline-item'>30分</span>
						<span class='kline-title kline-item'>60分</span>
						<span class='kline-title kline-item'>120分</span>
						<span class='kline-title kline-item'>4小时</span>
					</div>
					<ul class="kline-content show">
						<li class="kline-content-item">12424</li>
						<li class="kline-content-item">4343</li>
						<li class="kline-content-item">4335</li>
						<li class="kline-content-item">355</li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
						<li class="kline-content-item"></li>
					</ul>
				</div>
				<!--资金流向/港股快捷交易/资讯/公告/-->
				<div class="kline-bottom">
					<template>
					  <el-tabs v-model="activeName" @tab-click="handleClick">
					    <el-tab-pane label="资金流向" name="first">
					    	<div class="pie-flow" ref="pie" style="width: 300px; height: 300px;">
					    		
					    	</div>
					    </el-tab-pane>
					    <el-tab-pane label="港股快捷交易" name="second">
					    	<template>
							  <el-tabs v-model="HKStockExchange" type="card" @tab-click="handleExchange">
							  	<!--持仓-->
							    <el-tab-pane label="持仓" name="first">
							    	<div class="chicang">
								    	<template>
										  <el-table
										  	:fit= true
										    :data="ExchangeData"
										    style="width: 100%;"
										     :show-overflow-tooltip="true"
										    height="250">
										    <el-table-column
										      fixed
										      prop="handle"
										      label="操作"
										      width="">
										    </el-table-column>
										    <el-table-column
										      fixed
										      prop="code"
										      label="代码"
										      width="">
										    </el-table-column>
										    <el-table-column
										      fixed
										      prop="name"
										      label="名称"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="num"
										      label="持有数量@市价"
										      width=""
										      >
										    </el-table-column>
										    <el-table-column
										      prop="enable"
										      label="可卖数量"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="cost"
										      label="成本价"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="marketValue"
										      label="市值"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="yinkuiRate"
										      label="盈亏比例"
										      width="">
										    </el-table-column>         
										    <el-table-column        
										      prop="yinkuiAmount"
										      label="盈亏金额"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="todayYinkui"
										      label="今日盈亏"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="todayAmount"
										      label="今日成交额"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="todayBuy"
										      label="今日买入@均价"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="todaySell"
										      label="今日卖出@均价"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="insureRate"
										      label="保证金率"
										      width="">
										    </el-table-column>
										  </el-table>
										</template>
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="订单" name="second">
							    	<div class="radio">
								    	<template>
										  <el-radio-group v-model="radio">
										    <el-radio :label="3">全部</el-radio>
										    <el-radio :label="6">已成交</el-radio>
										    <el-radio :label="9">待成交</el-radio>
										    <el-radio :label="12">已撤单</el-radio>
										  </el-radio-group>
										</template>
									</div>
									<div class="order-table2">
										<template>
										  <el-table
										    :data="HKorderData"
										    height="150"
										    border
										    fit
										    style="width: 100%">
										    <el-table-column
										      prop="state"
										      label="交易状态"
										      width="">             
										    </el-table-column>    
										    <el-table-column
										      prop="direction"
										      label="方向"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="orderCode"
										      label="代码">
										    </el-table-column>
										    <el-table-column
										      prop="orderName"
										      label="名称">
										    </el-table-column>
										    <el-table-column
										      prop="orderPrice"
										      label="订单价格">
										    </el-table-column>
										    <el-table-column
										      prop="orderNum"
										      label="订单数量">
										    </el-table-column>
										    <el-table-column
										      prop="yichengjiao"
										      label="已成交@均价">
										    </el-table-column>
										    <el-table-column
										      prop="orderHandle"
										      label="操作">
										    </el-table-column>
										    <el-table-column
										      prop="orderTime"
										      label="下单时间">
										    </el-table-column>
										    <el-table-column
										      prop="orderType"
										      label="订单类型">
										    </el-table-column>
										    <el-table-column
										      prop="deadline"
										      label="期限">
										    </el-table-column>
										  </el-table>
										</template>
									</div>
									<div class="order-table3">
										<template>
										  <el-table
										    :data="HKorderData2"
										    height="150"
										    border
										    fit
										    style="width: 100%">
										    <el-table-column
										      prop="state"
										      label="交易状态"
										      width="">             
										    </el-table-column>    
										    <el-table-column
										      prop="direction"
										      label="方向"
										      width="">
										    </el-table-column>
										    <el-table-column
										      prop="orderCode"
										      label="代码">
										    </el-table-column>
										    <el-table-column
										      prop="orderName"
										      label="名称">
										    </el-table-column>
										    <el-table-column
										      prop="orderPrice"
										      label="订单价格">
										    </el-table-column>
										    <el-table-column
										      prop="orderNum"
										      label="订单数量">
										    </el-table-column>
										    <el-table-column
										      prop="yichengjiao"
										      label="已成交@均价">
										    </el-table-column>
										    <el-table-column
										      prop="orderHandle"
										      label="操作">
										    </el-table-column>
										    <el-table-column
										      prop="orderTime"
										      label="下单时间">
										    </el-table-column>
										    <el-table-column
										      prop="orderType"
										      label="订单类型">
										    </el-table-column>
										    <el-table-column
										      prop="deadline"
										      label="期限">
										    </el-table-column>
										  </el-table>
										</template>
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="条件单" name="third">条件单</el-tab-pane>
							    <el-tab-pane label="历史" name="fourth">历史</el-tab-pane>
							    <el-tab-pane label="今日统计" name="fifth">今日统计</el-tab-pane>
							  </el-tabs>
							</template>
					    </el-tab-pane>
					    <el-tab-pane label="资讯" name="third" class="news-box">
					    	<ul class="news">
					    		<li><span>谁在驱动腾讯会议？腾讯旗下又一顶级实验室浮出水面</span><em>01/16</em></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    	</ul>
					    	<ul class="news">
					    		<li><span>谁在驱动腾讯会议？腾讯旗下又一顶级实验室浮出水面</span><em>01/16</em></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    	</ul>
					    	<ul class="news">
					    		<li><span>谁在驱动腾讯会议？腾讯旗下又一顶级实验室浮出水面</span><em>01/16</em></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    		<li><span>微信为何在这时推出"付费阅读"？<em>01/15</em></span></li>
					    	</ul>
					    </el-tab-pane>
					    <el-tab-pane label="公告" name="fourth">公告</el-tab-pane>
					    <el-tab-pane label="研报" name="fifth">研报</el-tab-pane>
					    <el-tab-pane label="个股笔记" name="sixth">个股笔记</el-tab-pane>
					    <el-tab-pane label="相关股票" name="eighth">相关股票</el-tab-pane>
					  </el-tabs>
					</template>
				</div>
			</div>
			<div class="content-right">
				<!--页面右侧-->
				<div class="myNav">
		       		<ul class="right-baojia">
			       		<li class="baojia-title select">报价</li>
			       		<li class="baojia-title">分析</li>
			       		<li class="baojia-title">资讯</li>
			       		<li class="baojia-title">评论</li>
			       	</ul>
			       	<div class="baojia-content">
			       		<div class="baojia-item show">
			       			<Company />
			       			<div class="myNav-content">
			       				<Quote />
			       			</div>
			       		</div>
			       		<div class="baojia-item">eee</div>
			       		<div class="baojia-item">ewe</div>
			       		<div class="baojia-item">se</div>
			       	</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Head from '../../components/head.vue'
	import Company from './components/company.vue'
	import Quote from './pages/quote.vue'
	export default {
		data () {
			return {
				activeName: 'first',
				HKStockExchange: 'first',
				offer: '美港通-报价',
				nowIndex:  '',
				radio: 3,
				tabBarImgArr:[   //图片切换
			        {normal: require('../../assets/image/offer_star_2.jpg'), selected: require('../../assets/image/offer_star.jpg')},
			        {normal: require('../../assets/image/offer_clock.jpg'), selected: require('../../assets/image/offer_clock_2.jpg')},
				],
				ExchangeData: [
					{
						handle: '1',
						code: '089',
						name:'wdef',
						cost: '2233',
						num: '33',
						enable: '222',
						maketValue: '333',
						yinkuiRate: '33',
						yinkuiAmount: '333',
						todayYinkui: '33',
						todayAmount: '33',
						todayBuy: '222',
						todaySell: 'ff',
						insureRate: 'hgbgg'
					},{
						handle: '1',
						code: '089',
						name:'wdef',
						cost: '2233',
						num: '33',
						enable: '222',
						maketValue: '333',
						yinkuiRate: '33',
						yinkuiAmount: '333',
						todayYinkui: '33',
						todayAmount: '33',
						todayBuy: '222',
						todaySell: 'ff',
						insureRate: 'hgbgg'
					}
					
				],
				HKorderData: [
					{
						state: '123',
						direction: '北京',
						orderCode: '389',
						orderName: '8989',
						orderPrice: 'edihoi',
						orderNum: 'pdosop',
						yichengjiao: 'yu',
						orderHandle: 'opi',
						orderTime: '89o090',
						orderType: '9o09',
						deadline: '9090'
					}
				],
				HKorderData2: [
					{
						state: '123',
						direction: '北京',
						orderCode: '389',
						orderName: '8989',
						orderPrice: 'edihoi',
						orderNum: 'pdosop',
						yichengjiao: 'yu',
						orderHandle: 'opi',
						orderTime: '89o090',
						orderType: '9o09',
						deadline: '9090'
					}
				]
			}
		},
		components: {
			Head,
			Company,
			Quote
		},
		created () {
			
		},
		mounted () {
			this.handleNav();
			this.handleMhour();
			this.handleRightNav();
			this.initCharts();
		},
		methods: {
			handleNav () {
				$('.content-left-head .item-title').click(function () {
					this.nowIndex = $(this).index();
					$('.content-left-content .item-content').eq(this.nowIndex).show().siblings().hide();
				})
			},
			handleMhour () {
				$('.kline-item').click(function(){
					$(this).addClass('select').siblings().removeClass('select');
					$('.kline-content-item').eq($(this).index()).show().siblings().hide();
				})
			},
			handleClick(tab, event) {
		        
		   },
		   handleRightNav () {
				$('.right-baojia .baojia-title').click(function () {
					 $(this).addClass('select').siblings().removeClass('select');
					 $('.baojia-item').eq($(this).index()).show().siblings().hide();
				})
			},
			handleExchange (tab, event) {
				
			},
			initCharts () {
				let myChart1 = this.$echarts.init(this.$refs.pie);
				var option = {
					title: {
			        	text: '00700.HK 资金分布(单位:万元)',
			        	left: 'left'
			    	},
			    	tooltip: {
			    		trigger: 'item',
        				formatter: '{a} <br/>{b} : {c} ({d}%)'
			    	},
			    	legend: {
			    		orient: 'vertical',
			    		x: 'right',
			    		y: 'center',
			    		itemWidth: 24,
			    		itemHeight: 18,
			    		 textStyle: {
			              color: '#666'  // 图例文字颜色
			            },
			    		itemGap: 30,
	//			        	bottom: 10,
	//				        left: 'right',
						padding:[0,0,0,30],
				        data:  ['大单','中单','小单']
			    	},
			    	series: [
			            {
			              name: '生源地',
			              type: 'pie',
			              radius: '60%',  // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
	//		              radius: ['30%', '60%'],  // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
			              center: ['50%', '50%'],  // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
			              data: [
			                  {value:335, name:'大单'},
			                  {value:310, name:'中单'},
			                  {value:234, name:'小单'},
//			                  {value:135, name:'深圳'},
//			                  {value:148, name:'郑州'}
			              ],
		              // itemStyle 设置饼状图扇形区域样式
			            itemStyle: {
			                // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
			                // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
			                emphasis: {
			                  shadowBlur: 10,
			                  shadowOffsetX: 0,
			                  shadowColor: 'rgba(30, 144, 255，0.5)'
			                }
			            },
		              // 设置值域的那指向线
		                labelLine: {
		                  normal: {
		                   show: false   // show设置线是否显示，默认为true，可选值：true ¦ false
		                }
		              },
		              // 设置值域的标签
		              label: {
		                normal: {
		                  position: 'inner',  // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
		                  // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
		                  // {a}指series.name  {b}指series.data的name
		                  // {c}指series.data的value  {d}%指这一部分占总数的百分比
		                  formatter: '{c}'
		                }
		              }
		            }
		          ]
				}
			 myChart1.setOption(option);
			}
		}
	}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
}
.content-left {
	position: relative;
	top: 30px;
	width: 350px;
	/*height:800px;*/
	/*background: lightcoral;*/
	border-right: 1px #c7ddf5 solid;
}
.content-center {
	flex: 1;
	overflow: hidden;
}
.content-right {
	position: relative;
	width: 400px;
}
.content-left-head  {
	/*margin-top: 30px;*/
	display: flex;
	height: 30px;
	line-height: 30px;
	border-bottom: 1px #c7ddf5 solid;
}
.content-left-head .item-title {
	flex: 1;
	text-align: center;
}
.item-content {
	display: none;
}
.item-content.show {
	display: block;
}
.item-title .star,.item-title .clock {
	max-width: 25px;
	height: 20px;
	display: inline-block;
	vertical-align: top;
	padding-top:5px;
}
.item-content .offer-nav {
	display: flex;
	height: 30px;
	border-bottom: 1px #c7ddf5 solid;
}
.item-content .offer-nav li {
	flex: 1;
	text-align: center;
	line-height: 30px;
}
.offer-nav .active {
	color: orange;
}

/*中间分时图*/
.content-center .kline-top {
	margin-top: 30px;
	height: 30px;
	line-height: 30px;
	border-bottom: 1px #c7ddf5 solid;
}
.content-center .kline-title {
	padding: 0 10px;
}
.kline-title.select {
	color: orange;
}
.kline-content {
	/*height: 450px;*/
	/*height: 500px;*/
	min-height: 450px;
	background: thistle;
}
.kline-content-item {
	display: none;
}
.kline-content-item.show {
	display: block;
}


/*k线图底部*/
.kline-bottom {
	
}
.kline-bottom /deep/ .el-tabs__item{
	padding: 0 10px;
}



/*右侧*/
.right-baojia {
 	display: flex;
 	width: 400px;
 	height: 30px;
 	line-height: 30px;
 	padding: 0 20px;
 	box-sizing:border-box;
 	border-bottom: 1px #c7ddf5 solid;
 }
 .baojia-title {
 	flex: 1;
 	font-family: "微软雅黑";
 	font-size: 12px;
 	text-align: center;
 }
 .baojia-title.select {
 	color: orange;
 }
 .baojia-item {
 	display: none;
 }
 .baojia-item.show {
 	display: block;
 }
 .content-right .myNav-content {
  	padding-top: 10px;
		/*background:#FC0;*/
    width:100%;
    overflow:auto;
    top:230px;
    /*position:absolute;*/
   position: fixed;
 	/*position: absolute;*/
    z-index:10;
    bottom:0px;
  }
  .myNav {
  	margin-top: 31px;
  }
  
  /*资讯*/
 .news-box {
 	padding: 0 20px;
 	box-sizing: border-box;
 	overflow-x: scroll;
 }
 .news {
 	width: 33.33333333%;
 	float: left;
 }
 .news li {
 	font-family: "微软雅黑";
 	font-size: 12px;
 	line-height: 30px;
 }
 .news li:hover {
 	background: #c7ddf5;
 }
 
 /*持仓*/
.chicang {
	width: 60%;
	/*overflow-x: scroll;*/
}
/*订单*/
.radio {
	height: 25px;
	line-height: 25px;
	border-top: 1px #c7ddf5 solid;
	border-bottom: 1px #c7ddf5 solid;
}
.order-table2,.order-table3 {
	width: 60%;
}
</style>
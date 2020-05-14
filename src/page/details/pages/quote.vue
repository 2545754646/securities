<template>
	<div class="quote-spe">		    	
		<div class="pankou">
			<template>
				<el-tabs v-model="activeName3" type="card" @tab-click="handleClick3">
					<el-tab-pane label="盘口" name="first">
						<ul class="panpan">
							<li class="pankou-item">
								<img src="../../../assets/image/tip.png" />
								<div class="img-right">
									<span>中国最大互联网综合服务提供商  富途证券战略投资方</span>
									<a href="#" class="xiangqing">详情</a>
								</div>
							</li>
							<li class="pankou-item">
								<img src="../../../assets/image/tip.png" />
								<div class="img-right">
									<p>
										<span>相关ADR</span><span>TCEHY</span>
										<span class="green">49.240↑</span>
										<span class="little-green">+0.435(+0.89%)</span>
									</p>
									<p><span>换算价(HKD)383.344</span>
										<span>相对港股</span>
										<span class="little-green">-0.578(-0.15%)</span>
									</p>
								</div>
							</li>
							<li class="pankou-item">
								<img src="../../../assets/image/tip.png" />
								<div class="img-right">
									<p><span>相关期货</span><span class="xiangqing">腾讯控股期货主连(TCHmain)</span></p>
									<p><span class="green">383.00↑</span><span class="little-green">+0.578(1.15%)</span></p>
								</div>
							</li>
							<li class="pankou-item">
								<img src="../../../assets/image/tip.png" />
								<div class="img-right">
									<p><span>相关涡轮</span>
										<span class="xiangqing">认股(454)</span>
										<span class="xiangqing">牛熊(609)</span>
										<span class="xiangqing">界内证(127)</span>
										<span class="xiangqing">街货分析</span>
									</p>
								</div>
							</li>
							<li class="pankou-item">
								<img src="../../../assets/image/tip.png" />
								<p class="img-right">
									<span>支持融资</span>
									<span>融资保证金率</span><span>44%</span>
									<span class="open">立即开户</span>
								</p>
							</li>
						</ul>
						<!--分时、多日、日K、周k tab-->
						<div class="fenshi">
							<el-tabs v-model="activeName5" type="border-card">
								<el-tab-pane label="分时" name="first">
									<div class="fenshi-echarts" id="m-line">
										分时
									</div>
								</el-tab-pane>
							    <el-tab-pane label="多日" name="second">
							    	<div class="fenshi-echarts" id="k-content1">
										多日
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="日K" name="third">
							    	<div class="fenshi-echarts" id="k-content2">
										日K
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="周K" name="fourth">
							    	<div class="fenshi-echarts" id="k-content3">
										周K
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="月K" name="fifth">
							    	<div class="fenshi-echarts">
										月K
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="季K" name="sixth">
							    	<div class="fenshi-echarts">
										季K
									</div>
							    </el-tab-pane>
							    <el-tab-pane label="年K" name="seventh">
							    	<div class="fenshi-echarts">
										年K
									</div>
							    </el-tab-pane>
								<el-tab-pane name="eighth">
								  <span slot="label">
								  	<el-dropdown>
									  <span class="el-dropdown-link">
									    分钟<i clas
									    	
									    	s="el-icon-arrow-down el-icon--right"></i>
									  </span>
									  <el-dropdown-menu slot="dropdown">
									    <el-dropdown-item>1分钟</el-dropdown-item>
									    <el-dropdown-item>3分钟</el-dropdown-item>
									    <el-dropdown-item>5分钟</el-dropdown-item>
									    <el-dropdown-item>15分钟</el-dropdown-item>
									    <el-dropdown-item>30分钟</el-dropdown-item>
									    <el-dropdown-item>60分钟</el-dropdown-item>
									    <el-dropdown-item>120分钟</el-dropdown-item>
									    <el-dropdown-item>4小时</el-dropdown-item>
									  </el-dropdown-menu>
							  		</el-dropdown>
								  </span>
								     
								    <div class="fenshi-echarts">
										我的行程
									</div>
								</el-tab-pane>
							</el-tabs>
							<!--<ul class="date-list-title">
			                    <li class="hover">分时</li>
			                    <li>日K</li>
			                    <li>周K</li>
			                    <li>月K</li>
			                </ul>
			                <div class="date-list-con">
			                    <div class="content">
			                        <div class="line w94">
			                            <div class="m-line" id="m-line"></div>
			                        </div>
			                        
			                    </div>
			                    <div class="content">
			                         <div class="line w94">
			                            <div class="k-content" id="k-content1">4144</div>
			                        </div>
			                    </div>
			                    <div class="content">
			                         <div class="line w94">
			                            <div class="k-content" id="k-content2">4144</div>
			                        </div>
			                    </div>
			                    <div class="content">
			                         <div class="line w94">
			                            <div class="k-content" id="k-content3">41tryhtjuhytjntyjykjmyukjmyuhkmjjhgyjj44</div>
			                        </div>
			                    </div>
			                </div>-->
						</div>
						<!--逐笔成交、成交统计-->
						<div class="zhubi-chengjiao">
							<div class="zhubi zhubi-item">
								<template>
								  <el-table
								    :data="tableData1"
								    height="150"
								    border
								    style="width: 100%">
								    <el-table-column
								      prop="date"
								      label="逐笔成交"
								      width="70">
								    </el-table-column>
								    <el-table-column
								      prop="name"
								      label="2"
								      width="60">
								    </el-table-column>
								    <el-table-column
								      prop="address"
								      label="3"
								      width="60">
								    </el-table-column>
								  </el-table>
								</template>
							</div>
							<div class="chengjiao zhubi-item">
								<template>
								  <el-table
								    :data="tableData2"
								    height="150"
								    border
								    style="width: 100%">
								    <el-table-column
								      prop="date"
								      label="成交统计"
								      width="70">
								    </el-table-column>
								    <el-table-column
								      prop="name"
								      label="2"
								      width="60">
								    </el-table-column>
								    <el-table-column
								      prop="address"
								      label="3"
								      width="60">
								    </el-table-column>
								  </el-table>
								</template>
							</div>
						</div>
						<div class="buyPan-sellPan">
							<div class="buy-sell-head">
								<span class="buyPan">买盘</span>
								<span class="sellPan">卖盘</span>
								<img src="../../../assets/image/buy_sellPan.png" class="buy-sell-head-right" />
							</div>
							<div class="progress">
								<div class="blue">20%</div>
								<div class="orange">80%</div>
							</div>
							<ul class="detail">
								<div class="buy-pan-detail">
									<li class="buy-sell-pan" v-for="(item,index) in buyPan" :key="index">
										<span class="order">{{index + 1}}</span>
										<span class="payNum">{{parseFloat(item.payNum)}}</span>
										<span class="kIndex">{{item.kIndex}})</span>
									</li>
								</div>
								<div class="sell-pan-detail">
									<li class="buy-sell-pan" v-for="(item,index) in sellPan" :key="index">
										<span class="order">{{index + 1}}</span>
										<span class="payNum">{{parseFloat(item.payNum)}}</span>
										<span class="kIndex">{{item.kIndex}})</span>
									</li>
								</div>
							</ul>
						</div>
					</el-tab-pane>
					<el-tab-pane label="资金" name="second">资金</el-tab-pane>
				</el-tabs>
			</template>
		</div>		
	</div>
</template>

<script>
	import {kdata1,kdata2,kdata3,mdata} from '../../../assets/js/tempData.js'
//	import {initKOption}  from '../../../assets/js/kline.js'
	import {initKOption,initMOption,
		addTimeStr,
		getNextTime,
		time_arr,
		get_m_data,
		ratioCalculate,
		splitData,
		calculateMA,
		calcEMA,
		calcDIF,
		calcDEA,
		calcMACD,
		bgColor,
	    upColor,
	    downColor,
	
	// ma  颜色
	    ma5Color,
		ma10Color, 
		ma20Color,
		ma30Color, 
	}  from '../../../assets/js/kline.js'
	
	export default {
		data () {
			return {
				stockLis: '',
				flag: true,
				activeName3: 'first',
				activeName4: 'first',
				activeName5: 'first',
				activeIndex: '1',
				tableData1: [{
			          date: '10:56',
			          name: 383.800,
			          address: 100
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.809,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			    }],
			    tableData2: [{
			          date: '10:56',
			          name: 383.800,
			          address: 100
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			        }, {
			          date: '10:57',
			          name: 382.800,
			          address: 200
			    }],
			    buyPan: [
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.09,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.07,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.08,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.003,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	}
			    ],
			    sellPan: [
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.09,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.07,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.08,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.003,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	},
			    	{
			    		payNum: 368.00,
			    		kIndex: '25k(39)'
			    	}
			    ],
//			    kdata1: [    //分时、日k数据
//			    	['2015-11-10', 18.85, 18.64, 18.56, 18.99, 85.00, 0, 0.09, 0.29, 0.25],
//					['2015-11-11', 18.64, 18.44, 18.31, 18.64, 50.00, 0, 0.06, 0.27, 0.23],
//					['2015-11-12', 18.55, 18.27, 18.17, 18.57, 43.00, 0, 0.05, 0.25, 0.23],
//					['2015-11-13', 18.13, 18.14, 18.09, 18.34, 35.00, 0, 0.05, 0.24, 0.22],
//					['2015-11-16', 18.01, 18.1, 17.93, 18.17, 34.00, 0, 0.07, 0.25, 0.21],
//					['2015-11-17', 18.2, 18.14, 18.08, 18.45, 58.00, 0, 0.11, 0.25, 0.20],
//					['2015-11-18', 18.23, 18.16, 18.0, 18.45, 47.00, 0, 0.13, 0.25, 0.19],
//					['2015-11-19', 18.08, 18.2, 18.05, 18.25, 32.00, 0, 0.15, 0.24, 0.17],
//					['2015-11-20', 18.15, 18.15, 18.11, 18.29, 36.00, 0, 0.13, 0.21, 0.15],
//					['2015-11-23', 18.16, 18.19, 18.12, 18.34, 47.00, 0, 0.11, 0.18, 0.13],
//					['2015-11-24', 18.23, 17.88, 17.7, 18.23, 62.00, 0, 0.03, 0.13, 0.11],
//					['2015-11-25', 17.85, 17.73, 17.56, 17.85, 66.00, 0, -0.03, 0.09, 0.11],
//					['2015-11-26', 17.79, 17.53, 17.5, 17.92, 63.00, 0, -0.10, 0.06, 0.11],
//					['2015-11-27', 17.51, 17.04, 16.9, 17.51, 67.00, 0, -0.16, 0.05, 0.13],
//					['2015-11-30', 17.07, 17.2, 16.98, 17.32, 55.00, 0, -0.12, 0.09, 0.15],
//					['2015-12-01', 17.28, 17.11, 16.91, 17.28, 39.00, 0, -0.09, 0.12, 0.16],
//					['2015-12-02', 17.13, 17.91, 17.05, 17.99, 102.00, 0, -0.01, 0.17, 0.18],
//					['2015-12-03', 17.8, 17.78, 17.61, 17.98, 71.00, 0, -0.09, 0.14, 0.18],
//					['2015-12-04', 17.6, 17.25, 17.13, 17.69, 51.00, 0, -0.18, 0.10, 0.19],
//					['2015-12-07', 17.2, 17.39, 17.15, 17.45, 43.00, 0, -0.19, 0.12, 0.22],
//					['2015-12-08', 17.3, 17.42, 17.18, 17.62, 45.00, 0, -0.23, 0.13, 0.24],
//					['2015-12-09', 17.33, 17.39, 17.32, 17.59, 44.00, 0, -0.29, 0.13, 0.28],
//					['2015-12-10', 17.39, 17.26, 17.21, 17.65, 44.00, 0, -0.37, 0.13, 0.32],
//					['2015-12-11', 17.23, 16.92, 16.66, 17.26, 114.00, 1, -0.44, 0.15, 0.37],
//					['2015-12-14', 16.75, 17.06, 16.5, 17.09, 94.00, 0, -0.44, 0.21, 0.44],
//					['2015-12-15', 17.03, 17.03, 16.9, 17.06, 46.00, 0, -0.44, 0.28, 0.50]
//			    ]    
			}
		},
		created () {
			
		},
		mounted () {
//		  	let stockDetail = this.$refs.handStock;
//		  	console.log(stockDetail)
//		  	let lis = stockDetail.getElementsByTagName('li');
//		  	console.log(lis.length);
//		  	this.stockLis = lis.length;
		  	
		  	var echarts = require('echarts');
//		  	var myChart = echarts.init(this.$refs.main);
//		  	myChart.setOption(option)
//  		$.ajax({
//              url: "/index/optional/Kday",
//              data: {
//                  code: $("#stock_code").val()
//              },
//              dataType: "json",
//              method:"post",
//                success: function (data) {
//                    var dataObj = JSON.parse(data);
//                    if(dataObj.status==1){
//                      var len = dataObj.list.length;
//                      var kdata1 = [];
//						var len = kdata1.length;
//                      for(var i=0;i<len;i++){
////                          kdata1[i] = new Array();
//
//                          kdata1[i][0] = dataObj.list[i].time;
//                          kdata1[i][1] = dataObj.list[i].begin;
//                          kdata1[i][2] = dataObj.list[i].close;
//                          kdata1[i][3] = dataObj.list[i].high;
//                          kdata1[i][4] = dataObj.list[i].low;
//                          kdata1[i][5] = dataObj.list[i].volumn;
//
//
//                      }
                        //console.log(kdata1);
                        //renderTab(res);
//                        $('.search-over').css("display","block");
//                      console.log(tempData1)
//						console.log(kdata1)
						//分时图		
//						var mChart = echarts.init(this.$refs.mline);
//                      mChart.setOption(initMOption(mdata,'us'));
//                      var kChart1 = echarts.init(this.$refs.m-line);
//                      kChart1.setOption(initKOption(kdata1));
						//日k
//						console.log(kdata1)
//						var kChart1 = echarts.init(this.$refs.kday);
//                      kChart1.setOption(initKOption(kdata1));
//                    }
//                }
//            })
				//手写分时tab
//              $('.date-list-con .content').eq(0).height("auto");
//
//              $('.date-list-title li').click(function(){
//                  $(this).addClass('hover').siblings('li').removeClass('hover');
//                  $('.date-list-con .content').eq($(this).index()).height("auto").siblings('.content').height(0);
//              })
		  	     //分时
//		  	     var mChart = echarts.init(document.getElementById('m-line'));
//               mChart.setOption(initMOption(mdata.data,'us'));
                 //多日
                 //日k
                 var kChart1 = echarts.init(document.getElementById('m-line'));
                 kChart1.setOption(initKOption(kdata2));
		 },
		methods: {
			handleClick3(tab,event) {
            },
            handleClick4(tab,event) {
            },
			showTag () {
		      	this.flag = !this.flag;
		  },
		    //echarts 方法
		    
		}
	}
</script>

<style lang='scss' scoped>
.pankou {
	/*min-height:300px;*/
}
   .content-right .myNav-head {
  	width: 100%;
  	display: flex;
  	height: 30px;
  	line-height: 30px;
  	border-bottom: 1px #eee solid;
  }
  .myNav-head .myNav-item {
  	flex: 1;
  	text-align: center;
  }
  .company .wrap {
  	padding: 0px 5px 0px;
  }
  .company-name {
  	position: relative;
  	padding-bottom: 10px;
  }
  .company .tencent-stock-code {
  	font-family: "微软雅黑";
  	font-size: 20px;
  	font-weight: bold;
  	color: #2a3644;
  	display: inline-block;
  }
  .company .tencent-stock-company {
  	font-family: "微软雅黑";
  	font-size: 20px;
  	font-weight: 500;
  	color: #2a3644;
  	display: inline-block;
  	margin-left: 5px;
  }
   .company-name .card {
  	position: absolute;
  	width: 30px;
  	height: 30px;
  	right: 10px;
  	bottom: 0px;
  }
  .trend {
  	position: relative;
  	height: 30px;
  	line-height: 30px;
  }
  .trend .number {
  	
  }
  .trend .trend-number {
  	font-family: "微软雅黑";
  	font-size: 20px;
  	font-weight: bold;
  	color: #189f00;
  }
  .trend .trend-img {
  	width: 14px;
  	height: 18px;
  	margin-top: 5px;
  }
  .trend .float {
  	font-family: "微软雅黑";
  	color: #189f00;
  	font-weight: bold;
  	font-size: 14px;
  }
  .trend .close {
  	position: absolute;
  	right: 10px;
  	bottom: -5px;
  	font-family: "微软雅黑";
  	color: #66798d;
  }
  .mark {
  	overflow: hidden;
  }
  .mark-left {
    margin-top: 3px;
    float: left;
  }
  .mark-left img {
  	float: left;
  	width: 20px;
  	height: 20px;
  	margin-left: 2px;
  }
  .mark-left .gangjiaosuo {
  	
  }
  .mark-left .high-market-quotation {
  	margin-top: -1px;
  }
  .mark-left .hugangtong {
  	
  }
  .mark-left .support-financial {
  	margin-top: 1px;
  }
  .mark-left .hengzhi {
  	
  }
  .mark-left .zixuangu {
  	
  }
  .mark-right {
  	float: right;
  	margin-right: 10px;
  }
  .mark-right .notice {
  	padding-top: 3px;
  }
  .mark-right .exchange {
  	position: relative;
  	top: 4px;
  	display: inline-block;
  	width: 50px;
  	height: 20px;
  	line-height: 20px;
  	text-align: center;
  	background: #ff9100;
  	color: #443027;
  }
  .stock-details {
  	margin-top: 8px;
  }
  .stock-details ul {
  	width: 100%;
  	height: 30px;
  	overflow: visible;
  }
  .stockActive {
  	overflow: hidden!important;
  }
  .stock-details-item {
  	font-family: "微软雅黑";
  	float: left;
  	width: calc(33.3333333%);
  	margin-bottom: 5px;
  }
  .stock-details-item span {
  	padding-left: 5px;
  	font-weight: bold;
  }
  
  /*三角箭头*/
 .hand-arrow {
 	text-align: center;
 }
 .stretch {
 	margin-top: 10px;
 }
 .stretch-show {
 	display: inline-block;
 	font-size: 18px;
 	color: #666;
 }
 .top-arrow {
 width: 0; 
 height: 0; 
 border-left: 8px solid transparent; /* left arrow slant */
 border-right: 8px solid transparent; /* right arrow slant */
 border-bottom: 12px solid #7090b0; /* bottom, add background color here */
 font-size: 0;
 line-height: 0;
}
/* create an arrow that points down */
.down-arrow {
 width: 0; 
 height: 0; 
 border-left: 8px solid transparent;
 border-right: 8px solid transparent;
 border-top: 12px solid #7090b0;
 font-size: 0;
 line-height: 0;
}


.pankou-item {
	overflow: hidden;
	padding: 0px 5px;
	position: relative;
}
.pankou img {
	float: left;
	width: 30px;
	min-height: 30px;
}
.pankou-item .img-right {
	float: left;
	padding-top: 10px;
}
.img-right .xiangqing {
	font-family: "微软雅黑";
	font-size: 12px;
	color: #208dfd;
	margin-left: 8px;
}
.img-right .green {
	font-family: "微软雅黑";
	font-weight: bold;
	color: #189f00;
	margin-right: 5px;
}
.img-right .little-green {
	font-family: "微软雅黑";
	color: #189f00;
	font-size: 12px;
	margin-left: 5px;
}
.img-right p {
	margin-top: 5px;
}
.img-right span {
	margin-right: 5px;
}
.pankou-item:first-child {
	position: relative;
	top: 10px;
}
.img-right .open {
	font-family: "微软雅黑";
	position: absolute;
	right: 10px;
	bottom: 3px;
	color: #208dfd;
}
.fenshi {
	
}
.fenshi .el-dropdown-link {
    cursor: pointer;
  }
.fenshi  .el-icon-arrow-down {
    font-size: 12px;
  }
  /*分时走势echarts折线图*/
 .fenshi-echarts {
 	padding-right: 30px;
 	box-sizing: border-box;
 	width: 100%;
 	min-height: 200px;
 	margin: 0 auto;
 	
 }
 .fenshi /deep/ .el-tabs__content {
 	border-bottom: 1px solid #DCDFE6;
 	padding: 10px!important;
 }
 .pankou /deep/ .el-tabs__header {
 	position: absolute;
 	height: 40px;
 	width: 400px;
 	position:absolute;
    z-index:10;
    top:0px;
    border-left: 1px #c7ddf5 solid;
 }
 .fenshi /deep/ .el-tabs__header {
 	position: static;
 }
 .fenshi /deep/ .el-tabs__content {
 	margin-top: 0px!important;
 	position:static!important;
 }
.pankou /deep/ .el-tabs__content {
	margin-top: 40px;
	position: absolute;
	/*background:#FC0;*/
    width:400px;
    overflow-y:auto;
    top:0px;
    z-index:10;
    bottom:30px;
    border-left:1px #c7ddf5 solid;
}

/*逐笔成交、成交统计*/
.zhubi-chengjiao {
	width: 100%;
	display: flex;
	min-width: 400px;
}
.zhubi-item {
	flex: 1;
	width: 50%;
	overflow-x: hidden;
}

/*买盘-卖盘*/
.buy-sell-head {
	padding: 0 5px;
	box-sizing: border-box;
	width: 100%;
	height: 30PX;
	line-height: 30px;
	font-family: "微软雅黑";
	font-size: 12px;
	border-top: 1px #c7ddf5 solid;
	border-bottom: 1px #c7ddf5 solid;
	margin-bottom: 2px;
}
.buy-sell-head .buyPan {
	float: left;
}
.buy-sell-head .sellPan {
	float: left;
	margin-left: 200px;
}
.buy-sell-head .buy-sell-head-right {
	float: right;
	width: 30px;
	min-height: 30px;
	display: block;
	vertical-align: top;
	/*padding-top: 5px;*/
}
.progress {
	width: 100%;
	height: 20px;
	line-height: 20px;
	display: flex;
	text-align: center;
	color: #fff;
}
.progress .blue {
	width:20%;
	height: 20px;
	background: cadetblue;
}
.progress .orange {
	width: 80%;
	height: 20px;
	background: orange;
}
.detail {
	width: 100%;
	display: flex;
}
.detail .buy-pan-detail,.detail .sell-pan-detail {
	flex: 1;
}
.buy-sell-pan {
	margin-top: 3px;
	position: relative;
}
.detail .buy-sell-pan .order {
	width: 14px;
	height: 14px;
	display: inline-block;
	background: #208dfd;
	color: #fff;
	text-align: center;
}
.detail .payNum {
	margin-left: 3px;
	font-family: "微软雅黑";
	font-size: 12px;
	font-weight: bold;
	color: #429f66;
}
.detail .kIndex {
	position: absolute;
	right: 3px;
	top: center;
	font-weight: bold;
	color: #59b5f7;
}

/*重写分时图样式*/
.date-list-title {
	width: 100%;
	display: flex;
}
.date-list-title li {
	flex: 1;
	text-align: center;
	position: relative;
	line-height: 44px;
}
.date-list-title li:after{
    content: '';
    width:0;
    height:1px;
    background:#ff9105;
    position: absolute;
    bottom:0;
    left:50%;
}
.date-list-title li.hover {
	color:#ff9105;
}
.date-list-title li.hover:after{
    width:40%;
    left:30%;
    transition:all 0.3s;
}
.date-list-con {
	min-height: 200px;
}
.date-list-con .content{
    height:0;
    overflow:hidden;
    position: relative;
}
.date-list-con .line{
    min-height: 200px;
}
.date-list-con .line .m-line,.date-list-con .line .k-content{
    width:100%;
    height:100%;
}
</style>
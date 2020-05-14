<template>
		<div class="company">
    		<div class="wrap">
    			<div class="company-name">
		    		<div class="tencent-stock-code">{{companyCode}}</div>
		    		<div class="tencent-stock-company">{{code_name}}</div>
		    		<img class="card" src="../../../assets/image/card.png"  />
		    	</div>
		    	<div class="trend">
		    		<div class="number">
		    			<span class="trend-number">384.000</span>
		    			<img src="../../../assets/image/add.png" class="trend-img" />
		    			<span class="float">+7.200+1.91%</span>
		    		</div>
		    		<div class="close">
		    			<span class="haveClose">已收盘</span>
		    			<span class="date">12/27 16:08</span>
		    		</div>
		    	</div>
		    	<div class="mark">
		    		<div class="mark-left">
		    			<img class="gangjiaosuo" src="../../../assets/image/gangjiaosuo.png" />
		    			<img class="high-market-quotation" src="../../../assets/image/highMarket.png" />
		    			<img class="hugangtong" src="../../../assets/image/hugangtong.png" />
		    			<img class="support-financial" src="../../../assets/image/supportFinancial.png" />
		    			<img class="hengzhi" src="../../../assets/image/hengzhi.jpg" />
		    			<img class='zixuangu' src="../../../assets/image/zixuangu.png" />
		    		</div>
		    		<div class="mark-right">
		    			<img class="notice" src="../../../assets/image/notice.png" />
		    			<span class="exchange">交易</span>
		    		</div>
		    	</div>
		    	<div class="stock-details">
		    		<ul ref="handStock" :class="{stockActive: flag}">
		    			<li class="stock-details-item">最高价<span>385.400</span></li>
		    			<li class="stock-details-item">开盘价<span>385.400</span></li>
		    			<li class="stock-details-item">成交量<span>1918万</span></li>
		    			<li class="stock-details-item">最低价<span>378.200</span></li>
		    			<li class="stock-details-item">昨收价<span>376.800</span></li>
		    			<li class="stock-details-item">成交价<span>73.51亿</span></li>
		    			<li class="stock-details-item">振幅<span>1.91%</span></li>
		    			<li class="stock-details-item">平均价<span>383.273</span></li>
		    			<li class="stock-details-item">市盈率(静)<span>39.654</span></li>
		    			<li class="stock-details-item">委比<span>23.31%</span></li>
		    			<li class="stock-details-item">总市值<span>36686.1亿</span></li>
		    			<li class="stock-details-item">市盈率ＴＴＭ<span>36.491</span></li>
		    			<li class="stock-details-item">量比<span>0.850</span></li>
		    			<li class="stock-details-item">总股本<span>95.52亿</span></li>
		    			<li class="stock-details-item">市净率<span>8.121</span></li>
		    			<li class="stock-details-item">52周最高<span>399.400</span></li>
		    			<li class="stock-details-item">港股市值<span>36686.1</span></li>
		    			<li class="stock-details-item">换手率<span>0.122%</span></li>
		    			<li class="stock-details-item">52周最低<span>299.400</span></li>
		    			<li class="stock-details-item">港股股本<span>95.43亿</span></li>
		    			<li class="stock-details-item">每手<span>100</span></li>
		    			<li class="stock-details-item">历史最高<span>474.739</span></li>
		    			<li class="stock-details-item">股息TTM<span>0.997</span></li>
		    			<li class="stock-details-item">股息率TTM<span>0.260%</span></li>
		    			<li class="stock-details-item">历史最低<span>-3.581</span></li>
		    			<li class="stock-details-item">股息LFY<span>0.997</span></li>
		    			<li class="stock-details-item">股息率<span>0.259%</span></li>
		    		</ul>
		    		<div class="hand-arrow">
			    		<div class="stretch" v-if="stockLis>6" @click="showTag"> 
		    				<!--<span class="stretch-show" :class="flag?'down-arrow' : 'top-arrow'"></span>-->
		    				<span class="stretch-show" :class="flag?['down-arrow','tallHeight'] : ['top-arrow','shortHeight']"></span>
			    		</div>
		    		</div>
		    		
		    	</div>
    		</div>
   </div>
</template>

<script>
	export default {
//		props: {
//			companyCode: {
//				type: String
//			}
//		},
		data () {
			return {
				stockLis: '',
				flag: true,
//				down:
			}
		},
		computed: {
			companyCode () {
				return this.$store.state.getCode.code;
			},
			code_name () {
				return this.$store.state.getCode.code_name;
			}
		},
		methods: {
			showTag () {
		      	this.flag = !this.flag;
		  }
		},
		mounted () {
			let stockDetail = this.$refs.handStock;
//		  	console.log(stockDetail)
		  	let lis = stockDetail.getElementsByTagName('li');
		  	console.log(lis.length);
		  	this.stockLis = lis.length;
		}
	}
</script>

<style scoped>
.company {
	position: absolute;
	z-index: 999;
	background: #fff;
}
.company .wrap {
  	padding: 10px 5px 0px;
  	border-left: 1px #c7ddf5 solid;
  	height:auto;
  	width: 400px;
  	box-sizing: border-box;
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
  	height: auto;
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

</style>
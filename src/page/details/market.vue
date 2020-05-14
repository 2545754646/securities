<template>
  <div class="market">
  	<Head :title="my" />    <!--引入页面标题组件-->
     <div class="market-wrap">
	     <div class="market-left">
	     	<!--自选股、港股、沪深、美股-->
	     	<template>
				  <el-tabs v-model="activeName" @tab-click="handleClick" class="stock-category">
				    <el-tab-pane label="自选股" name="first">
				    	<!--<el-tabs type="border-card" class="optional-share">
							  <el-tab-pane>
							    <span slot="label">全部<em>(123)</em></span>
							    <optional-share></optional-share>
							  </el-tab-pane>
							  <el-tab-pane>
							    <span slot="label">港股<em>(10)</em></span>
							    <optional-share></optional-share>
							  </el-tab-pane>
							  <el-tab-pane>
							    <span slot="label">美股<em>(10)</em></span>
							    美股
							  </el-tab-pane>
							  <el-tab-pane>
							    <span slot="label">沪深<em>(8)</em></span>
							     沪深
							  </el-tab-pane>
							</el-tabs>-->
							<!--<zixuangu-all></zixuangu-all>-->
				    </el-tab-pane>
				    <el-tab-pane label="港股" name="second">
				    	<!--<el-tabs type="border-card" class="optional-share">
							  <el-tab-pane>
							    <span slot="label">港股热点<em>(123)</em></span>
							    <optional-share></optional-share>
							  </el-tab-pane>
							  <el-tab-pane>
							    <span slot="label">全部港股<em>(10)</em></span>
							    <optional-share></optional-share>
							  </el-tab-pane>
							  <el-tab-pane>
							    <span slot="label">香港主板<em>(10)</em></span>
							   香港主板
							  </el-tab-pane>
							  <el-tab-pane>
							    <span slot="label">创业板<em>(8)</em></span>
							    创业板
							  </el-tab-pane>
							  <el-tab-pane>
							    <span slot="label">恒指成分股<em>(8)</em></span>
							     恒指成分股
							  </el-tab-pane>
							  <el-tab-pane>
							  	<span slot="label">国指成分股<em>(3)</em></span>
							  	国指成分股
							  </el-tab-pane>
							  <el-tab-pane>
							  	<span slot="label">AH股<em>(3)</em></span>
							  	AH股
							  </el-tab-pane>
							  <el-tab-pane>
							  	<span slot="label">港股ADR<em>(3)</em></span>
							  	港股ADR
							  </el-tab-pane>
							  <el-tab-pane>
							  	<span slot="label">主板H股<em>(3)</em></span>
							  	主板H股
							  </el-tab-pane>
							  <el-tab-pane>
							  	<span slot="label">ETF<em>(3)</em></span>
							  	ETF
							  </el-tab-pane>
							  <el-tab-pane>
							  	<span slot="label">已上市新股<em>(3)</em></span>
							  	已上市新股
							  </el-tab-pane>
							  <el-tab-pane>
							  	<span slot="label">美港热门<em>(3)</em></span>
							  	美港热门
							  </el-tab-pane>
							  <el-tab-pane>
							  	<span slot="label">所有版块<em>(3)</em></span>
							  	所有版块
							  </el-tab-pane>
							</el-tabs>-->
							<ganggu-hot></ganggu-hot>
				    </el-tab-pane>
				    <el-tab-pane label="沪深" name="third">
				    	<!--<Hushen />-->
				    </el-tab-pane>
				    <el-tab-pane label="美股" name="fourth">
				    	<!--<america-stock></america-stock>-->
				    </el-tab-pane>
				  </el-tabs>
				</template>
				<!--<div >
					<div class="optional-share-all"></div>
				</div>-->
	     </div>
	     <!--市场行情右侧报价/分析/资讯/评论-->
	     <div class="market-right">
	     	<!--<div class="content-right">
		     	<div class="myNav">
	       		<div class="myNav-wrap">
		       		<div class="myNav-head">
			       		<router-link tag="li" class="myNav-item" to="/market/quote">报价</router-link>
			       		<router-link tag="li" class="myNav-item" to="/market/analysis">分析</router-link>
			       		<router-link tag="li" class="myNav-item" to="/market/news">资讯</router-link>
			       		<router-link tag="li" class="myNav-item" to="/market/comment">评论</router-link>
		       		</div>
		       		<Company />
	       		</div>
	       		<div class="myNav-content">
	       			<router-view></router-view>
	       		</div>
	       	</div>
       	</div>-->
       	<div class="content-right">
	       	<!--<template>
					  <el-tabs v-model="activeName2" @tab-click="handleClick2" class="market-quote">
					    <el-tab-pane label="报价" name="first">
					    	<Company />
					    <div class="myNav-content">
		       				<Quote />
		       		</div>
					    </el-tab-pane>
					    <el-tab-pane label="分析" name="second">
					    	<Company />分析
					    </el-tab-pane>
					    <el-tab-pane label="资讯" name="third">
					    	资讯
					    </el-tab-pane>
					    <el-tab-pane label="评论" name="fourth">
					    	评论
					    </el-tab-pane>
					  </el-tabs>
					</template>-->
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
       	<!--手写导航条-->
       	
	     </div>
     </div>
  </div>
</template>

<script>
	import Head from '../../components/head.vue'
	import ZixuanguAll from './components/zixuangu_all.vue'
	import GangguHot from './components/ganggu_hot.vue'
	import Hushen from './components/hushen.vue'
	import AmericaStock from './components/meigu.vue'
	import Company from './components/company.vue'
	import Quote from './pages/quote.vue'
	export default {
		data () {
			return {
				my: '美港通-行情',
				activeName: 'first',
				activeName2: 'first',
				HKStockList: [],
				AmericaStockList: [],
				pageIndex: 1,
			}
		},
		components: {
			Head,
			ZixuanguAll,
			GangguHot,
			Hushen,
			AmericaStock,
			Company,
			Quote
		},
		mounted () {
			this.handleNav()
		},
		methods: {
			handleClick(tab, event) {
//      console.log(tab, event);
     },
     handleClick2(tab, event) {
//      console.log(tab, event);
     },
 		 handleNav () {
			$('.right-baojia .baojia-title').click(function () {
				 $(this).addClass('select').siblings().removeClass('select');
				 $('.baojia-item').eq($(this).index()).show().siblings().hide();
			})
		 },
//			getHKStock () {
//					this.$axios.post('/api/api/Tdx/GetAllStock',{
//					type: 1,
//					page: this.pageIndex
//				}).then((res) => {
////					console.log(res);
//					this.HKStockList = res.data.Data;
//					console.log(this.HKStockList);
//				}).catch((err) => {
//					console.log(err)
//				})
//			},
//			getAmericaStock () {
//					this.$axios.post('/api/api/Tdx/GetAllStock',{
//					type: 2,
//					page: this.pageIndex
//				}).then((res) => {
//					this.AmericaStockList = res.data.Data;
//					console.log(this.AmericaStockList);
//				}).catch((err) => {
//					console.log(err)
//				})
//			}
		},
		created () {
//			this.getHKStock();
//			this.getAmericaStock();
		}
	}

</script>

<style lang="scss" scoped>
.market {
	position: relative;
	height: 100%;
}
.market-wrap {
	width: 100%;
	display: flex;
	/*width: 100%;*/
	/*position: fixed;*/
	position: absolute;
	/*right: 0;*/
	left: 0;
	top: 30px;
	bottom: 0;
	/*bottom: 30px;*/
}
.market-left {
	flex: 1;
	/*height: 800px;*/
	/*background: orange;*/
	/*float: left;*/
	height: 100%;
	/*overflow:scroll;*/
	/*overflow-y: scroll;*/
	/*margin-right: 400px;*/
	/*padding-right: 30px;*/
}
.market-right {
	/*float: left;*/
	width: 400px;
	height: auto;
	border-left: 1px #c7ddf5 solid;
	/*background: burlywood;*/
	/*height: 400px;*/
}
.stock-category /deep/ .el-tabs__header {
	position: relative;
	padding-left: 30px;
	box-sizing: border-box;
	margin-bottom: 0px;
}
.stock-category /deep/ .el-tabs__header::after{
	  content: '';
	  width: 30px;
    height: 30px;
    background: url(../../assets/image/stretch.jpg)no-repeat;
    background-size: contain;
    position: absolute;
    right: 100px;
    top: 0;
}
.stock-category /deep/ .el-tabs__header .el-tabs__item {
	height: 30px;
	line-height: 30px;
}
.stock-category /deep/ .el-tabs--border-card {
	border: none!important;
}
.stock-category /deep/ .el-tabs__content {
	overflow: visible!important;
}
.optional-share {
	position: relative!important;
}
.optional-share /deep/ .el-tabs__header::after {
	display: none!important;
}
.optional-share /deep/ .el-tabs__header {
	padding-left: 6px!important;
	/*position: absolute;
	left: 0;
	top: 0;
	z-index: 1;*/
}
.optional-share /deep/ .el-tabs__content {
	/*position: absolute;
	top: 30px;
	left: 0;
	z-index: 200;*/
}
.stock-category /deep/ .el-tabs--border-card>.el-tabs__content {
	/*padding-right: 0;*/
}
/*表格-全部*/
/*页面右侧css*/
.content-right {
   	height: 100%;
    border-left: 1px #c7ddf5 solid;
  }
  .content-right .myNav-head {
  	width: 100%;
  	display: flex;
  	height: 40px;
  	line-height: 40px;
  	border-bottom: 1px #c7ddf5 solid;
  }
  .content-right .myNav-content {
  	padding-top: 10px;
		/*background:#FC0;*/
    width:100%;
    overflow:auto;
    top:216px;
    /*position:absolute;*/
   position: absolute;
    /*z-index:-10;*/ /*z-index一定要负数,当页面拉伸隐藏右侧导航*/
    bottom:0px;
  }
  .myNav-head .myNav-item {
  	flex: 1;
  	text-align: center;
  }
  .myNav-item.router-link-exact-active {
  	color: #ff9105;
  }
  
  /*导航条修复*/
 /*.market-quote /deep/ .el-tabs__nav-scroll {
	 	padding: 0 20px;
	 	box-sizing: border-box;
 }
 .market-quote /deep/ .el-tabs__nav.is-top {
 	width: 100%;
 	display: flex;
 }
 .market-quote /deep/ .el-tabs__item {
 	flex: 1;
 }*/
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
</style>

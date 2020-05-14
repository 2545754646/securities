<template>
	<div class="zixuangu_all">
		<template>
		  <el-table
		    :data="totalCount"
		    style="width: 100%"
		    :height= "tableHeight"
		  	:default-sort = "{prop: 'order', order: ' ascending'}"
		    class="table-all" 
		    ref="searchStock"
		    border>
		    <el-table-column fixed prop="order" sortable label="序号" width="100">
		       <template  slot-scope="scope">
           			<span>{{scope.row.id}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column fixed prop="code" label="代码" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.code}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column fixed prop="name" label="名称" width="150">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.code_name}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="newPrice" label="最新价" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.newPrice}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="zhangdiee" label="涨跌额" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.zhangdiee}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="zhangdiefu" label="涨跌幅" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.zhangdiefu}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="mzhangdiefu" label="5分钟涨跌幅" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.mzhangdiefu}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="daysZhangdiefu" label="60日涨跌幅" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.daysZhangdiefu}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="yearTonowZdf" label="年初至今涨跌" width="100"> 
		    	<template  slot-scope="scope">
           			<span>{{scope.row.yearTonowZdf}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="monthTonowZdf" label="月初至今涨跌" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.monthTonowZdf}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="buy" label="买入价" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.buy}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="sell" label="卖出价" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.sell}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="buyNum" label="买量" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.buyNum}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="sellNum" label="卖量" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.sellNum}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="volume" label="成交量" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.volume}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="sumVolume" label="成交额" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.sumVolume}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="guxilvTTM" label="股息率TTM" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.guxilvTTM}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="guxilvLFY" label="股息率LFY" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.guxilvLFY}}</span>
          		</template>
		    </el-table-column>  
		    <el-table-column prop="jinkai" label="今开" width="120">
		     	<template  slot-scope="scope">
           			<span>{{scope.row.jinkai}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="zuoshou" label="昨收" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.zuoshou}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="zuigao" label="最高" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.zuigao}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="zuidi" label="最低" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.zuidi}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="huanshoulv" label="换手率%" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.huanshoulv}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="zhangdiesulv" label="涨跌速率" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.zhangdiesulv}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="zhenfu" label="振幅%" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.zhenfu}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="shiyinglvTTM" label="市盈率TTM" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.shiyinglvTTM}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="shiyinglvjing" label="市盈率(静)" width="100">   
		    	<template  slot-scope="scope">
           			<span>{{scope.row.shiyinglvjing}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="shijinglv" label="市净率" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.shijinglv}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="liangbi" label="量比" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.liangbi}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="weibi" label="委比" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.weibi}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="panqianzuixin" label="盘前最新价" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.panqianzuixin}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="panhouzuixin" label="盘后最新价" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.panhouzuixin}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="panqianzhangdie" label="盘前涨跌幅" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.panqianzhangdie}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="panhouzhangdie" label="盘后涨跌幅" width="100">    
		    	<template  slot-scope="scope">
           			<span>{{scope.row.panhouzhangdie}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="panqianchengjiaoe" label="盘前成交额" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.panqianchengjiaoe}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="panhouchengjiaoe" label="盘后成交额" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.panhouchengjiaoe}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="panqianzhenfu" label="盘前振幅%" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.panqianzhenfu}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="panhouzhenfu" label="盘后振幅%" width="100">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.panhouzhenfu}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="pqzde" label="盘前涨跌额" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.pqzde}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="phzde" label="盘后涨跌额" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.phzde}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="zongshizhi" label="总市值" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.zongshizhi}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="liutongshizhi" label="流通市值" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.liutongshizhi}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="zongguben" label="总股本" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.zongguben}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="liutongguben" label="流通股本" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.liutongguben}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="rzbzj" label="融资保证金率" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.rzbzj}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="rqbzj" label="融券保证金率" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.rqbzj}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="mkck" label="卖空参考利率%" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.mkck}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="fivedays" label="五日涨跌幅" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.fivedays}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="tendays" label="10日涨跌幅" width="120">   
		    	<template  slot-scope="scope">
           			<span>{{scope.row.tendays}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="twenty" label="20日涨跌幅" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.twenty}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="baiershi" label="120涨跌幅" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.baiershi}}</span>
          		</template>
		    </el-table-column>
		    <el-table-column prop="erbaiwu" label="250涨跌幅" width="120">
		    	<template  slot-scope="scope">
           			<span>{{scope.row.erbaiwu}}</span>
          		</template>
		    </el-table-column>
		  </el-table>
		</template>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				tableHeight: window.innerHeight - 118,
				tableData: [
//			        {
//			          order: 2,
//			          code: '00700',
//			          name: '阿里巴巴',
//			          newPrice: 377.400,
//			          zhangdiee: -5.600,
//			          zhangdiefu: '-1.56%',
//			          mzhangdiefu: '0.16%',
//			          days:'18.60%',
//			          yearTonowZdf:'0.48%',
//			          monthTonowZdf:'0.48%',
//			          buy:377.200,
//			          sell:374.00 ,
//			          buyNum:'5.06万',
//			          sellNum:'2.07万',
//			          volume:'12.12万',
//			          sumVolume:'45.79亿',
//			          guxilvTTM:'0.264%',
//			          guxilvLFY:'0.264%',
//			          jinkai:380.000,
//			          zuoshou:3579.99,
//			          zuigao:3565.99,
//			          zuidi:38789,
//			          huanshoulv:'0.343%',
//			          zhangdiesulv:'0.7676%',
//			          zhenfu:'1.20%',
//			          shiyinglvTTM: '35.86%',
//			          shiyinglvjing:1.34,
//			          shijinglv:'0.34',
//			          liangbi:1.23,
//			          weibi:3.09,
//			          panqianzuixin:378389,
//			          panhouzuixin:33333,
//			          panqianzhangdie:3333,
//			          panhouzhangdie:3333,
//			          panqianchengjiaoe:33333,
//			          panhouchengjiaoe:3333,
//			          panqianzhenfu:3333,
//			          panhouzhenfu:333,
//			          pqzde:333,
//			          phzde:33,
//			          zongshizhi:333,
//			          liutongshizhi:33,
//			          zongguben:232,
//			          liutongguben:1221,
//			          rzbzj:777,
//			          rqbzj:444,
//			          mkck:22,
//			          fivedays:22,
//			          tendays:888,
//			          twenty:4444,
//			          baiershi:777,
//			          erbaiwu:'0990'
//			        }
		        ],
		        pageIndex: 1,  //页码
				totalCount: [],
				totalPage: ''
			}
		},
		methods: {
//			getHKStock () {
//					this.$axios.post('/api/api/Tdx/GetAllStock',{
//					type: 1,  //港股类型为1
//					page: this.pageIndex
//				}).then((res) => {
////					console.log(res);
//					this.HKStockList = res.data.Data;
//					console.log(this.HKStockList);
//				}).catch((err) => {
//					console.log(err);
//				})
//			},
		loadStockByPage () {
				let param = new URLSearchParams();
				param.append('type',1);
				param.append('page',this.pageIndex);
				this.$axios({
					method: 'post',
					url: '/api/api/Tdx/GetAllStock',
					data: param
				}).then((data) => {
					let { length } = data.data.Data;
					if (length < 500) {
						//没有数据了
						return;
//						dom.removeEventListener('scroll', this.loadBottom)
					}
					if (this.pageIndex === 1) {
						this.totalCount = data.data.Data;
						console.log(this.totalCount);
					} else {
						this.totalCount = this.totalCount.concat(data.data.Data);
					}
					
					this.pageIndex++;
				}).catch(() => {
					console.log(err);
				})
			},
			loadBottom () {
				let dom = this.$refs.searchStock.bodyWrapper;
			    const scrollDistance =dom.scrollHeight - dom.scrollTop - dom.clientHeight;
			    console.log(scrollDistance);
				if (scrollDistance <=20) {
					this.loadStockByPage();
					console.log(this.totalCount);
				}
			}
		},
		created () {
			this.loadStockByPage();	
		},
		mounted () {
			let dom = this.$refs.searchStock.bodyWrapper;
			dom.addEventListener('scroll',this.loadBottom);
			//提交全部港股列表到vuex
			this.$store.commit('getHKStockTableList',this.totalCount);
		}
	}
</script>

<style lang="scss" scoped>
.table-all {
	max-width: 1400px;
	height: auto;
	overflow-x: scroll;
}
/*.optiona-share /deep/ .el-tabs--border-card>.el-tabs__content {
	padding-right: 0;
}*/

/*修改table内容字体颜色*/
/deep/ .el-table th>.cell {
	color: #7a7989;
	font-family: "微软雅黑";
	/*font-weight: 500;*/
	font-size: 14px;
}
 /deep/ .el-table__row .el-table_1_column_1 {
 	font-family: "微软雅黑";
 	font-size: 12px;
 	color: #3f1f22;
 	font-weight:bold;
 }
 /deep/ .el-table__row .el-table_1_column_2 {
 	font-family: "微软雅黑";
 	font-size: 12px;
 	color: #3f1f22;
 	font-weight:bold;
 }
 /deep/ .el-table__row .el-table_1_column_3   {
 	font-family: "微软雅黑";
 	font-size: 12px;
 	color: #587597;
 	font-weight: bold;
 }
 
/deep/ .el-table__row .el-table_13_column_451  {
	font-family: "微软雅黑";
 	font-size: 12px;
 	color: #3f1f22;
 	font-weight:bold;
}
/deep/ .el-table__row .el-table_13_column_452  {
	font-family: "微软雅黑";
 	font-size: 12px;
 	color: #3f1f22;
 	font-weight:bold;
}
/deep/ .el-table__row .el-table_13_column_453 {
	font-family: "微软雅黑";
 	font-size: 12px;
 	color: #587597;
 	font-weight: bold;
}
/*媒体查询表格自适应*/
/*@media screen and (max-width:960px){
	.table-all {
		max-width: 700px;
	}
}
@media screen and(min-width:960px) and (max-width: 1300px){
	.table-all {
		max-width: 1200px;
	}
}
@media screen and(min-width:1300px){
	.table-all {
		max-width: 1400px;
	}
}*/
</style>
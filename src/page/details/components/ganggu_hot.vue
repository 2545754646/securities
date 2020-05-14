<template>
	<div class="ganggu-hot">
		<el-tabs type="border-card" class="optional-share">
		  <el-tab-pane>
		    <span slot="label">港股热点<em>(123)</em></span>
		   <!-- <zixuangu-table></zixuangu-table>-->
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label">全部港股<em>(10)</em></span>
		    <zixuangu-table></zixuangu-table>
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
		  <!--<el-tab-pane>
		  	<span slot="label">主板H股<em>(3)</em></span>
		  	<zixuangu-all></zixuangu-all>
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
		  </el-tab-pane>-->
		</el-tabs>
	</div>
</template>

<script>
	import ZixuanguTable from './zixuangu_table.vue'
	export default {
		data () {
			return {
				
			}
		},
		components: {
			ZixuanguTable
		}
	}
</script>

<style lang="scss" scoped>
.optional-share {
	position: relative!important;
}
.optional-share /deep/ .el-tabs__header::after {
	display: none!important;
}
.optional-share /deep/ .el-tabs__header {
	padding-left: 6px!important;
}

/*修改字体*/
.optional-share /deep/ .el-tabs__header .el-tabs__item {
	color: #596a91;
	font-family: "微软雅黑";
	font-size: 13px;
}
</style>
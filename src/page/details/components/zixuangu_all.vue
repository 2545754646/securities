<template>
	<div class="zixuangu_head">
		<el-tabs type="border-card" class="optional-share">
		  <el-tab-pane>
		    <span slot="label">全部<em>(123)</em></span>
		    <!--<optional-share></optional-share>-->
		   <!-- <Table />-->
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label">港股<em>(10)</em></span>
		    <!--<optional-share></optional-share>-->
		    <Table />
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label">美股<em>(10)</em></span>
		    <Table />
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label">沪深<em>(8)</em></span>
		   <!-- <Table />-->
		  </el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import Table from './zixuangu_table.vue' 
	export default {
		data () {
			return {
				
			}
		},
		components: {
			Table
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
	/*position: absolute;
	left: 0;
	top: 0;
	z-index: 1;*/
}

/*修改字体*/
.optional-share /deep/ .el-tabs__header .el-tabs__item {
	color: #596a91;
	font-family: "微软雅黑";
	font-size: 13px;
}
</style>
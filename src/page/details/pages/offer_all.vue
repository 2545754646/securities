<template>
	<div class="offer_all">
		<!--报价-全部-->
		<template>
		  <el-table
		    :data="tableData"
		    style="width: 100%;"
		    height="800"
		    :default-sort = "{prop: 'date', order: 'descending'}"
		    >
		    <el-table-column
		      prop="name"
		      label="名称代码"
		      sortable
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop="newPrice"
		      label="最新价"
		      sortable
		      width="80">
		    </el-table-column>
		    <el-table-column
		      prop="zhangdiee"
		      label="涨跌额"
		      sortable
		      width="80">
		    </el-table-column>
		    <el-table-column
		      prop="zhangdiee"
		      label="涨跌幅"
		      sortable
		      width="80">
		    </el-table-column>
		  </el-table>
		</template>
		<!--<div class="content-right"></div>-->
	</div>
</template>

<script>
	export default {
		data () {
			return {
				 tableData: [{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市弄'
		        }]
			}
		},
		methods: {
	      
	    }
	}
</script>

<style lang="scss" scoped>
</style>
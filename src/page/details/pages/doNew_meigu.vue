<template>
	<div class="doNew_meigu">
		<div class="weishangshi" ref="stretch">
			<div class="line">
				<span>未上市(0)</span>
				<span class="stretch" @click="stretch">{{show?'收起' : '展开'}}</span>
			</div>
			<div class="handleShow" v-show="show">
				<template>
				  <el-table
				    :data="tableData1"
				    height="250"
				    border
				    style="width: 100%;">
				    <el-table-column
				      label="名称"
				      width="180">
				      <template slot-scope="scope">
				        <i class="el-icon-time"></i>
				        <span style="margin-left: 10px">{{ scope.row.name }}</span>
				      </template>
				    </el-table-column>
				    <el-table-column
				      prop="code"
				      label="代码"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="publish"
				      label="预计发行量"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="shengou"
				      label="最低申购量"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="time"
				      label="申购关闭时间"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="shangshi"
				      label="上市日期"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="zhaogushu"
				      label="招股书"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="details"
				      label="详情"
				      width="180">
				    </el-table-column>
				  </el-table>
				</template>
			</div>
		</div>
		<div class="jiezhi">
			<div class="line">
				<span>已截止(13)</span>
				<span>以下新通道已关闭，如需了解新股详情，请点击查看招股书</span>
				<span class="stretch" @click="stretch2">{{show2?'收起' : '展开'}}</span>
			</div>
			<div v-show="show2">
				<template>
				  <el-table
				    :data="tableData2"
				    height="250"
				    style="width: 100%;">
				    <el-table-column
				      label="名称"
				      width="180">
				      <template slot-scope="scope">
				        <i class="el-icon-time"></i>
				        <span style="margin-left: 10px">{{ scope.row.name }}</span>
				      </template>
				    </el-table-column>
				    <el-table-column
				      prop="code"
				      label="代码"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="publish"
				      label="预计发行数量"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="shengouNum"
				      label="最低申购数量"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="shengouTime"
				      label="申购关闭时间"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="shangshi"
				      label="上市日期"
				      width="180">
				    </el-table-column>
			      	<el-table-column
			      	  prop="zhaogushu"
			      	  label="招股书"
			      	  width="180">
				    </el-table-column>
				    <el-table-column label="招股书">
				      <template slot-scope="scope">
				        <el-button
				          size="mini"
				          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
				      </template>
				    </el-table-column>
				  </el-table>
				</template>
			</div>
		</div>
		<div class="jiezhi">
			<div class="line">
				<span>申购意向(0)</span>
				<span class="stretch" @click="stretch3">{{show3?'收起' : '展开'}}</span>
			</div>
			<div v-show="show3">
				<template>
				  <el-table
				    :data="tableData2"
				    height="250"
				    style="width: 100%">
				    <el-table-column
				      prop="name"
				      label="名称"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="code"
				      label="代码"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="shengouNum"
				      label="申购股数"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="shengouqian"
				      label="申购金额"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="state"
				      label="状态"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="details"
				      label="详情"
				      width="180">
				    </el-table-column>
				  </el-table>
				</template>
			</div>
		</div>
		<div class="jiezhi">
			<div class="line">
				<span>已上市(138)</span>
				<span>以下数据仅供参考，均不构成任何投资建议。</span>
				<span class="stretch" @click="stretch4">{{show4?'收起' : '展开'}}</span>
			</div>
			<div v-show="show4">
				<template>
				  <el-table
				    :data="tableData2"
				    height="250"
				    style="width: 100%">
				    <el-table-column
				      prop="name"
				      label="名称"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="code"
				      label="代码"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="newPrice"
				      label="最新价"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="date"
				      label="上市日期"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="publish"
				      label="发行价"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="yingkui"
				      label="首日盈亏"
				      width="180">
				    </el-table-column>
				  </el-table>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				height: '',
				show: false,
				show2: true,
				show3: false,
				show4: true,
				tableData1: [{
		          name: '2016-05-03',
		          code: '王小虎',
		          publish: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '2016-05-03',
		          code: '王小虎',
		          publish: '上海市普陀区金沙江路 1518 弄'
		        }, {
		           name: '2016-05-03',
		          code: '王小虎',
		          publish: '上海市普陀区金沙江路 1518 弄'
		        }, {
		           name: '2016-05-03',
		          code: '王小虎',
		          publish: '上海市普陀区金沙江路 1518 弄'
		        }, {
		           name: '2016-05-03',
		          code: '王小虎',
		          publish: '上海市普陀区金沙江路 1518 弄'
		        }, {
		           name: '2016-05-03',
		          code: '王小虎',
		          publish: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          name: '2016-05-03',
		          code: '王小虎',
		          publish: '上海市普陀区金沙江路 1518 弄'
		        }],
		        tableData2: [{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        },{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }],
		        tableData4: [{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        },{
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }]
			}
		},
		methods: {
			stretch () {
				 this.show = !this.show
			},
			stretch2 () {
				 this.show2 = !this.show2
			},
			handleEdit(index, row) {
	       
	       },
	       stretch3 () {
				 this.show3 = !this.show3
			},
			stretch4 () {
				 this.show4 = !this.show4
			}
		}
	}
</script>

<style lang="scss" scoped>
.doNew_meigu {
	width: 100%;
	float:left;
	margin-top: 30px;
}
.weishangshi {
	width: 100%;
	/*height: 30px;*/
	overflow: hidden;
	line-height: 30px;
	font-family: "微软雅黑";
	font-size: 12px;
	/*padding-left: 300px;*/
	box-sizing: border-box;
}
.weishangshi .line {
	width: 100%;
	height: 30px;
	line-height: 30px;
	border-bottom: 1px #c7ddf5 solid;
}
.weishangshi span:first-child {
	float: left;
	padding-left: 50px;
	font-weight: bold;
}
.weishangshi .stretch {
	float: right;
	padding-right: 50px;
}
.jiezhi {
	font-family: "微软雅黑";
	
}
.jiezhi span:first-child {
	font-weight: bold;
	margin-right: 10px;
	padding-left: 50px;
}
.jiezhi .stretch {
	float: right;
	padding-right: 50px;
}
.jiezhi .line {
	width: 100%;
	height: 30px;
	line-height: 30px;
	border-bottom: 1px #c7ddf5 solid;
	/*border-top: 1px #c7ddf5 solid;*/
}
</style>
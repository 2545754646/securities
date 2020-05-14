<template>
	<div class='meigu'>
		<el-tabs type="border-card" class="optional-share">
		  <el-tab-pane>
		    <span slot="label">美股热点<em>(123)</em></span>
		   	<div class="hot-a">
			   	<div class="hot-a-left">
			   		<div class="hot-a-head">
			   			<span class="left">大盘指数</span>
				   		<span class="right">
				   			<em>&lt</em>
				   			<em>&gt</em>
				   		</span>
			   		</div>
			   		<div class="dapan">
			   			<div class="huIndex">上证指数</div>
			   			<div class="shenIndex">深圳指数</div>
			   		</div>
			   		<div class="hot-a-head">
			   			<span class="left">领涨板块</span>
			   		</div>
			   		<ul class="lingzhang-plate">
			   			<li class="lingzhang-item">
			   				<div class="title">
			   					<span class="item-spe">其他休闲服务</span>
			   					<span class="rate-spe">10.01%</span>
			   				</div>
			   				<div class="progress">2</div>
			   				<div class="desc">
			   					<span class="item">福成股份</span>
			   					<span class="rate">+10.03%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">科锐国际</span>
			   					<span class="rate">+10.00%</span>
			   				</div>
			   			</li>
			   			<li class="lingzhang-item">
			   				<div class="title">
			   					<span class="item-spe">其他休闲服务</span>
			   					<span class="rate-spe">10.01%</span>
			   				</div>
			   				<div class="progress">2</div>
			   				<div class="desc">
			   					<span class="item">福成股份</span>
			   					<span class="rate">+10.03%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">科锐国际</span>
			   					<span class="rate">+10.00%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">福成股份</span>
			   					<span class="rate">+10.03%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">科锐国际</span>
			   					<span class="rate">+10.00%</span>
			   				</div>
			   			</li>
			   			<li class="lingzhang-item">
			   				<div class="title">
			   					<span class="item-spe">其他休闲服务</span>
			   					<span class="rate-spe">10.01%</span>
			   				</div>
			   				<div class="progress">2</div>
			   				<div class="desc">
			   					<span class="item">福成股份</span>
			   					<span class="rate">+10.03%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">科锐国际</span>
			   					<span class="rate">+10.00%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">福成股份</span>
			   					<span class="rate">+10.03%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">科锐国际</span>
			   					<span class="rate">+10.00%</span>
			   				</div>
			   			</li>
			   			<li class="lingzhang-item">
			   				<div class="title">
			   					<span class="item-spe">其他休闲服务</span>
			   					<span class="rate-spe">10.01%</span>
			   				</div>
			   				<div class="progress">2</div>
			   				<div class="desc">
			   					<span class="item">福成股份</span>
			   					<span class="rate">+10.03%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">科锐国际</span>
			   					<span class="rate">+10.00%</span>
			   				</div>
			   			</li>
			   			<li class="lingzhang-item">
			   				<div class="title">
			   					<span class="item-spe">其他休闲服务</span>
			   					<span class="rate-spe">10.01%</span>
			   				</div>
			   				<div class="progress">2</div>
			   				<div class="desc">
			   					<span class="item">福成股份</span>
			   					<span class="rate">+10.03%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">科锐国际</span>
			   					<span class="rate">+10.00%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">福成股份</span>
			   					<span class="rate">+10.03%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">科锐国际</span>
			   					<span class="rate">+10.00%</span>
			   				</div>
			   			</li>
			   			<li class="lingzhang-item">
			   				<div class="title">
			   					<span class="item-spe">其他休闲服务</span>
			   					<span class="rate-spe">10.01%</span>
			   				</div>
			   				<div class="progress">2</div>
			   				<div class="desc">
			   					<span class="item">福成股份</span>
			   					<span class="rate">+10.03%</span>
			   				</div>
			   				<div class="desc">
			   					<span class="item">科锐国际</span>
			   					<span class="rate">+10.00%</span>
			   				</div>
			   			</li>
			   		</ul>
			   	</div>
			   	<div class="hot-a-right">
			   		<div class="title">
			   			<span class="hot select rank">富途热门</span>
			   			<span class="rank">盘前榜</span>
			   			<span class="rank">盘后榜</span>
			   			<span class="rank">已上市新股</span>
			   			<span class="rank">中概私有化</span>
			   			<span class="rank">港股ADR</span>
			   			<span class="rank">综合排名</span>
			   		</div>
			   		<ul class="content">
			   			<li class="show rank-content">
			   				<table class="hot-table">
			   					<thead class="hot-title">
			   						<tr class="rank">
			   							<th>今日涨幅排名</th>
			   							<th></th>
			   							<th></th>
			   							<th></th>
			   						</tr>
			   						<tr class='handline'>
			   							<th>代码</th>
			   							<th>名称</th>
			   							<th>最新价</th>
			   							<th>涨跌幅</th>
			   						</tr>
			   					</thead>
			   					<tbody>
			   						<tr>
			   							<td>000559</td>
			   							<td>万向钱潮</td>
			   							<td>6.37</td>
			   							<td>+9.66%</td>
			   						</tr>
			   						<tr>
			   							<td>000725</td>
			   							<td>京东方A</td>
			   							<td>4.91</td>
			   							<td>+4.70%</td>
			   						</tr>
			   						<tr>
			   							<td>000100</td>
			   							<td>TCL集团</td>
			   							<td>4.76</td>
			   							<td>+3.94%</td>
			   						</tr>
			   						<tr>
			   							<td>601989</td>
			   							<td>中国重工</td>
			   							<td>5.45</td>
			   							<td>+1.87%</td>
			   						</tr>
			   					</tbody>
			   				</table>
			   				<table class="hot-table">
			   					<thead class="hot-title">
			   						<tr class="rank">
			   							<th>今日跌幅排名</th>
			   							<th></th>
			   							<th></th>
			   							<th></th>
			   						</tr>
			   						<tr class='handline'>
			   							<th>代码</th>
			   							<th>名称</th>
			   							<th>最新价</th>
			   							<th>涨跌幅</th>
			   						</tr>
			   					</thead>
			   					<tbody>
			   						<tr>
			   							<td>000559</td>
			   							<td>万向钱潮</td>
			   							<td>6.37</td>
			   							<td>+9.66%</td>
			   						</tr>
			   						<tr>
			   							<td>000725</td>
			   							<td>京东方A</td>
			   							<td>4.91</td>
			   							<td>+4.70%</td>
			   						</tr>
			   						<tr>
			   							<td>000100</td>
			   							<td>TCL集团</td>
			   							<td>4.76</td>
			   							<td>+3.94%</td>
			   						</tr>
			   						<tr>
			   							<td>601989</td>
			   							<td>中国重工</td>
			   							<td>5.45</td>
			   							<td>+1.87%</td>
			   						</tr>
			   					</tbody>
			   				</table>
			   				<table class="hot-table">
			   					<thead class="hot-title">
			   						<tr class="rank">
			   							<th>今日振幅排名</th>
			   							<th></th>
			   							<th></th>
			   							<th></th>
			   						</tr>
			   						<tr class='handline'>
			   							<th>代码</th>
			   							<th>名称</th>
			   							<th>最新价</th>
			   							<th>涨跌幅</th>
			   						</tr>
			   					</thead>
			   					<tbody>
			   						<tr>
			   							<td>000559</td>
			   							<td>万向钱潮</td>
			   							<td>6.37</td>
			   							<td>+9.66%</td>
			   						</tr>
			   						<tr>
			   							<td>000725</td>
			   							<td>京东方A</td>
			   							<td>4.91</td>
			   							<td>+4.70%</td>
			   						</tr>
			   						<tr>
			   							<td>000100</td>
			   							<td>TCL集团</td>
			   							<td>4.76</td>
			   							<td>+3.94%</td>
			   						</tr>
			   						<tr>
			   							<td>601989</td>
			   							<td>中国重工</td>
			   							<td>5.45</td>
			   							<td>+1.87%</td>
			   						</tr>
			   					</tbody>
			   				</table>
			   				<table class="hot-table">
			   					<thead class="hot-title">
			   						<tr class="rank">
			   							<th>今日成交额排名</th>
			   							<th></th>
			   							<th></th>
			   							<th></th>
			   						</tr>
			   						<tr class='handline'>
			   							<th>代码</th>
			   							<th>名称</th>
			   							<th>最新价</th>
			   							<th>涨跌幅</th>
			   						</tr>
			   					</thead>
			   					<tbody>
			   						<tr>
			   							<td>000559</td>
			   							<td>万向钱潮</td>
			   							<td>6.37</td>
			   							<td>+9.66%</td>
			   						</tr>
			   						<tr>
			   							<td>000725</td>
			   							<td>京东方A</td>
			   							<td>4.91</td>
			   							<td>+4.70%</td>
			   						</tr>
			   						<tr>
			   							<td>000100</td>
			   							<td>TCL集团</td>
			   							<td>4.76</td>
			   							<td>+3.94%</td>
			   						</tr>
			   						<tr>
			   							<td>601989</td>
			   							<td>中国重工</td>
			   							<td>5.45</td>
			   							<td>+1.87%</td>
			   						</tr>
			   					</tbody>
			   				</table>
			   				<table class="hot-table">
			   					<thead class="hot-title">
			   						<tr class="rank">
			   							<th>今日量比排名</th>
			   							<th></th>
			   							<th></th>
			   							<th></th>
			   						</tr>
			   						<tr class='handline'>
			   							<th>代码</th>
			   							<th>名称</th>
			   							<th>最新价</th>
			   							<th>涨跌幅</th>
			   						</tr>
			   					</thead>
			   					<tbody>
			   						<tr>
			   							<td>000559</td>
			   							<td>万向钱潮</td>
			   							<td>6.37</td>
			   							<td>+9.66%</td>
			   						</tr>
			   						<tr>
			   							<td>000725</td>
			   							<td>京东方A</td>
			   							<td>4.91</td>
			   							<td>+4.70%</td>
			   						</tr>
			   						<tr>
			   							<td>000100</td>
			   							<td>TCL集团</td>
			   							<td>4.76</td>
			   							<td>+3.94%</td>
			   						</tr>
			   						<tr>
			   							<td>601989</td>
			   							<td>中国重工</td>
			   							<td>5.45</td>
			   							<td>+1.87%</td>
			   						</tr>
			   					</tbody>
			   				</table>
			   				<table class="hot-table">
			   					<thead class="hot-title">
			   						<tr class="rank">
			   							<th>今日委比排名</th>
			   							<th></th>
			   							<th></th>
			   							<th></th>
			   						</tr>
			   						<tr class='handline'>
			   							<th>代码</th>
			   							<th>名称</th>
			   							<th>最新价</th>
			   							<th>涨跌幅</th>
			   						</tr>
			   					</thead>
			   					<tbody>
			   						<tr>
			   							<td>000559</td>
			   							<td>万向钱潮</td>
			   							<td>6.37</td>
			   							<td>+9.66%</td>
			   						</tr>
			   						<tr>
			   							<td>000725</td>
			   							<td>京东方A</td>
			   							<td>4.91</td>
			   							<td>+4.70%</td>
			   						</tr>
			   						<tr>
			   							<td>000100</td>
			   							<td>TCL集团</td>
			   							<td>4.76</td>
			   							<td>+3.94%</td>
			   						</tr>
			   						<tr>
			   							<td>601989</td>
			   							<td>中国重工</td>
			   							<td>5.45</td>
			   							<td>+1.87%</td>
			   						</tr>
			   					</tbody>
			   				</table>
			   				<!--自选股-->
			   				<div class="hot-a-head">
					   			<span class="left">自选股</span>
					   		</div>
			   				<template>
							  <el-table
							  	border
							    :data="tableData"
							    style="width: 100%"
							    height="200"
							    :default-sort = "{prop: 'date', order: 'ascending'}"
							    >
							    <el-table-column
							    	fixed
							      prop="order"
							      label="序号"
							      sortable
							      width="80">
							    </el-table-column>
							    <el-table-column
							    	fixed
							      prop="code"
							      label="代码"
							      width="100">
							    </el-table-column>
							    <el-table-column
							      fixed   
							      prop="name"
							      label="名称"
							      :width="150">
							    </el-table-column>
							    <el-table-column
							      prop="newPrice"
							      label="最新价"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="zhangdiee"
							      label="涨跌额"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="zhangdiefu"
							      label="涨跌幅"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="mzhangdiefu"
							      label="5分钟涨跌幅"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="dayszhangdiefu"
							      label="60日涨跌幅"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="yearzhangdiefu"
							      label="年初至今涨跌"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="buyPrice"
							      label="买入价"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="sellPrice"
							      label="卖出价"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="buyNum"
							      label="买量"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="sellNum"
							      label="卖量"
							      :width="120">
							    </el-table-column>
							    <el-table-column
							      prop="chengjiaoliang"
							      label="成交量"
							      :width="120">
							    </el-table-column>
							  </el-table>
							</template>
			   			</li>
			   			<li class='rank-content'>内容2</li>
			   			<li class='rank-content'>内容3</li>
			   			<li class='rank-content'>内容4</li>
			   			<li class='rank-content'>内容5</li>
			   			<li class='rank-content'>内容6</li>
			   			<li class='rank-content'>内容7</li>
			   		</ul>
			   	</div>
		   </div>
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label">全部美股<em>(10)</em></span>
		   
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label">纽交所<em>(10)</em></span>
		   上证B股
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label">美交所<em>(8)</em></span>
		    上海主板
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label">纳斯达克<em>(8)</em></span>
		     深圳主板
		  </el-tab-pane>
		  <el-tab-pane>
		  	<span slot="label">中概股<em>(3)</em></span>
		  	中小企业
		  </el-tab-pane>
		  <el-tab-pane>
		  	<span slot="label">明星股<em>(3)</em></span>
		  	创业板
		  </el-tab-pane>
		  <el-tab-pane>
		  	<span slot="label">ETF<em>(3)</em></span>
		  	科创版
		  </el-tab-pane>
		  <el-tab-pane>
		  	<span slot="label">已上市新股<em>(3)</em></span>
		  	债券型基金
		  </el-tab-pane>
		  <el-tab-pane>
		  	<span slot="label">CAR-T疗法<em>(3)</em></span>
		  	已上市新股
		  </el-tab-pane>
		  <el-tab-pane>
		  	<span slot="label">所有版块<em>(3)</em></span>
		  	所有版块
		  </el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				tableData: []
			}
		},
		mounted () {
			this.handletab();
		},
		methods: {
			handletab () {
				 $('.hot-a-right .title .rank').click(function(){
                    $(this).addClass('select').siblings().removeClass('select');
                    $('.hot-a-right .rank-content').eq($(this).index()).show().siblings().hide();
                })
			}
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
.optional-share /deep/ .el-tabs__content {
	padding-right: 40px;
	box-sizing: border-box;
}
/*大盘指数*/
.hot-a {
	display: flex;
	width: 100%;
	/*box-sizing:border-box*/
}
.hot-a-left,.hot-a-right {
	flex: 1;
}
.hot-a-left {
	margin-right: 10px;
}
.hot-a-left .left {
	width: 100%;
/*	float: left;*/
	font-family: "微软雅黑";
	font-size: 14px;
	box-sizing: border-box;
}
.hot-a-left .right {
	float: right;
	padding-right: 20px;
}
.hot-a-left .right em {
	font-size: 18px;
}
.hot-a-head {
	line-height: 30px;
}
.dapan {
	width: 100%;
	display: flex;
}
.dapan .huIndex ,.dapan .shenIndex{
	flex: 1;
	max-height: 350px;
	height: 350px;
	border: 1px #d1e7ff solid;
}
.dapan .huIndex {
	
}
.lingzhang-plate {
	width: 100%;
}
.lingzhang-plate .title {
	font-family: "微软雅黑";
	font-weight: bold;
	font-size: 18px;
	overflow: hidden;
}
.lingzhang-plate .title .item-spe {
	color: #2a2a2c;
	float: left;
}
.lingzhang-plate .title .rate-spe {
	float: right;
	color: #3ea071;
	margin-left: 10px;
}
.lingzhang-plate .progress {
	margin-top: 5px;
	width: 90%;
	height: 20px;
	line-height: 20px;
	background: #0a943f;
	color: #fff;
	text-align: center;
}
.lingzhang-plate .desc {
	margin-top: 10px;
	line-height: 20px;
	height: 20px;
}
.lingzhang-plate .desc .item {
	float: left;
	text-align: left;
	font-family: "微软雅黑";
	font-size: 16px;
	color: #414c3c;
}
.lingzhang-plate .desc .rate {
	float: right;
	font-family: "微软雅黑";
	font-size: 16px;
	color: #0a943f;
}
.lingzhang-item {
	float: left;
	width: calc(33.333333%);
	padding: 10px 10px 10px 10px;
	/*width: 300px;*/
	height: 220px;
	box-sizing: border-box;
	border-left: 1px #d1e7ff solid;
	border-top: 1px #d1e7ff solid;
}
/*富途热门/综合排名*/
.hot-a-right {
	width: 50%;
	/*margin-left: 20px;*/
	padding-right: 20px;
	box-sizing: border-box;
}
.hot-a-right .title {
	height: 30px;
	line-height: 30px;
	font-family: "微软雅黑";
	font-size: 12px;
}
.hot-a-right .title .rank {
	margin-left: 25px;
}
.title .select {
	color: #ff9105;
}
.hot-a-right .select {
	
}
.hot-a-right .content li {
	display: none;
}
.hot-a-right .content .rank-content.show {
	display: block;
}
/*富途热门*/
.hot-table {
	float: left;
	width: calc(50%);
	/*min-height: 300px;*/
	/*background: orange;*/
	border-top: 1px #d1e7ff solid;
	border-right: 1px #d1e7ff solid;
}
.hot-table:nth-of-type(odd) {
	border-left: 1px #d1e7ff  solid;
}
.hot-table:nth-child(5),.hot-table:nth-child(6) {
	border-bottom: 1px #d1e7ff solid;
}
.hot-table tr {
	height: 30px;
	line-height: 30px;
}
.hot-table .hot-title {
	
}
.hot-table .hot-title .rank {
	/*border-top: 1px orange solid;*/
	border-bottom: 1px #d1e7ff solid;
}
.hot-title tr {
	width: 100%;
}
.hot-table .hot-title tr th {
	font-family: "微软雅黑";
	font-weight: normal;
	font-size: 12px;
}
/*修改字体*/
.optional-share /deep/ .el-tabs__header .el-tabs__item {
	color: #596a91;
	font-family: "微软雅黑";
	font-size: 13px;
}
</style>
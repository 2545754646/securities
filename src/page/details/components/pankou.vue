<template>
	<div class="pankou">
		<ul>
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
		<div class="fenshi">
			<el-tabs v-model="activeName" type="border-card">
				<el-tab-pane label="分时" name="first">
					<div class="fenshi-echarts" ref="main">
						分时
					</div>
				</el-tab-pane>
			    <el-tab-pane label="多日" name="second">
			    	<div class="fenshi-echarts" ref="main">
						多日
					</div>
			    </el-tab-pane>
			    <el-tab-pane label="日K" name="third">
			    	<div class="fenshi-echarts" ref="main">
						日K
					</div>
			    </el-tab-pane>
			    <el-tab-pane label="周K" name="fourth">
			    	<div class="fenshi-echarts" ref="main">
						周K
					</div>
			    </el-tab-pane>
			    <el-tab-pane label="月K" name="fifth">
			    	<div class="fenshi-echarts" ref="main">
						月K
					</div>
			    </el-tab-pane>
			    <el-tab-pane label="季K" name="sixth">
			    	<div class="fenshi-echarts" ref="main">
						季K
					</div>
			    </el-tab-pane>
			    <el-tab-pane label="年K" name="seventh">
			    	<div class="fenshi-echarts" ref="main">
						年K
					</div>
			    </el-tab-pane>
				<el-tab-pane name="eighth">
				  <span slot="label">
				  	<el-dropdown>
					  <span class="el-dropdown-link">
					    分钟<i class="el-icon-arrow-down el-icon--right"></i>
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
				     
				    <div class="fenshi-echarts" ref="main">
						我的行程
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				activeName: 'first'
			}
		}
	}
</script>

<style lang="scss" scoped>
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

.fenshi .el-dropdown-link {
    cursor: pointer;
  }
.fenshi  .el-icon-arrow-down {
    font-size: 12px;
  }
  /*分时走势echarts折线图*/
 .fenshi-echarts {
 	width: 100%;
 	min-height: 200px;
 	margin: 0 auto;
 }
 .fenshi /deep/ .el-tabs__content {
 	border-bottom: 1px solid #DCDFE6;
 	padding: 10px!important;
 }
 
</style>
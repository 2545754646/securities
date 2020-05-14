<template>
	<div class="offer_meigu">
		<!--报价-美股-->
		<!--<template>
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
		      prop="zhangdiefu"
		      label="涨跌幅"
		      sortable
		      width="80">
		    </el-table-column>
		  </el-table>
		</template>-->
		<div class="offer-hk-title">
			<span @click="sort1">名称代码
				<!--<i class="el-down-icon" v-show="downIcon"></i>
				<i class="fa el-up-icon" v-show="!downIcon"></i>-->
				<i class="up iconfont" v-show="downIcon1">&#xe600;</i>
				<i class="down iconfont" v-show="!downIcon1">&#xe603;</i>
			</span>
			<span @click="sort2">最新价
				<i class="up iconfont" v-show="downIcon2">&#xe600;</i>
				<i class="down iconfont" v-show="!downIcon2">&#xe603;</i>
			</span>
			<span @click="sort3">涨跌额
				<i class="up iconfont" v-show="downIcon3">&#xe600;</i>
				<i class="down iconfont" v-show="!downIcon3">&#xe603;</i>
			</span>
			<span @click="sort4">涨跌幅
				<i class="up iconfont" v-show="downIcon4">&#xe600;</i>
				<i class="down iconfont" v-show="!downIcon4">&#xe603;</i>
			</span>
		</div>
		<ul class="offer-hk-list" ref="searchStock">
			<li class="offer-hk-list-item" v-for="(item,index) in totalCount" :key="index">
				<div class="first">
					<span class="codeName">{{item.code_name}}</span>
					<span class='newPrice'>3076.90</span>
					<span class="zhangdiee">+2.82</span>
					<span class="zhangdiefu">+0.09%</span>
				</div>
				<div class="second">
					<span class="codeName">TSLA</span>
					<span class='newPrice'>512.610</span>
					<span class="zhangdiee">-0.880</span>
					<span class="zhangdiefu">-0.17%</span>
				</div>
			</li>
			
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			downIcon1: false,
			downIcon2: false,
			downIcon3: false,
			downIcon4: false,
			pageIndex: 1,  //页码
			totalCount: [],
			totalPage: ''
			}
		},
		methods: {
			sort1 () {
				 this.downIcon1 = !this.downIcon1
			},
			sort2 () {
				 this.downIcon2 = !this.downIcon2
			},
			sort3 () {
				 this.downIcon3 = !this.downIcon3
			},
			sort4 () {
				 this.downIcon4 = !this.downIcon4
			},
			loadStockByPage () {
				let param = new URLSearchParams();
				param.append('type',2);
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
						dom.removeEventListener('scroll', this.loadBottom)
					}
					if (this.pageIndex === 1) {
						this.totalCount = data.data.Data;
					} else {
						this.totalCount = this.totalCount.concat(data.data.Data);
					}
					
					this.pageIndex++;
				}).catch(() => {
					console.log(err);
				})
			},
			loadBottom () {
//				this.loadStockByPage();
				let dom = this.$refs.searchStock;
//			    dom.addEventListener("scroll", function() {
			    const scrollDistance =dom.scrollHeight - dom.scrollTop - dom.clientHeight;
			    console.log(scrollDistance);
				if (scrollDistance <=20) {
					this.loadStockByPage();
					console.log(this.totalCount);
				}
//			})
			
			}
		},
		created () {
//			this.searchStock(page);
			this.loadStockByPage();
		},
		mounted () {
			let dom = this.$refs.searchStock;
			dom.addEventListener('scroll',this.loadBottom);
		}
	}
</script>

<style lang="scss" scoped>
.offer-hk-title {
	font-family: "微软雅黑";
	display: flex;
	height: 25px;
	line-height: 25px;
	border-bottom: 1px #c7ddf5 solid;
	color: #555e6d;
}
.offer-hk-title span {
	flex: 1;
	text-align: center;
}


/* 向上的箭头 */
/*.el-up-icon {
    font-size: 0;
    line-height: 0;
    border-width: 10px;
    border-color: orange;
    border-top-width: 0;
    border-style: dashed;
    border-bottom-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
}*/
/* 向右的箭头 */
/*.dot-right {
    font-size: 0;
    line-height: 0;
    border-width: 10px;
    border-color: orange;
    border-right-width: 0;
    border-style: dashed;
    border-left-style: solid;
    border-top-color: transparent;
    border-bottom-color: transparent;
}*/
/* 向下的箭头 */
/*.el-down-icon {
    font-size: 0;
    line-height: 0;
    border-width: 10px;
    border-color: orange;
    border-bottom-width: 0;
    border-style: dashed;
    border-top-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
}*/
/* 向左的箭头 */
/*.dot-left {
    font-size: 0;
    line-height: 0;
    border-width: 10px;
    border-color: orange;
    border-left-width: 0;
    border-style: dashed;
    border-right-style: solid;
    border-top-color: transparent;
    border-bottom-color: transparent;
}*/
.up,.down {
	font-size: 14px;
	margin-top: 3px;
}
.offer-hk-list {
	position: absolute;
	width: 345px;
	top: 90px;
	bottom: 10px;
	left: 0;
	/*background: #587597;*/
	overflow: scroll;
}
.offer-hk-list-item {
	height: 50px;
	padding: 5px 10px 0;
}
.offer-hk-list-item:hover {
	background: #c7ddf5;
}
.offer-hk-list-item .first{
	display: flex;
	font-size: 12px;
	font-family: "微软雅黑";
	font-weight: bold;
	text-align: left;
}
.offer-hk-list-item .first .codeName {
	color: #40648c;
	padding-top:5px;
}
.offer-hk-list-item .first .newPrice {
	color: #44825b;
	padding-top:5px;
}
.offer-hk-list-item .first .zhangdiee {
	padding-top:5px;
	color: #44825b;
}
.offer-hk-list-item .first .zhangdiefu {
	color: #44825b;
	padding: 5px 0px 5px;
	background: #44825b;
	color: #fff;
	text-align: center;
}
.offer-hk-list-item .first span {
	flex: 1;
}
.offer-hk-list-item .second  {
	display: flex;
	font-family: "微软雅黑";
	font-size: 12px;
	text-align: left;
	margin-top: 3px;
}
.offer-hk-list-item .second span {
	flex: 1;
}
</style>
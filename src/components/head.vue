<template>
	<div class="head">
		<!--页面标题-->
	    <div class="head-left"> 
	    	<img src="../assets/image/layout.jpg" class="layout" />
	    	<img src="../assets/image/notice_2.jpg" class="notice" />
	    	<img src="../assets/image/magnify.png" class="magnify" />    
	    	<input type="text" v-show="show" class="showInput" v-model="code" @keyup="search($event)" placeholder="查询股票" />
	    	<ul class="dropmenu" v-show="drop">
	    		<li v-for="(item,index) in itemList" :key="index" @click="itemListSelect(index)">
	    			{{item.code}}        {{item.code_name}}
	    		</li>
	    		<!--<li>亚马逊</li>
	    		<li>阿里巴巴</li>
	    		<li>Facebook</li>-->
	    	</ul>
	    </div> 
	    <div class="head-title">
	      <img src="" />
	      <span><!--富途牛牛-我的-->{{title}}</span>
	    </div>
	    <div class="head-right"></div>
	</div>
</template>

<script> 
	export default {
		data () {
			return {
				show: true,
				itemList: '',
				code: '',
//				type: ''
				drop: false,
				searchData: ''
			}
		},
		props: {
			title: {
				type: String
			}
		},
		methods: {
			search (event) {
				if (this.code) {
					let param = new URLSearchParams();
					param.append('code',this.code);
					this.$axios({
								method: "post",
								url: "/api/api/Tdx/SeleCode",
								data: param
						}).then((data) => {
	//							console.log(data);
								this.drop = true;
								let res = data.data;
								this.itemList = res.Data;
								console.log(this.itemList);
//								this.searchData =  this.itemList.filter(function(item) {
//								 	console.log(item)
//									return Object.keys(item).some(function(key) {
////										console.log(Object.keys(item))
//										console.log(key)
//								  	return String(item[key]).toLowerCase().indexOf(code) > -1
//									})
//								})

//								if (data.data.ExcuteCode == 0) {
//									let type = data.data.Data[0].sc;
//									console.log(type)
//	//								if(type == 31 || 48) {
//	//									this.$router.push('/layout/offer/hk');
//	//								} else {
//	//									this.$router.push('/layout/offer/meigu');
//	//								}
//									if (type == 74) {
//										this.$router.push('/layout/offer/meigu');
//									}
//								}
						}).catch((err) => {
								console.log(err);
						})
				}
			},
			itemListSelect (index) {
				this.code = '';
				this.searchData = this.itemList[index]
				this.$store.commit('submitCode',this.searchData);
				console.log(this.searchData.sc);
				if (this.searchData.sc == 74) {
					this.code = '';
					this.itemList = "";
					this.$router.push('/layout/offer/meigu');
					
				} else {
					this.code = '';
					this.itemList = "";
					this.$router.push('/layout/offer/hk');
				}
			}
	}

	}
</script>

<style scoped>
.head-left {
	padding-left: 30px;
	float: left;
} 
.head-left img {
	vertical-align: top;
	margin-top: 6px;
	max-width: 25px;
	height: 20px;
}
.head-left .notice {
	margin-left: 10px;
	margin-right: 10px;
}
.nav-right .head {
	width:100%;
	height: 30px;
    background: rgb(187 255 255);
    /*position: fixed;*/
    /*position: relative;*/
   position: absolute;
    left: 0;
    top: 0;
  }
  .head .head-title {
    text-align: center;
    line-height: 30px;
  }
  .head-title span {
  	font-family: "微软雅黑";
  	font-size: 12px;
  }
  .showInput {
  	position: absolute;
  	top: 0px;
  	left: 130px;
  	z-index: 9;
  	margin-top: 6px;
  }
  .dropmenu {
  	height:auto;
  	position: absolute;
  	left: 130px;
  	top: 26px;
  	z-index: 999;
  	background: #eee;
  }
  .dropmenu li {
  	width: 135px;
  	line-height: 25px;
  	font-family: "微软雅黑";
  }
  .dropmenu li:hover {
  	background: #c7ddf5;
  }
  .dropmenu li:first-child {
  	background: #c7ddf5;
  }
</style>
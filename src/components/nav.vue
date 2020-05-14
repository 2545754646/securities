<template>
  <div class="nav">
    <!--<router-link class="nav-left-item" tag="li" to="/my">
        <i class="icon iconfont ">&#xe699;</i>
        <div class="fontSize">我的</div>
      </router-link>
    <router-link class="nav-left-item" tag="li" to="/market">
       <i class="icon iconfont ">&#xe62a;</i>
       <div class="fontSize">行情</div>
     </router-link>
     <router-link class="nav-left-item" tag="li" to="/doNew">
       <i class="icon iconfont">&#xe60b;</i>
       <div class="fontSize">打新</div>
     </router-link>
     <router-link class="nav-left-item" tag="li" to="/deal">
       <i class="icon iconfont">&#xe6f6;</i>
       <div class="fontSize">交易</div>
     </router-link>
     <router-link class="nav-left-item" tag="li" to="/consult">
       <i class="icon iconfont">&#xe601;</i>
       <div class="fontSize">咨询</div>
     </router-link>
     <router-link class="nav-left-item" tag="li" to="/strategy">
       <i class="icon iconfont">&#xe604;</i>
       <div class="fontSize">策略</div>
     </router-link>
     <router-link class="nav-left-item" tag="li" to="/message">
       <i class="icon iconfont">&#xe61e;</i>
       <div class="fontSize">站内消息</div>
     </router-link>
     <router-link class="nav-left-item" tag="li" to="/friends">
       <i class="icon iconfont">&#xe602;</i>
       <div class="fontSize">朋友圈</div>
     </router-link>-->
     <div class="nav-wrap">
	     <router-link class="nav-left-item" tag="li" :to="item.path" 
	     	v-for="(item,index) in detailsNav" :key="index" >
	     	  <i class="icon iconfont ">{{item.color}}</i>
	        <div class="fontSize">{{item.title}}</div>
	     </router-link>
	    </div>
     <!--<div class="nav-left-item nav-foot">
       <i class="icon iconfont course">&#xe609;</i>
     </div>-->
  </div>
</template>

<script>
  export default {
  	data () {
  		return {
  			getPath: '',
  			detailsNav: [
  				{
  					title: "我的",
  				  color: '\ue699',
  				  path: '/layout/my'
  				},
  				{
  					title: '报价',
  					color: '\ue6c7',
  					path: '/layout/offer'
  				},
  				{
  					title: '行情',
  					color: '\ue62a',
  					path: '/layout/market'
  				},
  				{
  					title: '打新',
  					color: '\ue60b',
  					path: '/layout/doNew'
  				},
  				{
  					title: '交易',
  					color: '\ue6f6',
  					path: '/layout/deal'
  				},
  				{
  					title: '咨询',
  					color: '\ue601',
  					path: '/layout/consult'
  				},
  				{
  					title: '策略',
  					color: '\ue604',
  					path: '/layout/strategy'
  				},
  				{
  					title: '站内消息',
  					color: '\ue61e',
  					path: '/layout/message'
  				},
  				{
  					title: '学院',
  					color: '\ue69f',
  					path: '/layout/academy'
  				},
  				{
  					title: '朋友圈',
  					color: '\ue602',
  					path: '/layout/friends'
  				}
  			],
//			firstIndex: false
  		}
  	}
//	methods: {
//		handleItem (index) {
//			this.firstIndex = index;
////			console.log(this.$route.path)
//		}
//	}
  }
</script>

<style scoped>
	.nav {
		 /*display: flex; 
    flex-flow: column; 
    min-height: 100vh;*/
	}
	.nav-wrap {
		/* flex: 1;*/
	}
	.nav-foot {
		/*flex: 0;*/
	}
  .nav-left-item {
    padding: 15px 0;
    text-align: center;
    color: #fff;
  }
  .nav-left-item .iconfont {
    font-size: 30px;
  }
  .nav-left-item .fontSize {
    font-size: 12px;
    margin-top: 10px;
  }
  .active {
  	/*background: gray;*/
  }
  .router-link-exact-active {
  	/*background: gray;*/
  }
  .nav-left-item.router-link-exact-active .iconfont {
  	color: #ff9105;
  }
  .nav-left-item.router-link-exact-active .fontSize {
  	color: #ff9105;
  }
</style>
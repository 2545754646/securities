<template>
  <div class="layout-wrap">
	  <div class="wrapper">
	    <div class="nav-left">
	    	<div class="nav-left-wrap clearfix">
	    		<div class="nav-left-box">
		      <div class="logo">
		        <img class="logoImg" src="../assets/image/niuniu.jpg" />
		      </div>
		   
		          <ul>
		            <!-- <router-link tag="li" to="/details/my" class="nav-left-item" v-for="(item,index) in detailsNav" :key="index">
		              <i class="icon iconfont">{{item.image}}</i>
		              <div class="fontSize">{{item.title}}</div>
		            </router-link> -->
		            <!-- <router-link class="nav-left-item" tag="li" to="/my">
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
		            </router-link>
		            <li class="nav-left-item">
		              <i class="icon iconfont course">&#xe609;</i>
		            </li> -->
		            <Nav />
		          </ul>
		     
	     </div>
		    </div>
		    <div class="nav-foot last">
	        <i class="icon iconfont course">&#xe609;</i>
	      </div>
	    </div>
	    <div class="nav-right">
	      <!--<div class="head">
	        <div class="head-left"></div>
	        <div class="head-title">
	          <img src="" />
	          <span>富途牛牛-我的</span>
	        </div>
	        <div class="head-right"></div>
	      </div>-->
	      <div class="nav-right-wrap"> 
	      	<router-view></router-view>
	      </div>
	     
	      <div class="foot">
	      	我是底部
	      </div>
	    </div>
   </div>
  </div>
</template>

<script>
import Nav from '../components/nav.vue';
export default {
  name: 'Layout',
  data () {
    return {
			
    }
  },
  components: {
    Nav
  },
  computed: {
//	getUrl () {
//		console.log(this.$route.path);
//		
//	}
  }
}
</script>

<style scoped>
	html, body{
		height: 100%;
		margin: 0;
		padding: 0;
}
  body {
  	
  }
  .layout-wrap {
  	/*flex: 1;*/
  }
  .layout-wrap {
    height: 100%;
    width: 100%;
  }
  .wrapper {
  	display: flex;
  }
  html, body, .nav-left-wrap {
     height: 100%;
}
  .nav-left {
    width: 60px;
    /*height: 100%;*/
    background: #1165ad;
    /*display: flex;*/ 
    /*flex-flow: column; 
    min-height: 100vh;
    box-sizing: border-box;*/
  }
  .nav-left-wrap {
  	 height: auto; 
  	 min-height: 100%;
  }
  .nav-left-box {
  	/*flex: 1;*/ 
  	padding-bottom: 50px;
  }
  .nav-foot {
  	text-align: center;
  	/*flex: 0;*/
  	/*margin-bottom: 100px;*/
  	position: relative;
    margin-top: -50px; /* footer高度的负值 */
    height: 50px;
    clear:both;
  }
  .nav-left .logoImg {
     width: 50px;
     height: 50px;
     display: block;
     padding-left: 5px;
     padding-top: 5px;
     border-radius: 3px;
  }
  .nav-left-item {
    padding: 10px 0;
    text-align: center;
    color: #fff;
    }
  /*.nav-left-item {
    padding: 10px 0;
    text-align: center;
    color: #fff;
  }
  .nav-left-item .iconfont {
    font-size: 30px;
  }
  .nav-left-item .fontSize {
    font-size: 12px;
    margin-top: 10px;
  }*/
  .nav-right {
    flex: 1;
    display:flex;
  	flex-flow: column; 
    min-height: 100vh;
    position: relative;
    width: 100%;
  }
  /*页面头部标题css*/
  /*.nav-right .head {
    height: 30px;
    background: rgb(187 255 255);
  }
  .nav-right .head-title {
    text-align: center;
    line-height: 30px;
  }*/
   .course {
     color: #fff;
     font-size: 30px;
     text-align: center;
   }
   .nav-right-wrap {
   	flex: 1;
   	position: absolute;
   	width: 100%;
   	z-index: 10;
   	top: 0;
   	left: 0;
   	bottom: 30px;
   }
   .foot {
   	flex: 0;
   	height: 30px;
   	line-height: 30px;
   	text-align: center;
   	color: #fff;
   	background: dodgerblue;
   	z-index: 99;
   	position: absolute;
   	bottom: 0;
   	width: 100%;
   }
    .router-link-exact-active .iconfont {
  	color: #ff9105;
  }
  .router-link-exact-active .fontSize {
  	color: #ff9105;
  }
  /*.clearfix:after {
     content: ".";
     display: block;
     height: 0;
     clear: both;
     visibility: hidden;
}    */
</style>

<template>
  <div class="doNew">
     <Head :title='doNew' />
     <div class="doNew-wrap">
     	<div class="doNew-left">
     		<ul class="doNew-nav">
		     	<router-link tag="li" to="/layout/doNew/doNew_meigu" active-class="active">美股</router-link>
		     	<router-link tag="li" to="/layout/doNew/doNew_ganggu" active-class="active">港股</router-link>
	     	</ul>
			</div>
			<div class="doNew-right">
				<router-view></router-view>
			</div>
     </div>
  </div>
</template>

<script>
import Head from '../../components/head.vue'
export default {
	name:'DONew',
	data () {
		return {
			doNew: '美港通-打新'
		}
	},
	components: {
		Head
	},
	methods: {
      
    }
}
</script>

<style lang="scss" scoped>
.doNew-wrap {
	
}
.doNew-left {
	float: left;
	width: 300px;
	height: 100%;
	height: 100vh;
	margin-top: 30px;
	border-right:1px #c7ddf5 solid;
}
.doNew-nav {
	display: flex;
	height: 30px;
	line-height: 30px;
	text-align: center;
	border-bottom: 1px #c7ddf5 solid;
	border-right: 1px #c7ddf5 solid;
}
.doNew-nav li {
	flex: 1;
}
.active {
	color:orange;
}
.doNew-right {
	margin-left: 301px;
	height: 400px;
	/*background: thistle;*/
}
</style>

<template>
	<div class="category">
		<!--我的美股/港股/A股(资金/股票/其他组件)-->
         	<div class="category-wrap">
         	  <div class="money category-item">
         	  	<div class="title">资金</div>
         	  	<div class="deposit category-item-small">
         	  		<img src="../../assets/image/deposit.jpg"  class="category-item-img" />
         	  		<div class="deposit-desc category-item-desc">存入资金</div>
         	  	</div>
         	  	<div class="draw category-item-small">
         	  		<img src="../../assets/image/draw.jpg" class="category-item-img" />
         	  		<div class="draw-desc category-item-desc">提取资金</div>
         	  	</div>
         	  	<div class="convert category-item-small">
         	  		<img src="../../assets/image/convert.jpg"  class="category-item-img" />
         	  		<div class="covert-desc category-item-desc">货币兑换</div>
         	  	</div>
         	  	<div class="history category-item-small">
         	  		<img src="../../assets/image/history.jpg"  class="category-item-img" />
         	  		<div class="covert-desc category-item-desc">历史纪录</div>
         	  	</div>
         	  </div>
         	  <div class="gupiao category-item">
         	  	<div class="title">股票</div>
         	  	<div class="category-item-small">
         	  		<img src="../../assets/image/offer.jpg"  class="category-item-img" />
         	  		<div class="category-item-desc">认购新股</div>
         	  	</div>
         	  	<div class="category-item-small">
         	  		<img src="../../assets/image/zhuanru.jpg" class="category-item-img" />
         	  		<div class="category-item-desc">转入股票</div>
         	  	</div>
         	  	<div class="category-item-small">
         	  		<img src="../../assets/image/zhuanchu.jpg"  class="category-item-img" />
         	  		<div class="category-item-desc">转出股票</div>
         	  	</div>
         	  	<div class="category-item-small">
         	  		<img src="../../assets/image/shenqing.jpg"  class="category-item-img" />
         	  		<div class="category-item-desc">申请供股</div>
         	  	</div>
         	  	<div class="category-item-small">
         	  		<img src="../../assets/image/xuangu.jpg"  class="category-item-img" />
         	  		<div class="category-item-desc">选股选息</div>
         	  	</div>
         	  	<div class="category-item-small">
         	  		<img src="../../assets/image/history.jpg"  class="category-item-img" />
         	  		<div class="category-item-desc">历史纪录</div>
         	  	</div>
         	  </div>
         	  <div class="other category-item">
         	  	<div class="title">其他</div>
         	  	<div class="deposit category-item-small">
         	  		<img src="../../assets/image/deposit.jpg"  class="category-item-img" />
         	  		<div class="deposit-desc category-item-desc">我的佣金</div>
         	  	</div>
         	  	<div class="draw category-item-small">
         	  		<img src="../../assets/image/draw.jpg" class="category-item-img" />
         	  		<div class="draw-desc category-item-desc">实时行情</div>
         	  	</div>
         	  	<div class="convert category-item-small">
         	  		<img src="../../assets/image/convert.jpg"  class="category-item-img" />
         	  		<div class="covert-desc category-item-desc">邀请关系</div>
         	  	</div>
         	  </div>
         	</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.category {
    	width: 100%;
    	margin-top: 40px;
    	/*overflow: hidden;*/
    	overflow-x: scroll;
    	overflow-y: hidden;
    }
    .category-wrap {
    	white-space: nowrap;
    }
    .category-item {
    	/*float: left;*/
    	display: inline-block;
    	padding-left: 20px; 
    }
    .category-item .title {
    	margin-bottom: 10px;
    	color: #4e5158;
    	font-size: 12px;
    	font-family: "微软雅黑";
    }
    .category-item-small {
    	float: left;
    	margin: 0 20px;
    }
    .category-item-small .category-item-img {
    	width: 50px;
    	height: 50px;
    }
    .category-item-small .category-item-desc {
    	margin-top: 5px;
    } 
    /*滚动条样式*/
    ::-webkit-scrollbar {/*滚动条整体样式*/
            width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 5px;
            background: #c0d5ea;
            
        }
        ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
        ::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);
        }
</style>
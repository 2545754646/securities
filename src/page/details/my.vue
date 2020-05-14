<template>
  <div class="my">
  	<Head :title="my" />    <!--引入页面标题组件-->
     <div class="content">
       <div class="content-left">
       	<!--港股/美股/A股的导航-->
         <template>
           <el-tabs v-model="activeNameFirst" @tab-click="handleClick" class="stockCaltogories">
             <el-tab-pane label="港股" name="first" class="el-tab-item">
                <ul class="stock">
                  <li class="stock-item">
                    <img src="../../assets/image/free.jpg"  class="stock-img" />
                    <h4 class="stock-title">交易免佣</h4>
                    <p class="stock-desc">开户即免佣，超低融资利息</p>
                  </li>
                  <li class="stock-item">
                    <img src="../../assets/image/invest.jpg" class="stock-img" />
                    <h4 class="stock-title">腾讯投资，持牌券商</h4>
                    <p class="stock-desc">香港证监会监管，投资者赔偿基金保障</p>
                  </li>
                  <li class="stock-item">
                    <img src="../../assets/image/open.jpg" class="stock-img" />
                    <h4 class="stock-title">开户入金无限制</h4>
                    <p class="stock-desc">存入任意金额即可交易</p>
                  </li>
                </ul>
                <div class="openCount">立即开户</div>
                <div class="category">
									<div class="category-wrap">
										<div class="category-item" v-for="(category,index) in HKcategories" :key="index">
											<div class="title"><!--资金-->{{category.itemName}}</div>
											<div class="category-item-small" v-for="(item,index) in category.classify" :key="index">
												<img :src="item.imgUrl" class="category-item-img" />
												<div class="deposit-desc category-item-desc"><!--存入资金-->{{item.title}}</div>
											</div>
											<!--<div class="draw category-item-small">
												<img src="../../assets/image/draw.jpg" class="category-item-img" />
												<div class="draw-desc category-item-desc">提取资金</div>
											</div>
											<div class="convert category-item-small">
												<img src="../../assets/image/convert.jpg" class="category-item-img" />
												<div class="covert-desc category-item-desc">货币兑换</div>
											</div>
											<div class="history category-item-small">
												<img src="../../assets/image/history.jpg" class="category-item-img" />
												<div class="covert-desc category-item-desc">历史纪录</div>
											</div>-->
										</div>
										<!--<div class="gupiao category-item">
											<div class="title">股票</div>
											<div class="category-item-small">
												<img src="../../assets/image/offer.jpg" class="category-item-img" />
												<div class="category-item-desc">认购新股</div>
											</div>
											<div class="category-item-small">
												<img src="../../assets/image/zhuanru.jpg" class="category-item-img" />
												<div class="category-item-desc">转入股票</div>
											</div>
											<div class="category-item-small">
												<img src="../../assets/image/zhuanchu.jpg" class="category-item-img" />
												<div class="category-item-desc">转出股票</div>
											</div>
											<div class="category-item-small">
												<img src="../../assets/image/shenqing.jpg" class="category-item-img" />
												<div class="category-item-desc">申请供股</div>
											</div>
											<div class="category-item-small">
												<img src="../../assets/image/xuangu.jpg" class="category-item-img" />
												<div class="category-item-desc">选股选息</div>
											</div>
											<div class="category-item-small">
												<img src="../../assets/image/history.jpg" class="category-item-img" />
												<div class="category-item-desc">历史纪录</div>
											</div>
										</div>-->
										<!--<div class="other category-item">
											<div class="title">其他</div>
											<div class="deposit category-item-small">
												<img src="../../assets/image/deposit.jpg" class="category-item-img" />
												<div class="deposit-desc category-item-desc">我的佣金</div>
											</div>
											<div class="draw category-item-small">
												<img src="../../assets/image/draw.jpg" class="category-item-img" />
												<div class="draw-desc category-item-desc">实时行情</div>
											</div>
											<div class="convert category-item-small">
												<img src="../../assets/image/convert.jpg" class="category-item-img" />
												<div class="covert-desc category-item-desc">邀请关系</div>
											</div>
										</div>-->
									</div>
								</div>
             </el-tab-pane>
             <el-tab-pane label="美股" name="second" class="el-tab-item">
              <ul class="stock">
                <li class="stock-item">
                  <img src="../../assets/image/free.jpg" class="stock-img" />
                  <h4 class="stock-title">$0.01/股，超低佣金</h4>
                  <p class="stock-desc">多套佣金方案，灵活选择</p>
                </li>
                <li class="stock-item">
                  <img src="../../assets/image/invest.jpg" class="stock-img" />
                  <h4 class="stock-title">腾讯投资，香港证监会监管</h4>
                  <p class="stock-desc">spic赔偿金高达50万美元/客户</p>
                </li>
                <li class="stock-item">
                  <img src="../../assets/image/open.jpg" class="stock-img" />
                  <h4 class="stock-title">支持融资，卖空交易</h4>
                  <p class="stock-desc">超低融资融券交易</p>
                </li>
              </ul>
              <div class="openCount">立即开户</div>
              <!--美股下的资金/股票/其他-->
              <div class="category">
									<div class="category-wrap">
			              <div class="category-item" v-for="(AStock,index) in AmericaStocks" :key="index">
											<div class="title"><!--资金-->{{AStock.itemName}}</div>
											<div class="category-item-small" v-for="(item,index) in AStock.classify" :key="index">
												<img :src="item.imgUrl" class="category-item-img" />
												<div class="deposit-desc category-item-desc"><!--存入资金-->{{item.title}}</div>
											</div>
										</div>
									</div>
							</div>
             </el-tab-pane>
             <el-tab-pane label="A股" name="third" class="el-tab-item">
							<div class="Astock">
								<img class="Astock-img" src="../../assets/image/Astock.png" />
								<div class="Astock-right">
									<div class="Astock-title">富途A股通</div>
									<div class="Astock-desc">可通过富途直接交易A股通股票</div>
								</div>
								<div class="openCount">开户</div>
							</div>
							<!--A股下的资金/其他-->
							<div class="category">
									<div class="category-wrap">
			              <div class="category-item" v-for="(other,index) in others" :key="index">
											<div class="title">{{other.itemName}}</div>
											<div class="category-item-small" v-for="(item,index) in other.classify" :key="index">
												<img :src="item.imgUrl" class="category-item-img" />
												<div class="deposit-desc category-item-desc">{{item.title}}</div>
											</div>
										</div>
									</div>
							</div>
             </el-tab-pane>
           </el-tabs>
         </template>
         <!--资金/股票/其他种类-->
         <!--table表格-->
         <template>
				  <el-table
				    :data="tableData"
				    border
				    style="width: 100%"
				    :default-sort = "{prop: 'handle', order: 'descending'}"
				    class="table-stock"
				    >
				    <el-table-column
				      prop="handle"
				      label="操作"
				      sortable
				      width="70">
				    </el-table-column>
				    <el-table-column
				      prop="code"
				      label="代码"
				      sortable
				      width="80">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="名称"
				      sortable
				      width="80">
				    </el-table-column>
				    <el-table-column
				      prop="price"
				      label="持有数量@市价"
				      sortable
				      width="130">
				    </el-table-column>
				    <el-table-column
				      prop="num"
				      label="可卖数量"
				      sortable
				      width="90">
				    </el-table-column>
				    <el-table-column
				      prop="cost"
				      label="成本价"
				      sortable
				      width="80">
				    </el-table-column>
				    <el-table-column
				      prop="money"
				      label="市值"
				      sortable
				      width="60">
				    </el-table-column>
				    <el-table-column
				      prop="rate"
				      label="盈亏比例"
				      sortable
				      width="90">
				    </el-table-column>
				    <el-table-column
				      prop="amount"
				      label="盈亏金额"
				      sortable
				      width="90">
				    </el-table-column>
				    <el-table-column
				      prop="win"
				      label="今日盈亏"
				      sortable
				      width="90">
				    </el-table-column>
				    <el-table-column
				      prop="arrive"
				      label="今日成交额"
				      sortable
				      width="100">
				    </el-table-column>
				    <el-table-column
				      prop="buy"
				      label="今日买入@均价"
				      sortable
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="sell"
				      label="今日卖出@均价"
				      sortable
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="asure"
				      label="保证金额"
				      sortable
				      width="90">
				    </el-table-column>
				  </el-table>
				</template>
       </div>
       <!--页面右侧部分-->
       <div class="content-right">
       	<div class="myNav">
       		<ul class="right-baojia">
	       		<li class="baojia-title select">报价</li>
	       		<li class="baojia-title">分析</li>
	       		<li class="baojia-title">资讯</li>
	       		<li class="baojia-title">评论</li>
	       	</ul>
	       	<div class="baojia-content">
	       		<div class="baojia-item show">
	       			<Company :companyCode="companyCode" />
	       			<div class="myNav-content">
	       				<Quote />
	       			</div>
	       		</div>
	       		<div class="baojia-item">eee</div>
	       		<div class="baojia-item">ewe</div>
	       		<div class="baojia-item">se</div>
	       	</div>
       		<!--<div class="myNav-wrap">
	       		<div class="myNav-head">
		       		<router-link tag="li" class="myNav-item" to="/my/quote">报价</router-link>
		       		<router-link tag="li" class="myNav-item" to="/my/analysis">分析</router-link>
		       		<router-link tag="li" class="myNav-item" to="/my/news">资讯</router-link>
		       		<router-link tag="li" class="myNav-item" to="/my/comment">评论</router-link>
	       		</div>
	       		<Company />
       		</div>-->
       		<!--<div class="myNav-content">
       			<router-view></router-view>
       		</div>-->
	       	<!--<template>
					  <el-tabs v-model="activeNameSecond" @tab-click="handleClickRight" class="quote">
					    <el-tab-pane label="报价" name="first">
					    	
					    	<div class="company">
					    		<div class="wrap">
					    			<div class="company-name">
							    		<div class="tencent-stock-code">00700.HK</div>
							    		<div class="tencent-stock-company">腾讯控股</div>
							    		<img class="card" src="../../assets/image/card.png"  />
							    	</div>
							    	<div class="trend">
							    		<div class="number">
							    			<span class="trend-number">384.000</span>
							    			<img src="../../assets/image/add.png" class="trend-img" />
							    			<span class="float">+7.200+1.91%</span>
							    		</div>
							    		<div class="close">
							    			<span class="haveClose">已收盘</span>
							    			<span class="date">12/27 16:08</span>
							    		</div>
							    	</div>
							    	<div class="mark">
							    		<div class="mark-left">
							    			<img class="gangjiaosuo" src="../../assets/image/gangjiaosuo.png" />
							    			<img class="high-market-quotation" src="../../assets/image/highMarketQuotation.png" />
							    			<img class="hugangtong" src="../../assets/image/hugangtong.png" />
							    			<img class="support-financial" src="../../assets/image/supportFinancial.png" />
							    			<img class="hengzhi" src="../../assets/image/hengzhi.jpg" />
							    			<img class='zixuangu' src="../../assets/image/zixuangu.png" />
							    		</div>
							    		<div class="mark-right">
							    			<img class="notice" src="../../assets/image/notice.png" />
							    			<span class="exchange">交易</span>
							    		</div>
							    	</div>
							    	<div class="stock-details">
							    		<ul ref="handStock" :class="{stockActive: flag}">
							    			<li class="stock-details-item">最高价<span>385.400</span></li>
							    			<li class="stock-details-item">开盘价<span>385.400</span></li>
							    			<li class="stock-details-item">成交量<span>1918万</span></li>
							    			<li class="stock-details-item">最低价<span>378.200</span></li>
							    			<li class="stock-details-item">昨收价<span>376.800</span></li>
							    			<li class="stock-details-item">成交价<span>73.51亿</span></li>
							    			<li class="stock-details-item">振幅<span>1.91%</span></li>
							    			<li class="stock-details-item">平均价<span>383.273</span></li>
							    			<li class="stock-details-item">市盈率(静)<span>39.654</span></li>
							    			<li class="stock-details-item">委比<span>23.31%</span></li>
							    			<li class="stock-details-item">总市值<span>36686.1亿</span></li>
							    			<li class="stock-details-item">市盈率ＴＴＭ<span>36.491</span></li>
							    			<li class="stock-details-item">量比<span>0.850</span></li>
							    			<li class="stock-details-item">总股本<span>95.52亿</span></li>
							    			<li class="stock-details-item">市净率<span>8.121</span></li>
							    			<li class="stock-details-item">52周最高<span>399.400</span></li>
							    			<li class="stock-details-item">港股市值<span>36686.1</span></li>
							    			<li class="stock-details-item">换手率<span>0.122%</span></li>
							    			<li class="stock-details-item">52周最低<span>299.400</span></li>
							    			<li class="stock-details-item">港股股本<span>95.43亿</span></li>
							    			<li class="stock-details-item">每手<span>100</span></li>
							    			<li class="stock-details-item">历史最高<span>474.739</span></li>
							    			<li class="stock-details-item">股息TTM<span>0.997</span></li>
							    			<li class="stock-details-item">股息率TTM<span>0.260%</span></li>
							    			<li class="stock-details-item">历史最低<span>-3.581</span></li>
							    			<li class="stock-details-item">股息LFY<span>0.997</span></li>
							    			<li class="stock-details-item">股息率<span>0.259%</span></li>
							    		</ul>
							    		<div class="hand-arrow">
									    		<div class="stretch" v-if="stockLis>6" @click="showTag"> 
									    				<span class="stretch-show" :class="flag?'down-arrow' : 'top-arrow'"></span> 
									    		</div>
							    		</div>
							    		
							    	</div>
					    		</div>
					    	</div>
					    
					    	<div class="pankou">
					    		<template>
									  <el-tabs v-model="activeName3" type="card" @tab-click="handleClick3">
									    <el-tab-pane label="盘口" name="first">
									    	<ul>
									    		<li class="pankou-item">
									    			<img src="../../assets/image/tip.png"  />
									    			<div class="img-right">
										    			<span>中国最大互联网综合服务提供商  富途证券战略投资方</span>
										    			<a href="#" class="xiangqing">详情</a>
									    			</div>
									    		</li>
									    		<li class="pankou-item">
									    			<img src="../../assets/image/tip.png"  />
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
									    			<img src="../../assets/image/tip.png"  />
									    			<div class="img-right">
										    			<p><span>相关期货</span><span class="xiangqing">腾讯控股期货主连(TCHmain)</span></p>
										    			<p><span class="green">383.00↑</span><span class="little-green">+0.578(1.15%)</span></p>
									    			</div>
									    		</li>
									    		<li class="pankou-item">
									    			<img src="../../assets/image/tip.png"  />
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
									    			<img src="../../assets/image/tip.png"  />
									    			<p class="img-right">
									    				<span>支持融资</span>
									    				<span>融资保证金率</span><span>44%</span>
									    				<span class="open">立即开户</span>
									    			</p>
									    		</li>
									    	</ul>
									    </el-tab-pane>
									    <el-tab-pane label="资金" name="second">资金</el-tab-pane>
									  </el-tabs>
									</template>
					    	</div>
					    </el-tab-pane>
					    <el-tab-pane label="分析" name="second">分析</el-tab-pane>
					    <el-tab-pane label="资讯" name="third">资讯</el-tab-pane>
					    <el-tab-pane label="评论" name="fourth">评论</el-tab-pane>
					  </el-tabs>
					</template>-->
       	</div>
       </div>
     </div>
  </div>
</template>

<script>
import Head from '../../components/head.vue'
import Company from './components/company.vue'
import Pankou from './components/pankou.vue'
import Zijin from './components/zijin.vue'
import Quote from './pages/quote.vue'
export default {
  name: 'My',
  data () {
    return {
    	cur: 0,
      activeNameFirst: 'first',
      activeNameSecond: 'first',
      activeName3: 'first',
      my: '美港通-我的',
      companyCode: '',
      HKcategories: [
      		{
      			id: 1,
      			itemName: '资金',
      			classify: [
      				{
      					imgUrl: require('../../assets/image/deposit.jpg'),
      					title: '存入资金'
      				},
      				{
      					imgUrl: require('../../assets/image/draw.jpg'),
      					title: '提取资金'
      				},
      				{
      					imgUrl: require('../../assets/image/convert.jpg'),
      					title: '货币兑换'
      				},
      				{
      					imgUrl: require('../../assets/image/history.jpg'),
      					title: '历史纪录'
      				}
      			]
      		},
      		{
      			id: 2,
      			itemName: '股票',
      			classify: [
      				{
      					imgUrl: require('../../assets/image/offer.jpg'),
      					title: '认购新股'
      				},
      				{
      					imgUrl: require('../../assets/image/zhuanru.jpg'),
      					title: '转入股票'
      				},
      				{
      					imgUrl: require('../../assets/image/zhuanchu.jpg'),
      					title: '转出股票'
      				},
      				{
      					imgUrl: require('../../assets/image/shenqing.jpg'),
      					title: '申请供股'
      				},
      				{
      					imgUrl: require('../../assets/image/xuangu.jpg'),
      					title: '选股选息'
      				},
      				{
      					imgUrl: require('../../assets/image/history.jpg'),
      					title: '历史纪录'
      				}
      			]
      		},
      		{
      			id: 3,
      			itemName: '其他',
      			classify: [
      				{
      					imgUrl: require('../../assets/image/commission.jpg'),
      					title: '我的佣金'
      				},
      				{
      					imgUrl: require('../../assets/image/hangqing.jpg'),
      					title: '实时行情'
      				},
      				{
      					imgUrl: require('../../assets/image/invite.jpg'),
      					title: '邀请关系'
      				}
      			]
      		},
      ],
      AmericaStocks: [
      	{
      			id: 1,
      			itemName: '资金',
      			classify: [
      				{
      					imgUrl: require('../../assets/image/deposit.jpg'),
      					title: '存入资金'
      				},
      				{
      					imgUrl: require('../../assets/image/draw.jpg'),
      					title: '提取资金'
      				},
      				{
      					imgUrl: require('../../assets/image/convert.jpg'),
      					title: '货币兑换'
      				},
      				{
      					imgUrl: require('../../assets/image/history.jpg'),
      					title: '历史纪录'
      				}
      			]
      		},
      		{
      			id: 2,
      			itemName: '股票',
      			classify: [
      				{
      					imgUrl: require('../../assets/image/zhuanru.jpg'),
      					title: '转入股票'
      				},
      				{
      					imgUrl: require('../../assets/image/zhuanchu.jpg'),
      					title: '转出股票'
      				},
      				{
      					imgUrl: require('../../assets/image/history.jpg'),
      					title: '历史纪录'
      				}
      			]
      		},
      		{
      			id: 3,
      			itemName: '其他',
      			classify: [
      				{
      					imgUrl: require('../../assets/image/commission.jpg'),
      					title: '我的佣金'
      				},
      				{
      					imgUrl: require('../../assets/image/hangqing.jpg'),
      					title: '高级行情'
      				},
      				{
      					imgUrl: require('../../assets/image/invite.jpg'),
      					title: '邀请关系'
      				}
      			]
      		}
      ],
      others: [
      	 {
      			id: 1,
      			itemName: '资金',
      			classify: [
      				{
      					imgUrl: require('../../assets/image/deposit.jpg'),
      					title: '存入资金'
      				},
      				{
      					imgUrl: require('../../assets/image/draw.jpg'),
      					title: '提取资金'
      				},
      				{
      					imgUrl: require('../../assets/image/history.jpg'),
      					title: '历史纪录'
      				}
      			]
      	  },
      		{
      			id: 2,
      			itemName: '其他',
      			classify: [
      				{
      					imgUrl: require('../../assets/image/invite.jpg'),
      					title: '邀请关系'
      				}
      			]
      		}
      ],
      tableData: [{
          handle: '小王',
          code: '王小虎',
          name: '上海市普',
          price: 200,
          num: 10,
          cost: 200,
          money: 300,
          rate: '50%',
          win: 'sdd',
          amount: 100,
          arrive: 'dioi',
          buy: 'ddd',
          sell: 'didj',
          asure: '保证'
        }, {
          handle: '小王',
          code: '王小虎',
          name: '上海市普',
          price: 200,
          num: 10,
          cost: 200,
          money: 300,
          rate: '50%',
          win: 'sdd',
          amount: 100,
          arrive: 'dioi',
          buy: 'ddd',
          sell: 'didj',
          asure: '保证'
        }, {
          handle: '小王',
          code: '王小虎',
          name: '上海市弄',
          price: 200,
          num: 10,
          cost: 200,
          money: 300,
          rate: '50%',
          win: 'sdd',
          amount: 100,
          arrive: 'dioi'
        }, {
          price: 200,
          num: 10,
          cost: 200,
          money: 300
        }],
        stockLis: '',
        flag: true
    }
  },
  components: {
  	Head,
  	Company,
  	Pankou,
  	Zijin,
  	Quote
  },
  created () {
  	
  },
  methods: {
     handleClick(tab, event) {
//        console.log(tab, event);
        },
//   handleClickRight(tab,event) {
//   	 console.log(tab, event);
//   },
     handleClick3(tab,event) {
     	
     },
     formatter(row, column) {
        
     },
//   showTag () {
//    	this.flag = !this.flag;
//   }
		 handleNav () {
				$('.right-baojia .baojia-title').click(function () {
					 $(this).addClass('select').siblings().removeClass('select');
					 $('.baojia-item').eq($(this).index()).show().siblings().hide();
				})
			}
  },
//mounted () {
//	let stockDetail = this.$refs.handStock;
//	let lis = stockDetail.getElementsByTagName('li');
//	console.log(lis.length);
//	this.stockLis = lis.length;
//}
  	mounted () {
  		this.handleNav();
  	}
  
}
</script>

<style lang="scss" scoped>
.content {
	overflow: hidden;
	  width: 100%;
   /* display: flex;*/
    box-sizing: content-box;
  }
  .content-left {
    /*flex: 1;*/
   float:left;
   box-sizing: border-box;
   width: calc(100% - 400px);
   /*border-right: 1px #c7ddf5 solid;*/
  margin-top: 30px;
  }
  .content-right {
    float: left;
    box-sizing: border-box;
    width:400px;
    /*height: 500px!important;
    background: red;*/
  }
  .content-left .stock {
    display: flex;
    padding-top: 50px;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    justify-content:center;
  }
  .stock-item {
    margin-right: 55px;
  }
  .stock-item .stock-img {
    margin-bottom: 6px;
  }
  .stock-item .stock-title {
    margin-bottom: 8px;
    color: #2392e1;
    font-size: 16px;
  }
  .openCount {
    width: 100px;
    height: 40px;
    line-height: 40px;
    background: #1f8dff;
    color: #fff;
    text-align: center;
    margin: 40px auto 0;
    }
    .Astock {
    	position: relative;
    	width: 350px;
    	height: 220px;
    	border: 1px #ff9900 solid;
    	padding: 20px; 
    	box-sizing: border-box;
    	margin-left: 20px;
    	margin-top: 10px;
    }
    .Astock .Astock-img {
    	float: left;
    	width:60px;
    	height: 60px;
    }
    .Astock-right {
    	float: left;
    	margin-left: 10px;
    }
    .Astock-title {
    	margin-top: 5px;
    	font-family: "微软雅黑";
    	font-size: 18px;
    	color: #4a586e;
    	/*margin-left: 20px;*/
    	font-weight: 500;
    }
    .Astock-desc {
    	font-size: 14px;
    	color: #687a8d;
    	margin-top: 10px;
    	/*margin-left: 20px;*/
    }
    .Astock .openCount {
    	position: absolute;
    	width: 80px;
    	height: 30px;
    	line-height: 30px;
    	text-align: center;
    	color: #fff;
    	background: #208dfd;
    	right: 40px;
    	bottom: 20px;
    }
    /*滚动条*/
    .category {
    	width: 100%;
    	margin-top: 40px;
    	overflow-x: auto;
    	overflow-y: hidden;
    }
    .category-wrap {
    	white-space: nowrap;
    }
    .category-item {
    	display: inline-block;
    	padding-left: 20px; 
    	margin-right: 60px;
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
        
        
    .el-table th>.cell {
    	font-size: 12px!important;
    	font-family: "微软雅黑"!important;
    	font-weight: 200!important;
    }
    
    
    /*my页面的右侧css*/
   .content-right {
   	height: 100%;
    border-left: 1px #c7ddf5 solid;
    margin-top: 30px;
  }
  .content-right .myNav-head {
  	width: 100%;
  	display: flex;
  	height: 40px;
  	line-height: 40px;
  	border-bottom: 1px #c7ddf5 solid;
  }
  .content-right .myNav-content {
  	padding-top: 10px;
		/*background:#FC0;*/
    width:100%;
    overflow:auto;
    top:230px;
    position:absolute;
   /*position: fixed;*/
    z-index:10;
    bottom:0px;
  }
  .myNav-head .myNav-item {
  	flex: 1;
  	text-align: center;
  }
  .myNav-item.router-link-exact-active {
  	color: #ff9105;
  }
  .company .wrap {
  	padding: 0px 5px 0px;
  }
  .company-name {
  	position: relative;
  	padding-bottom: 10px;
  }
  .company .tencent-stock-code {
  	font-family: "微软雅黑";
  	font-size: 20px;
  	font-weight: bold;
  	color: #2a3644;
  	display: inline-block;
  }
  .company .tencent-stock-company {
  	font-family: "微软雅黑";
  	font-size: 20px;
  	font-weight: 500;
  	color: #2a3644;
  	display: inline-block;
  	margin-left: 5px;
  }
   .company-name .card {
  	position: absolute;
  	width: 30px;
  	height: 30px;
  	right: 10px;
  	bottom: 0px;
  }
  .trend {
  	position: relative;
  	height: 30px;
  	line-height: 30px;
  }
  .trend .number {
  	
  }
  .trend .trend-number {
  	font-family: "微软雅黑";
  	font-size: 20px;
  	font-weight: bold;
  	color: #189f00;
  }
  .trend .trend-img {
  	width: 14px;
  	height: 18px;
  	margin-top: 5px;
  }
  .trend .float {
  	font-family: "微软雅黑";
  	color: #189f00;
  	font-weight: bold;
  	font-size: 14px;
  }
  .trend .close {
  	position: absolute;
  	right: 10px;
  	bottom: -5px;
  	font-family: "微软雅黑";
  	color: #66798d;
  }
  .mark {
  	overflow: hidden;
  }
  .mark-left {
    margin-top: 3px;
    float: left;
  }
  .mark-left img {
  	float: left;
  	width: 20px;
  	height: 20px;
  	margin-left: 2px;
  }
  .mark-left .gangjiaosuo {
  	
  }
  .mark-left .high-market-quotation {
  	margin-top: -1px;
  }
  .mark-left .hugangtong {
  	
  }
  .mark-left .support-financial {
  	margin-top: 1px;
  }
  .mark-left .hengzhi {
  	
  }
  .mark-left .zixuangu {
  	
  }
  .mark-right {
  	float: right;
  	margin-right: 10px;
  }
  .mark-right .notice {
  	padding-top: 3px;
  }
  .mark-right .exchange {
  	position: relative;
  	top: 4px;
  	display: inline-block;
  	width: 50px;
  	height: 20px;
  	line-height: 20px;
  	text-align: center;
  	background: #ff9100;
  	color: #443027;
  }
  .stock-details {
  	margin-top: 8px;
  }
  .stock-details ul {
  	width: 100%;
  	height: 30px;
  	overflow: visible;
  }
  .stockActive {
  	overflow: hidden!important;
  }
  .stock-details-item {
  	font-family: "微软雅黑";
  	float: left;
  	width: calc(33.3333333%);
  	margin-bottom: 5px;
  }
  .stock-details-item span {
  	padding-left: 5px;
  	font-weight: bold;
  }
  
  /*三角箭头*/
 .hand-arrow {
 	text-align: center;
 }
 .stretch {
 	margin-top: 10px;
 }
 .stretch-show {
 	display: inline-block;
 	font-size: 18px;
 	color: #666;
 }
 .top-arrow {
 width: 0; 
 height: 0; 
 border-left: 8px solid transparent; /* left arrow slant */
 border-right: 8px solid transparent; /* right arrow slant */
 border-bottom: 12px solid #7090b0; /* bottom, add background color here */
 font-size: 0;
 line-height: 0;
}
/* create an arrow that points down */
.down-arrow {
 width: 0; 
 height: 0; 
 border-left: 8px solid transparent;
 border-right: 8px solid transparent;
 border-top: 12px solid #7090b0;
 font-size: 0;
 line-height: 0;
}


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
.myNav {
	min-width: 400px;
}
.myNav-wrap {
	/*position: absolute;*/
	 background:#eee;
    width:400px;
    position:fixed;
    z-index:5;
    top:29px;
    height: auto;
}
.pankou_zijin_active {
	color:#ff9105;
}
.pankou-zijin-tilte {
	display: flex;
	width: 100%;
	height: 40px;
	line-height: 40px;
	border-top: 1px #c7ddf5 solid!important;
  border-bottom: 1px #c7ddf5 solid!important;
}
.pankou-zijin-tilte li {
	flex: 1;
	text-align: center;
	font-family: "微软雅黑";
	font-size: 12px;
}


/*右侧新修样式*/
.right-baojia {
 	display: flex;
 	width: 400px;
 	height: 30px;
 	line-height: 30px;
 	padding: 0 20px;
 	box-sizing:border-box;
 	border-bottom: 1px #c7ddf5 solid;
 }
 .baojia-title {
 	flex: 1;
 	font-family: "微软雅黑";
 	font-size: 12px;
 	text-align: center;
 }
 .baojia-title.select {
 	color: orange;
 }
 .baojia-item {
 	display: none;
 }
 .baojia-item.show {
 	display: block;
 }
</style>

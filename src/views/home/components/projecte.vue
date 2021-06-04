<template>
  <div class="projecte">
    <projecteBasic>
      <template #name>
        <span>智趣启辰小程序</span>
      </template>
      <template #desc>
			此项目包括聊天、论坛、限时秒杀、拼团、砍价、集赞、刮刮乐、商城等功能、主要是启辰系列车的营销和推广
	  </template>
      <template #link>
        智趣启辰
      </template>
      <!-- <template #difficulty>广告SDK调用，版本兼容，iOS和安卓的兼容</template> -->
      <template #otherName1>项目难点：</template>
      <template #otherContent1>
        <p>1.和日产开发人员数据对接沟通联调，大量机型测试，兼容</p>
        <p>2.项目按模块分包</p>
		<p>3.各类型海报图绘制</p>
      </template>
      <template #dec>小程序，canvas</template>
    </projecteBasic>

    <projecteBasic>
      <template #name>新优势小程序</template>
      <template #link>
		  新优势
      </template>
      <template #desc>
		  此项目主要用于内部员工对企业文化的测试与熟悉，此项目包括实时答题，人人pk,人与机器人pk,挑战模式（时间限制，错一题即退出），
		  学习模式，答题即可获得积分，通过积分可以培养树苗，积分越高树苗的形式和大小即不一样
	  </template>
      <template #difficulty>
      封装树苗组件，即兼容树苗在不同等级，选择的树苗样式不一样（位置和场景不一样），
	  升级时的动效样式也会不一样，保存的海报图样式也不一样，
	  实时答题掉线情况的处理，以及未结束答题断线重连的处理
	  </template>
      <template #dec>小程序，canvas</template>
      <template #github>
		  <a href="https://github.com/qq377677616/wc20200528-xinyoushidati.git" class="projecte-link">https://github.com/qq377677616/wc20200528-xinyoushidati.git</a>
      </template>
    </projecteBasic>

    <projecteBasic>
      <template #name>深圳网晨官网</template>
      <template #link>
        <a href="https://www.szflyh5.com/" class="projecte-link">https://www.szflyh5.com/</a>
      </template>
      <template #desc>主要是给商务人员接单，以及公司文化展示，此项目包括对现有作品的展示（小程序，pc网站，H5小游戏），以及现有项目资源配置（更换素材）
					  在线客服，	
	  </template>
      <template #dec>vue、element、vuex、es6、scss</template>
      <template #github>
      </template>
    </projecteBasic>

    <projecteBasic>
      <template #name>德美医疗官网</template>
     <!-- <template #link>
        <a href="https://www.npmjs.com/package/v-poppers" class="projecte-link">https://www.npmjs.com/package/v-poppers</a>
      </template> -->
      <template #desc>德美医疗官网主要是对德美文化，历史进行展示，医师视频播放，医学器材的展示，以及医师直播等功能的实现</template>
	  <template #difficulty>
		 多平台登陆的处理（微信登陆，手机号密码登陆，微信绑定手机号）
	  </template>
	  <template #dec>vue,webpack,es6。</template>
      <template #link>
        <a href="https://game.vrupup.com/resources/web/yls/demei/index.html" class="projecte-link">https://game.vrupup.com/resources/web/yls/demei/index.html</a>
      </template>
    </projecteBasic>

    <projecteBasic>
      <template #name>国防科大内部项目</template>
      <template #link>
        <!-- <a href="https://m.chehaha.net/cicp/" class="projecte-link">https://m.chehaha.net/cicp/</a>（微信链接， 需在微信里打开） -->
      </template>
      <template #desc>此项目分为:服务大厅、中控平台、指挥中心、数据平台、等四个系统，和自定义可视化页面小工具</template>
      <template #dec>vue，vuex， axios，vue-router，Ant Design</template>
      <template #otherName>负责内容：</template>
      <template #otherContent>
        <p>1.整个项目目录搭建，项目结构规划</p>
        <p>2.处理各个浏览器兼容</p>
		<p>2.自定义页面小工具的编写</p>
      </template>
      <template #otherName1>项目难点：</template>
      <template #otherContent1>
		测试联调比较困难（内网登陆），对接各种硬件（摄像头，智能教室，智能黑板等），自定义小工具操作优化（图标的摆放自动校准对齐）
		canvas网格计算，线条绘制
	  </template>
    </projecteBasic>

    <projecteBasic>
      <template #name>和平精英活动页面</template>
      <template #desc>此项目是对和平精英活动的制作，主要是回归老玩家奖励的领取，以及和平精英的宣传广告</template>
      <template #dec>vue，vuex axios，vue-router，vant，scss。</template>
      <template #difficulty>对页面的动画控制，视频进度控制，以及有些机型的控制视频的时间差不一样</template>
    </projecteBasic>

  </div>
</template>

<script>
import individualWrap from './individual/individual-wrap'
import individualItem from './individual/individual-item'

import projecteBasic from './projecte-basic'
export default {
  components: {
    individualWrap,
    individualItem,
    projecteBasic
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss">
  .projecte {
    .projecte-name-work {
      font-weight: 400;
      color: #999d9c;
      font-size: 13px;
      margin-left: 20px;
      vertical-align: top;
    }
  }
</style>
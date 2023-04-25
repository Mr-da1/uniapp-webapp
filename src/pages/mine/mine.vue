<template>
  <view class="mine-page">
      <view class="user-info-wrapper">
        <view class="user-info-avatar">
           <view class="user-avatar">
               <u-avatar shape="circle" :src='userAvatarSrc'></u-avatar>
           </view>
      	   <text class="user-name">{{userName}}</text>
           <text class="user-phone">{{userPhone}}</text>
      	</view>
        <view  class="user-social-wrapper">
            <view  v-for="item in  socialList" :key="item.id" class="social-tab">
                <text class="iconfont" :class="item.icon" ></text>
            </view>
        </view>
      </view>
      <view class="service-order-wrapper">
          <view class="service-order-title">
            <text class="title">我的服务单</text>
            <text class="iconfont icon-tianjia1"></text>
          </view>
          <service-order></service-order>
      </view>
      <view class="action-order-wrapper">
          <action-order></action-order>
      </view>
  </view>

  <bottom-tabbar :active-name="'mine'"></bottom-tabbar>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
  import BottomTabbar from '@/components/bottom-tabbar/bottom-tabbar.vue';
  import ServiceOrder from '@/components/service-order/service-order.vue';
  import ActionOrder from '@/components/action-order/action-order.vue';

  const title = ref('')
  const userAvatarSrc = ref('http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg')
  const userName = ref('用户名称')
  const userPhone = ref('***********')
  const socialList = [
      {id:1,icon:'icon-logo-weibo'},
      {id:2,icon:'icon-tuite'},
      {id:3,icon:'icon-InstagramFilled'}
  ]
  onLoad((options) => {
    console.log('page query', options)
  })

  // 页面切换到前台时
  onShow(() => {
    title.value = 'hello uni-app-vue3 setup'
  })

  // 页面切换到后台时
  onHide(() => {
    title.value = 'see you'
  })

  const count = ref(0)
  const handleClick = () => count.value++
</script>
<style scoped lang="scss">
   .mine-page{
       background:#f5f5f5;
       padding:0 20px;
       .user-info-wrapper{
           width:678rpx;
           height:338rpx;
           border-radius:28rpx;
           background-color:rgba(190,190,190,1);
           margin: auto;
           text-align:center;
           .user-info-avatar{
               display:flex;
               justify-content: center;
               align-items: center;
               flex-direction: column;
               .user-avatar{
                   margin:34rpx 0 16rpx 0;
               }
               .user-name{
                   font-size:36rpx;
                   font-family:PingFangSC-bold;
               }
               .user-phone{
                   font-size:28rpx;
                   font-family:PingFangSC-medium;
                   margin:20rpx 0;
               }
           }
           .user-social-wrapper{
               display:flex;
               flex-direction:row;
               justify-content: center;
               align-items: center;
               .social-tab{
                   margin: 0  14rpx;
               }
           }
       }
       .service-order-wrapper{
           width:668rpx;
           height:228rpx;
           background:#fff;
           border-radius:22rpx;
           margin:30rpx auto;
           .service-order-title{
               display:flex;
               justify-content:space-between;
               align-items:center;
               height:96rpx;
               line-height:96rpx;
               padding:0  32rpx;
               .title{
                   color: rgba(16, 16, 16, 1);
                   font-size:28rpx;
                   font-family:PingFangSC-medium;
               }
           }
           ::v-deep .u-border-top{
               // border:none;
           }
           ::v-deep .u-tabbar-item{
               width:21%;
           }
       }
       .action-order-wrapper{
         ::v-deep .u-cell{
            width:668rpx;
            height:100rpx;
            line-height:100rpx;
            border-radius:22rpx;
            background-color: rgba(255, 255, 255, 1);
            margin-bottom:28rpx;
         }
         ::v-deep .u-cell_body{
             padding:14px 15px;
         }
       }
   }


</style>

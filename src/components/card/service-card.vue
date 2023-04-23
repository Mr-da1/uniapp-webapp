<template>
  <view class="card-container">
    <view class="property-list">
        <view class="card" v-for="(item, index) in props.serviceOrderList">
          <view class="floor-status">
            <text class="floor-header">{{item.statusTitle}}</text>
            <text class="floor-status-code" :class="`${item.status}`">{{item.statusDesc}}</text>
          </view>
          <view class="floor-detail">
            <view class="floor-detail-left">
              <text class="iconfont" :class="[item.iconType === 'office' ? 'icon-ic_project' : 'icon-zhuzhai']"></text>
              <text class="floor-type">{{item.iconName}}</text>
              <text class="title">{{item.villageName}}</text>
            </view>
            <text class="floor-detail-right">{{item.floor}}</text>
          </view>
          <view class="repair-type">
            <text>报修类型：{{ item.repairType }}</text>
          </view>
          <view class="order-number">
            <text>服务单号： {{item.orderNumber}}</text>
            <text>复制</text>
          </view>
        </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import { ref, computed, defineProps, withDefaults, watch, defineEmits } from "vue";

import type { ServiceOrderList } from "@/types/service-list.types";

const props = withDefaults(defineProps<{
  serviceOrderList: ServiceOrderList[];
}>(), {
  serviceOrderList: ()=>[],
});

const title = ref('')


const checkTab = (() => {
	
})
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
</script>
<style lang="scss" scoped>
  .card-container {
	  .property-list {
      width: 100%;
      border-radius: 10rpx;
      .card {
        background-color: #fff;
        padding: 30rpx 20rpx 20rpx 20rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        // color: $uni-text-color;
        margin-bottom: 20rpx;
        color: #333;
        .floor-status, .floor-detail {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20rpx;
        }
        .floor-status {
          .floor-header {
            font-size: 36rpx;
            font-weight: 600;
            color: #333;
          }
          .floor-status-code {
            font-size: 32rpx;
            color: $uni-text-color;
            font-weight: 600;
          }
          .floor-status-code.WAIT {
            color: $theme-color;
          }
          .floor-status-code.PEDDING {
            color: #1618b5FF;
          }
          .floor-status-code.EVALUATING {
            color: rosybrown;
          }
        }
        .floor-detail-left {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: flex-start;
          .iconfont {
            font-size: 40rpx;
            margin-right: 10rpx;
            border-radius: 50%;
            padding: 4rpx 10rpx;
            background-color: $uni-bg-color-hover;
          }
          .floor-type {
            padding: 4rpx 10rpx;
            font-size: 24rpx;
            background-color: $theme-color;
            color: #fff;
            margin-right: 10rpx;
            flex-shrink: 0;
          }
          .title {
            font-size: 28rpx;
            max-width: 340rpx;
            @include text-ellipsis(1);
          }
        }
        .floor-detail-right {
          font-size: 28rpx;
          max-width: 150rpx;
          @include text-ellipsis(1);
        }
        .repair-type, .order-number{
          width: 100%;
          font-size: 28rpx;
          color: $uni-text-color;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20rpx;
        }
        .order-number {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
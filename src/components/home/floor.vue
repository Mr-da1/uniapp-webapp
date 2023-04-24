<template>
  <view class="home-list">
    <u-swiper
        :list="swiperList"
        indicator
        indicatorMode="line"
        circular
    ></u-swiper>
    <div class="add-property-card">
      <text class="title">添加物业后可享受专属服务</text>
      <text class="add-btn">添加物业</text>
    </div>
  </view>
</template>
<script setup lang="ts">
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import { ref, computed, defineProps, withDefaults, watch, defineEmits } from "vue";

const swiperList = ref([
  'https://cdn.uviewui.com/uview/swiper/swiper3.png',
  'https://cdn.uviewui.com/uview/swiper/swiper2.png',
  'https://cdn.uviewui.com/uview/swiper/swiper1.png',
])

const emits = defineEmits<{
  (e: "addProperty"): void;
}>();

const addProperty = (() => {
	emits('addProperty')
})

onLoad((options) => {
  console.log('page query', options)
})

// 页面切换到前台时
onShow(() => {
})

// 页面切换到后台时
onHide(() => {
})
</script>
<style lang="scss" scoped>
.home-list {
  background-color: $uni-bg-color-grey;
  padding: 0 32rpx;
  .add-property-card {
    margin-top: 66rpx;
    height: 136rpx;
    // width: 100%;
    background-color: #CECECE;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28rpx;
    border-radius: 26rpx;
    .title {
      margin-left: 30rpx;
      font-size: 28rpx;
      color: $uni-text-color;
    }
    .add-btn {
      width: 214rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      color: #fff;
      font-size: 28rpx;
      background-color: $theme-color;
      border-radius: 10rpx;
    }
  }
}
</style>
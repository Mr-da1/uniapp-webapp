<template>
  <view class="add-property-form">
     
  </view>
</template>
<script setup lang="ts">
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import { ref, computed, defineProps, withDefaults, watch, defineEmits } from "vue";

const emits = defineEmits<{
  // (e: "addProperty"): void;
}>();

const addProperty = (() => {
	// emits('addProperty')
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
.add-property {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200rpx;
  .icon-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .iconfont {
      font-size: 120rpx;
      color: $uni-text-color;
    }
    .desc {
      color: $uni-text-color-grey;
      font-size: 28rpx;
      margin-top: 20rpx;
    }
  }
  .add-btn {
    margin-top: 200rpx;
    width: 80%;
    height: 80rpx;
    background-color: $theme-color;
    color: #fff;
    font-size: 36rpx;
    border-radius: 16rpx;
    line-height: 88rpx;
    text-align: center;
  }
}
</style>
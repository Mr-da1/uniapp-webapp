<template>
  <view class="content" v-if="!checkPass">
	<text class="id-card iconfont icon-shenfenxinxi"></text>
	<text class="title">您好，请输入身份码</text>
	<u-code-input v-model="idCardCode" @finish="finish" :space="0" :font-size="20" size="45">
	</u-code-input>
	<text class="title-second">如何获得身份码？</text>
	<view class="btn" @click="sumbit">
		提交认证
	</view>
  </view>
  <view class="check" v-if="checkPass">
	<text class="success iconfont icon-chenggong"></text>
  	<text class="title">认证提交成功</text>
	<text class="title-second">请等待审核</text>
  </view>
  <u-modal 
    :show="dialogVisble" 
    :title="dialogTile" 
    :width="'500rpx'"
    :closeOnClickOverlay="true" 
    :zoom="true" 
    :showConfirmButton="false"
    @close="ok">
    <view class="dialog-btn">
	  <text class="content-title">认证通过后享受专属服务</text>
	  <view class="ok" @click="ok">好的</view>
    </view>
  </u-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const idCardCode = ref();
const dialogTile = ref<string>('请先进行身份认证');
const dialogContent = ref<string>('认证通过后享受专属服务');
const dialogVisble = ref<boolean>(false)
const checkPass = ref<boolean>(false);

const finish = ((e: string) => {
  idCardCode.value = e;
})
const sumbit = (() => {
  dialogVisble.value = false;
  if (!idCardCode.value) {
	dialogVisble.value = true;
	return;
  }
  checkPass.value = true;
})
const ok = (() => {
  dialogVisble.value = false;
})
</script>

<style lang="scss">
.content {
  margin-top: 100rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:$uni-text-color;
  .id-card {
    font-size: 100rpx;
    margin-bottom: 20rpx;
	color: $theme-color;
  }
  .title {
	margin-bottom: 60rpx;
	font-size: 36rpx;
  }
  .title-second {
    color:$uni-text-color-grey;
    font-size: 28rpx;
    margin-top: 20rpx;
  }
  .btn {
	width: 80%;
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 80rpx 0;
    background-color: $theme-color;
    color: #fff;
    font-size: 24rpx;
	border-radius: 20rpx;
  }
}
.check {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150rpx;
  .success {
    font-size: 100rpx;
	color: $theme-color;
  }
  .title {
  	margin-top: 40rpx;
  	font-size: 36rpx;
  }
  .title-second {
    color:$uni-text-color-grey;
    font-size: 28rpx;
    margin-top: 20rpx;
  }
}
.dialog-btn {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .content-title {
	font-size: 28rpx;
	color: $uni-text-color-grey;
	margin-top: 20rpx;
  }
  .ok {
	  color: $theme-color;
	  font-size: 34rpx;
	  margin-top: 60rpx;
	  text-align: center;
  }
}
</style>

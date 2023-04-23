<template>
  <view :class="'bottom-bar'">
    <u-tabbar
    	:value="props.activeName"
    	:fixed="true"
    	:placeholder="true"
    	:safeAreaInsetBottom="true"
		activeColor="#4cd964"
    >
    	<u-tabbar-item name="index" text="物业" icon="home" @click="click1" ></u-tabbar-item>
    	<u-tabbar-item name="service-list" text="服务单" icon="file-text" @click="click1" ></u-tabbar-item>
    	<u-tabbar-item name="community" text="社区" icon="eye" @click="click1" ></u-tabbar-item>
    	<u-tabbar-item name="mine" text="我的" icon="account" @click="click1" ></u-tabbar-item>
    </u-tabbar>
  </view>
</template>
<script setup lang="ts">
import { defineProps, withDefaults, watch, defineEmits } from "vue";

const props = withDefaults(defineProps<{
  activeName: string;
}>(), {
  activeName: 'index',
});

const click1 = ((e: string) => {
  if (props.activeName === e) return;
  uni.redirectTo({
	url: `/pages/${e}/${e}`
  });
})
</script>
<style scoped lang="scss">

</style>
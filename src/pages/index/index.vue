<template>
  <account-login v-if="isLogin" @sumbit="sumbit"></account-login>
  <view v-if="!isLogin">
    <AddProperty v-if="hasPropertyList" @addProperty="addProperty"></AddProperty>
    <floor v-if="!hasPropertyList"></floor>
  </view>
  <bottom-tabbar :active-name="'index'"></bottom-tabbar>
</template>

<script setup lang="ts">
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BottomTabbar from '@/components/bottom-tabbar/bottom-tabbar.vue';
import AccountLogin from '@/components/account-login.vue';
import AddProperty from '@/components/home/add-property.vue';
import addPropertyForm from '@/components/home/add-property-form.vue';
import floor from '@/components/home/floor.vue';

const isLogin = ref<boolean>(true);
const hasPropertyList = ref<boolean>(true);

function sumbit() {
  setTimeout(() => {
    isLogin.value = false;
  }, 1000);
}
const addProperty = (async() => {
  uni.redirectTo({
	  url: `/pages/add-property-form/add-property-form`
  });
})

onLoad((options) => {
  console.log('page query', options)
  if (options?.flag) {
    hasPropertyList.value = false;
    isLogin.value = false;
  }
})

// 页面切换到前台时
onShow(() => {
})

// 页面切换到后台时
onHide(() => {
})
</script>

<style lang="scss" scoped>

</style>

<template>
  <account-login v-if="isLogin"></account-login>
  <view v-if="!isLogin">
    <AddProperty v-if="hasPropertyList" @addProperty="addProperty"></AddProperty>
    <floor v-if="!hasPropertyList"></floor>
  </view>
  <bottom-tabbar :active-name="'index'"></bottom-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BottomTabbar from '@/components/bottom-tabbar/bottom-tabbar.vue';
import AccountLogin from '@/components/account-login.vue';
import AddProperty from '@/components/home/add-property.vue';
import floor from '@/components/home/floor.vue';

const isLogin = ref<boolean>(false);
const hasPropertyList = ref<boolean>(true);

const addProperty = (async() => {
  hasPropertyList.value = false;
})
</script>

<style lang="scss" scoped>

</style>

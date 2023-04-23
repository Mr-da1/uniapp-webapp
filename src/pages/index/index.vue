<template>
  <account-login></account-login>
  <bottom-tabbar :active-name="'index'"></bottom-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BottomTabbar from '@/components/bottom-tabbar/bottom-tabbar.vue';
import AccountLogin from '@/components/account-login.vue';

</script>

<style lang="scss" scoped>

</style>

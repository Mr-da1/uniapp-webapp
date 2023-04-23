<template>
  <bottom-tabbar :active-name="'community'"></bottom-tabbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import BottomTabbar from '@/components/bottom-tabbar/bottom-tabbar.vue';

const title = ref('');

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
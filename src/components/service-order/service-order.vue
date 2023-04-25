<template>
  <view >
    <u-tabbar
  	  :value="value1"
  	  @change="change1"
  	  :fixed="false"
  	  :placeholder="false"
  	  :safeAreaInsetBottom="false"
      :border="false"
    >
  	<u-tabbar-item v-for="item in serviceOrderList" :key="item.id" :text="item.text"  class="iconfont" :class="item.icon" @click="click1" ></u-tabbar-item>
  </u-tabbar>
  </view>
</template>
<script setup lang="ts">
import { defineProps, withDefaults, watch, defineEmits } from "vue";


const serviceOrderList = [
    {id:1,text:'全部',icon:'icon-quanbu',num:null},
    {id:2,text:'待处理',icon:'icon-icon_xinyong_xianxing_jijin-234',num:null},
    {id:3,text:'处理中',icon:'icon-ic_project',num:null},
    {id:4,text:'待评价',icon:'icon-daipingjia',num:null},
    {id:5,text:'已完成',icon:'icon-chenggong',num:null},
]
const props = withDefaults(defineProps<{
  activeName: string;
}>(), {
  activeName: 'index',
});

const click1 = ((e: string) => {

})
</script>
<style scoped lang="scss">

</style>

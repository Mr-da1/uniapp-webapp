<template>
  <u-sticky>
    <view class="service">
        <u-tabs :list="tabList" @click="checkTab" :scrollable="false" lineWidth="40"></u-tabs>
    </view>
  </u-sticky>
  <view class="content">
    <u-loading-icon v-if="loading"></u-loading-icon>
    <service-card v-else :service-order-list="serviceOrderList"></service-card>
  </view>
  <bottom-tabbar :active-name="'service-list'"></bottom-tabbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import bottomTabbar from '@/components/bottom-tabbar/bottom-tabbar.vue';
import ServiceCard from '@/components/card/service-card.vue';

import type { ServiceOrderList } from "@/types/service-list.types";

const title = ref('')
const tabList = ref([
{ name: '全部', type: 'ALL'},
{ name: '待处理', type: 'WAIT'},
{ name: '处理中', type: 'PEDDING'},
{ name: '待评价', type: 'EVALUATING'},
{ name: '已完成', type: 'OVER'},
])
const loading = ref<boolean>(false);
const serviceOrderList = ref<ServiceOrderList[]>([
  { 
    statusTitle: '维修',
    statusDesc: '待处理',
    status: 'WAIT',
    iconType: 'office',
    iconName: '写字楼',
    villageName: '静赏花城二期',
    floor: '12栋103室',
    repairType: '出租',
    orderNumber: '12323232232332'
  },
  { 
    statusTitle: '缴费',
    statusDesc: '处理中',
    status: 'PEDDING',
    iconType: 'residence',
    iconName: '住宅',
    villageName: '汤臣一平三期',
    floor: '18栋303室',
    repairType: '出租',
    orderNumber: '12923233223456'
  },
  { 
    statusTitle: '出租',
    statusDesc: '待评价',
    status: 'EVALUATING',
    iconType: 'residence',
    iconName: '住宅',
    villageName: '环球中心E5',
    floor: '22栋903室',
    repairType: '出租',
    orderNumber: '15623233223456'
  },
  { 
    statusTitle: '清洁',
    statusDesc: '已完成',
    status: 'OVER',
    iconType: 'residence',
    iconName: '住宅',
    villageName: '测试环球中心E5',
    floor: '18栋903室',
    repairType: '出租',
    orderNumber: '15623233223456'
  },
]);

const checkTab = ((item: any) => {
  const { type } = item;
	loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 300);
  const arr = [
    { 
      statusTitle: '维修',
      statusDesc: '待处理',
      status: 'WAIT',
      iconType: 'office',
      iconName: '写字楼',
      villageName: '静赏花城二期',
      floor: '12栋103室',
      repairType: '出租',
      orderNumber: '12323232232332'
    },
    { 
      statusTitle: '缴费',
      statusDesc: '处理中',
      status: 'PEDDING',
      iconType: 'residence',
      iconName: '住宅',
      villageName: '汤臣一平三期',
      floor: '18栋303室',
      repairType: '出租',
      orderNumber: '12923233223456'
    },
    { 
      statusTitle: '出租',
      statusDesc: '待评价',
      status: 'EVALUATING',
      iconType: 'residence',
      iconName: '住宅',
      villageName: '环球中心E5',
      floor: '22栋903室',
      repairType: '出租',
      orderNumber: '15623233223456'
    },
    { 
      statusTitle: '清洁',
      statusDesc: '已完成',
      status: 'OVER',
      iconType: 'residence',
      iconName: '住宅',
      villageName: '测试环球中心E5',
      floor: '18栋903室',
      repairType: '出租',
      orderNumber: '15623233223456'
    },
  ]
  serviceOrderList.value = arr;
  if (type === "ALL") {
    serviceOrderList.value = arr;
    return;
  }
  serviceOrderList.value = serviceOrderList.value?.filter((opt: ServiceOrderList) => opt.status === type);
})
onLoad((options) => {
  console.log('page query', options)
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 500);
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
<style lang="scss" scoped>
.service {
  background-color: #fff;
}
  .content {
	  background-color: $uni-bg-color-grey;
	  height: 1300rpx;
    padding: 2rem 1.2rem;
  }
</style>
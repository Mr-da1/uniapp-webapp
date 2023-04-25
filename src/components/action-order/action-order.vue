<template>
    <u-cell-group :border="false">
      <u-cell
          class="action-cell"
          v-for="item in actionCellList"
          :key="item.id"
          :title="item.text"
          isLink
          :url="item.link"
          :border="false"
          style="background:#fff"
      ></u-cell>
    </u-cell-group>
</template>
<script setup lang="ts">
  
   const actionCellList = [
       {id:'message-center',text:'消息中心',link:'/pages/mine/message-center/message-center'},
       {id:'social-account',text:'社交账号',link:'/pages/mine/social-account/social-account'},
       {id:'setting',text:'设置',link:''},
       {id:'customer-service',text:'联系客服',link:''},
   ]
</script>
<style scoped lang="scss">
::v-deep .u-cell{
   width:668rpx;
   height:100rpx;
   line-height:100rpx;
   border-radius:22rpx;
   background-color: rgba(255, 255, 255, 1);
   margin-bottom:28rpx;
}
</style>

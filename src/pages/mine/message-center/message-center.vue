<template>
    <view class="message-center-page">
        <view v-for="item in messageAccountList" :key="item.id" class="message-item">
            <view class="message-center-info">
                <view class="message-icon">
                    <text class="iconfont" :class="item.icon"></text>
                </view>
                <view class="message-desc">
                    <text>{{item.text}}</text>
                    <view class="message-desc-info">
                        {{item.message}}
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
   const messageAccountList = [
       {id:'weibo',text:'系统消息',icon:'icon-xitongxiaoxi',link:'',message:'尊敬的用户，我们将于2023年5月4日晚进行系统更新,我看看超出了会不会溢出隐藏啊啊啊啊啊啊...'},
       {id:'twitter',text:'推送消息',icon:'icon-xitongxiaoxi',link:'',message:'尊敬的用户，我们将于2023年5月4日晚进行系统更新...'},
   ]
</script>
<style scoped lang="scss">
.message-center-page{
    .message-item{
        width:668rpx;
        height:164rpx;
        border-radius:22rpx;
        background-color:#f5f5f5;
        margin:36rpx auto 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 18rpx 0 30rpx;
        .message-center-info{
            display: flex;
            align-items: center;
            .message-icon{
                .iconfont{
                    font-size: 44rpx;
                }
            }
            .message-desc{
                color: rgba(16, 16, 16, 1);
                font-size: 28rpx;
                font-family: PingFangSC-medium;
                margin-left:30rpx;
              .message-desc-info{
                 color: rgba(154, 154, 154, 1);
                 font-size: 24rpx;
                 font-family: PingFangSC-medium;
                 width:592rpx;
                 white-space: nowrap;
                 overflow: hidden;
                 text-overflow:ellipsis;
              }
            }
        }
    }
}
</style>

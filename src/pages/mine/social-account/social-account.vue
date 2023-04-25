<template>
    <view class="social-account-page">
        <view v-for="item in socialAccountList" :key="item.id" class="social-item">
            <view class="social-account-info">
                <view class="social-icon">
                    <text class="iconfont" :class="item.icon"></text>
                </view>
                <view class="social-desc">
                    <text>{{item.text}}</text>
                    <view class="social-desc-info">
                        <text>已绑定：</text>
                        <text>会飞的鱼</text>
                        <text class="iconfont icon-tianjia1"></text>
                    </view>
                </view>
            </view>
            <view class="action-btn">
              <text>解绑</text>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">
   const socialAccountList = [
       {id:'weibo',text:'微博',icon:'icon-daipingjia',link:''},
       {id:'twitter',text:'推特',icon:'icon-daipingjia',link:''},
       {id:'instagram',text:'Instagram',icon:'icon-daipingjia',link:''},
   ]
</script>
<style scoped lang="scss">
.social-account-page{
    .social-item{
        width:668rpx;
        height:164rpx;
        border-radius:22rpx;
        background-color:#f5f5f5;
        margin:36rpx auto 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 18rpx 0 30rpx;
        .social-account-info{
            display: flex;
            align-items: center;
            .social-icon{
                .iconfont{
                    font-size: 44rpx;
                }
            }
            .social-desc{
                color: rgba(16, 16, 16, 1);
                font-size: 28rpx;
                font-family: PingFangSC-medium;
                margin-left:30rpx;
              .social-desc-info{
                 color: rgba(154, 154, 154, 1);
                 font-size: 24rpx;
                 font-family: PingFangSC-medium;
              }
            }
        }
        .action-btn{
            width:144rpx;
            height: 68rpx;
            line-height:68rpx;
            border-radius: 10rpx;
            background-color: rgba(51, 51, 51, 1);
            color:#fff;
            font-size: 28rpx;
            text-align: center;
            font-family:SourceHanSansSC-regular;;
        }
    }
}
</style>

<template>
  <view class="add-property-form">
    <view class="form">
      <u-form
        labelPosition="left"
        :model="formData"
        ref="uForm">
        <u-form-item prop="userInfo.name" borderBottom right="测试啊">
          <u-input v-model="formData.name" placeholder="请输入物业名称" maxlength="30" count clearable border="none">
          </u-input>
          <text class="right-title">{{formData.name.length}}/30</text>
        </u-form-item>
        <u-form-item	prop="area" borderBottom>
          <u-input v-model="formData.area" placeholder="请输入面积" clearable border="none"></u-input>
          <text class="right-title">平米</text>
        </u-form-item>
        <u-form-item	prop="floorCode" borderBottom>
          <u-input v-model="formData.floorCode" placeholder="请输入楼栋门号" clearable border="none"></u-input>
        </u-form-item>
        <u-form-item borderBottom>
          <view class="type">
            <text class="ccc">请选择类型</text>
            <view class="box">
              <text :class="{'active': item.isActive}" v-for="item in typeList" :key="item.code" @click="checkType(item)">{{item.name}}</text>
            </view>
          </view>
        </u-form-item>
        <u-form-item prop="place" borderBottom @click="showSex = true;">
          <u-input
            v-model="formData.place"
            disabled
            disabledColor="#ffffff"
            placeholder="请选择地区"
            border="none"
          ></u-input>
          <template #right>
            <u-icon
              name="arrow-right"
            ></u-icon>
          </template>
        </u-form-item>
        <u-form-item	prop="textarea" border="none">
          <u-textarea v-model="formData.textarea" maxlength="150" placeholder="请添加描述信息"  count border="none"></u-textarea>
        </u-form-item>
        <u-form-item border="none">
          <view class="type">
            <text class="ccc">添加图片</text>
            <view class="upload-img">
              <u-upload
                :fileList="fileList"
                @afterRead="afterRead"
                @delete="deletePic"
                name="1"
                multiple
                :maxCount="10"
              ></u-upload>
            </view>
          </view>
        </u-form-item>
      </u-form>
    </view>
    <view class="sumbit-btn" @click="sumbit">确认添加</view>
  </view>
  <u-action-sheet
    :show="showSex"
    :actions="actions"
    title="请选择地区"
    description=""
    @close="showSex = false"
    @select="sexSelect"
  >
  </u-action-sheet>
</template>
<script setup lang="ts">
import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
import { ref, computed, defineProps, withDefaults, watch, defineEmits } from "vue";

const formData = ref({
  name: '',
  area: '',
  floorCode: '',
  place: '',
  textarea: '',
})
const showSex = ref(false)
const actions = ref([{
    name: '深圳',
    },
    {
      name: '厦门',
    },
    {
      name: '上海',
    },
  ])
const fileList = ref([])

const typeList = ref([
  { name: '住宅', code: 'aa', isActive: false },
  { name: '写字楼', code: 'bb' },
  { name: '商铺', code: 'cc' },
  { name: '车位', code: 'dd' },
])

function afterRead(event: any) {
  // let lists = [].concat(event.file);
  const file: any = event.file;
  fileList.value.push(file[0].url);
  console.log("图片上传", fileList.value, file[0])
}

function checkType(item: any) {
  typeList.value?.forEach((type) => type.isActive = false);
  item.isActive = true;
}

function deletePic() {

}

function sexSelect(e: any) {
  console.log("aaa", e)
  formData.value.place = e.name;
}


const sumbit = (async() => {
  console.log("表单", formData.value)
  uni.redirectTo({
	  url: `/pages/index/index?flag=true`
  });
})

const emits = defineEmits<{
  // (e: "addProperty"): void;
}>();

onLoad((options) => {
  console.log('page query', options)
})

// 页面切换到前台时
onShow(() => {
})

// 页面切换到后台时
onHide(() => {
})
</script>
<style lang="scss" scoped>
.add-property-form {
  background-color: rgba(249, 249, 249, 1);
  padding-top: 1rpx;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .form {
    margin-top: 40rpx;
    background-color: #fff;
    padding: 28rpx 44rpx;
    .right-title {
      color: rgba(135, 132, 135, 1);
      font-size: 28rpx;
    }
    .type {
      display: flex;
      flex-direction: column;
    }
    .desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .upload-img {
      margin-top: 16rpx;
      margin-left: 20rpx;
    }
    .ccc {
      margin-left: 20rpx;
      font-size: 30rpx;
      color: #c0c4cc;
    }
    .box {
      display: flex;
      flex-wrap: wrap;
      text {
        width: 180rpx;
        height: 64rpx;
        line-height: 64rpx;
        text-align: center;
        color: rgba(16, 16, 16, 1);
        border: 1px solid rgba(187, 187, 187, 1);
        font-size: 28rpx;
        // margin-right: 40rpx;
        margin-left: 20rpx;
        margin-top: 40rpx;
      }
      .active {
        border: 1px solid $theme-color;
        color: $theme-color;
      }
    }
  }
}
.sumbit-btn {
  background-color: $theme-color;
  height: 80rpx;
  border-radius: 10rpx;
  color: #fff;
  font-size: 28rpx;
  line-height: 80rpx;
  text-align: center;
  width: 85%;
  margin-bottom: 40rpx;
}
::v-deep input {
  margin-left: 20rpx;
  font-size: 28rpx;
  color: rgba(135, 132, 135, 1);
}
::v-deep .u-form-item__body {
  padding: 40rpx 0 !important;
}
::v-deep .u-form-item__body__right__content__slot {
  flex-direction: row !important;
}
</style>
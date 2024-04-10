<template>
  <view class="content">
    <uni-badge size="small" :text="100" type="primary" absolute="rightTop">
        <div>右上</div>
    </uni-badge>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
const bindClick = () => {}
</script>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

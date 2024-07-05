<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}
</script>

<template>
  <div class="block text-center">
    <span class="demonstration">
    </span>
    <el-carousel class="flow-back" height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="flow-content" text="2xl">热搜{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="第一条新闻" name="1">
        <div>
          第一条新闻
        </div>
        <div>
          第一条新闻内容
        </div>
      </el-collapse-item>
      <el-collapse-item title="第二条新闻" name="2">
        <div>
          第二条新闻
        </div>
        <div>
          第二条新闻内容
        </div>
      </el-collapse-item>
      <el-collapse-item title="第三条新闻" name="3">
        <div>
          第三条新闻
        </div>
        <div>
          第三条新闻内容
        </div>
        <div>
          第三条新闻的内容的内容
        </div>
      </el-collapse-item>
      <el-collapse-item title="第四条新闻" name="4">
        <div>
          第四条新闻
        </div>
        <div>
          第四条新闻内容
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
.flow-back {
  background-color: #888888;
}
.flow-content {
  font-size: 20px;
}
</style>
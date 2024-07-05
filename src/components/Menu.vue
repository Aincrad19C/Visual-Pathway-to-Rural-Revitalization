<template>
  <el-menu
      :default-active="activeIndex"
      class="sjxt-menu"
      mode="vertical"
      :ellipsis="false"
      @select="handleSelect"
      background-color="#B0C4DE"
  >
    <el-menu-item index="0">
      <img
          style="height: 100%"
          src="../assets/vue.svg"
          alt="Element logo"
      />
      <p style="font-size: 27px">视觉乡途</p>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">地图鸟瞰</el-menu-item>
    <el-menu-item index="2">新闻速递</el-menu-item>
    <el-sub-menu index="3">
      <template #title>关于本站</template>
      <el-menu-item index="3-1">关于应用</el-menu-item>
      <el-menu-item index="3-2">免责声明</el-menu-item>
      <el-menu-item index="3-3">制作人员名单</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const emit = defineEmits(['activeIndex'])
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  emit('activeIndex', keyPath[keyPath.length - 1])
  // console.log(activeIndex.value)
  // console.log(key, keyPath)
}
const router = useRouter()
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
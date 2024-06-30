<script setup>
import Menu from './components/Menu.vue'
import {ref, shallowRef} from "vue";
import Map from "./components/Map.vue";
import Articles from "./components/Articles.vue";
import About from "./components/About.vue";
import FreeOfCharge from "./components/FreeOfCharge.vue";
import Creators from "./components/Creators.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const showMain = (activeIndex) => {
  console.log(activeIndex)
  if (activeIndex === '0' || activeIndex === '1'){
    width.value = "1000px"
    height.value = "1220px"
    router.replace('/map')
  } else if (activeIndex === '2'){
    router.replace('/articles')
  } else if (activeIndex === '3-1'){
    router.replace('/about')
  } else if (activeIndex === '3-2'){
    router.replace('/foc')
  } else if (activeIndex === '3-3'){
    router.replace('/creators')
  } else {
    alert("发生甚么事了")
  }
  if (activeIndex !== '0' && activeIndex !== '1'){
    width.value = "100%"
    height.value = "100%"
  }
}
const width = ref('1000px')
const height = ref('1220px')
</script>

<template style="background-color: #F5F5DC">
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Menu @activeIndex="showMain">
        </Menu>
      </el-aside>
      <el-main>
<!--        <component :is="showComponent" class="main" :style="{width: width, height: height}"></component>-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
</style>
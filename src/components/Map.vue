<script setup>
import * as echarts from 'echarts';
import {onMounted} from "vue";
import request from "../axios/request.js";

const links = []
let myChart = null;
const baseUrl = "http://60.204.142.134/jsons/"
const initMap = (name) => {
  const included = {
    "中国": `${baseUrl}100000.json`,
    "江苏省": `${baseUrl}320000.json`,
    "南京市": `${baseUrl}320100.json`,
    "云南省": `${baseUrl}530000.json`,
    "西藏自治区": `${baseUrl}540000.json`,
    "青海省": `${baseUrl}630000.json`,
    "新疆维吾尔自治区": `${baseUrl}650000.json`
  }
  if (myChart) {
    myChart.dispose()
  }
  myChart = echarts.init(document.getElementById('map'))
  request({
    url: included[name],
    method: 'get',
    params: {},
  }).then((res) => {
    mapOptions(res.data)
  }).catch((err) => {
    console.log("找不到资源"+'/'+name+'.json')
  })
  myChart.on("click", (params) => {
    console.log(params.name)
    if (params.name in included) {
      console.log(params.name)
      links.push(params.name)
      myChart.showLoading()
      setTimeout(() => {
        initMap(links[links.length - 1])
        myChart.hideLoading()
      }, 200)
    }
  })
}
const mapOptions = (jsonData) => {
  echarts.registerMap('China', jsonData);
  const options = {
    tooltip: {},
    series: [
      {
        name: '中国地图',
        type: 'map',
        map: 'China',// 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
        label: {
          show: true
        },
        data: [
          {}
        ]
      }
    ]
  };
  myChart.setOption(options);
}
const toBack = () => {
  if (links.length === 1) {
    return;
  }
  links.pop();
  myChart.showLoading()
  setTimeout(() => {
    initMap(links[links.length - 1]);
    myChart.hideLoading()
  }, 200)
}
onMounted(() => {
  links.push("中国")
  initMap(links[links.length - 1]);
})
</script>

<template>
  <div style="height: 50px">
    <h1>脱贫攻坚成果图</h1>
    <el-affix :offset="100">
      <el-button type="primary" @click="toBack">后退</el-button>
    </el-affix>
  </div>
  <div ref="main" class="main" id="map" style="height: 1000px; width: 1000px; margin-top: -150px;margin-left: -50px"></div>
</template>

<style scoped>
</style>
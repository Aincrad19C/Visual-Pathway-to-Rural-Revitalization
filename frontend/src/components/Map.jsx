import * as echarts from 'echarts'
import {useEffect} from "react";
import axios from "axios";
import '../style/Map.css';
import mapInfo from '../assets/mapInfo.json';

export default function Map() {

  const stk = [];
  let map;
  const option = {
    textStyle:{
      color: '#fff',
      fontSize: 12,
      fontWeight: 'normal',
      fontFamily: "Microsoft YaHei"
    },
    subtextStyle:{
      color: '#ccc',
      fontSize:10,
      fontWeight:'normal',
      fontFamily:"Microsoft YaHei"
    },
    visualMap: {
      min: 2000,
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      },
    },
    title: { text: "2023GDP(单位:亿元)" },
    tooltip: {},
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        saveAsImage: {}
      },
      iconStyle:{
        normal:{
          color:'#fff'
        }
      }
    },
    animation: true,
    animationDuration:1000,
    animationEasing:'cubicOut',
    animationDurationUpdate:1000
  };

  const renderMap = (zoneName) => {
    console.log(zoneName);
    axios.get(`https://geo.datav.aliyun.com/areas_v3/bound/${mapInfo[zoneName].id}_full.json`).then(res => {
      echarts.registerMap(zoneName, res.data);
      option.visualMap.max = zoneName.at(zoneName.length - 1) === "国" ? 150000 : 30000
      option.series = [
        {
          name: zoneName,
          type: 'map',
          map: zoneName,
          // roam: false,
          // nameMap: {
          //   'china': '中国'
          // },
          label: {
            show: true
          },
          data: mapInfo[zoneName].data
        },
      ]
      map.setOption(option);
    })
  }

  useEffect(() => {
    if (stk.length > 0) {
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    map = echarts.init(document.getElementById('map'));
    map.on("click", (params) => {
      if (mapInfo[params.name]) {
        stk.push(params.name)
        renderMap(params.name)
      }
    })
    stk.push("中华人民共和国")
    console.log(stk)
    renderMap("中华人民共和国")
  }, [])

  const back = () => {
    if (stk.length > 1) {
      stk.pop()
      console.log(stk)
      renderMap(stk[stk.length - 1])
    }
  }

  const buttonStyles = {
    zIndex: 1,
    position: "absolute",
    top: "5%",
    left: "1%"
  }

  return (
      <div id="map-container">
        <div id="map"></div>
        <button style={buttonStyles} onClick={back}>回退</button>
      </div>
  )
}
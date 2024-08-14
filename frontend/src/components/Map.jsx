import * as echarts from 'echarts';
import { useEffect } from "react";
import axios from "axios";
import '../style/Map.css';
import mapInfo from '../assets/mapInfo.json';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const onPointClicked = () => {
    navigate('/artical');
  };
  const renderMap = (zoneName) => {
    console.log(zoneName);
    axios.get(`https://geo.datav.aliyun.com/areas_v3/bound/${mapInfo[zoneName].id}_full.json`).then(res => {
      echarts.registerMap(zoneName, res.data);
      option.series = [
        {
          name: zoneName,
          type: 'map',
          map: zoneName,
          label: {
            show: true
          },
          // 只在二级地图上添加标记点
          ...(stk.length > 1 && {
            markPoint: {
              symbol: 'pin',
              symbolSize: 50,
              itemStyle: {
                color: '#f00'
              },
              data: [
                {
                  name: '北京', value: 100, coord: [122.2030363, 29.9873344]
                }
              ]
            }
          }),
        },
      ];
      map.setOption(option);
      map.off('click'); // 移除之前的点击事件监听器
      map.on('click', (params) => {
        if (params.componentType === 'markPoint' && params.name === '北京') {
          onPointClicked();
        } else if (mapInfo[params.name]) {
          stk.push(params.name);
          renderMap(params.name);
        }
      });
    });
  };

  useEffect(() => {
    if (stk.length > 0) {
      return;
    }
    map = echarts.init(document.getElementById('map'));
    stk.push("中华人民共和国");
    renderMap("中华人民共和国");
  }, []);
  
  const back = () => {
    if (stk.length > 1) {
      stk.pop();
      // 销毁当前地图实例
      map.dispose();
      // 重新初始化一个新的地图实例
      map = echarts.init(document.getElementById('map'));
      // 重新渲染上一级地图
      renderMap(stk[stk.length - 1]);
    }
  };

  const buttonStyles = {
    zIndex: 1,
    position: "absolute",
    top: "5%",
    left: "1%"
  };

  return (
    <div id="map-container" style={{
      position: "relative",
      top: "4vh",
    }}>
      <div id="map"></div>
      <button style={buttonStyles} onClick={back}>回退</button>
    </div>
  );
}

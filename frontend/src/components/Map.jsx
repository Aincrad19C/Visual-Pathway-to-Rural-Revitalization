import * as echarts from 'echarts';
import { useEffect } from "react";
import axios from "axios";
import '../style/Map.css';
import mapInfo from '../assets/mapInfo.json';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export default function Map() {
  let stk = [];
  let map;
  const option = {
    textStyle: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'normal',
      fontFamily: "Microsoft YaHei"
    },
    subtextStyle: {
      color: '#ccc',
      fontSize: 10,
      fontWeight: 'normal',
      fontFamily: "Microsoft YaHei"
    },
    tooltip: {},
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      iconStyle: {
        normal: {
          color: '#fff'
        }
      }
    },
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    animationDurationUpdate: 1000,
  };
  const navigate = useNavigate();
  const onPointClicked = (id) => {
    navigate(`/artical?id=${id}`);
  };

  const renderMap = (zoneName) => {
    console.log(zoneName);
    axios.post(`http://backend:7001/getMap/getInfo`,{name:zoneName}).then(res => {
      echarts.registerMap(zoneName, res.data);
      const marks = mapInfo[zoneName].marks;
      const ProvId = mapInfo[zoneName].id;
      const data = Object.keys(mapInfo).map(provinceName => {
        const color = mapInfo[provinceName].color || '#ffaf4d';
        return {
          name: provinceName,
          itemStyle: {
            areaColor: color
          }
        };
      });
      option.series = [
        {
          name: zoneName,
          type: 'map',
          map: zoneName,
          label: {
            show: true
          },
          data:data,
          ...(stk.length > 1 && {
            markPoint: {
              symbol: 'pin',
              symbolSize: 50,
              itemStyle: {
                color: '#f00'
              },
              data: marks
            }
          }),
        },
      ];
  
      map.setOption(option);
      map.off('click'); // 移除之前的点击事件监听器
      map.on('click', (params) => {
        // 检查点击的是否是标记点
        if (params.componentType === 'markPoint') {
          const pointId = marks.findIndex(mark => mark.name === params.name);
          if (pointId !== -1) {
            onPointClicked(ProvId + pointId + 1); //跳转，url传递id
          }
        } else if (mapInfo[params.name]) {
          stk.push(params.name);
          renderMap(params.name);
        }
      });
    });
  };
  useEffect(() => {
    map = echarts.init(document.getElementById('map'));
    stk.push("中华人民共和国");
    renderMap("中华人民共和国");
  }, []);

  const back = () => {
    stk = [];
    if (map) {
      map.dispose();
    }
    // 重新初始化地图
    map = echarts.init(document.getElementById('map'));
    stk.push("中华人民共和国");
    renderMap("中华人民共和国");

    stk = [];
    if (map) {
      map.dispose();
    }
    // 重新初始化地图
    map = echarts.init(document.getElementById('map'));
    stk.push("中华人民共和国");
    renderMap("中华人民共和国");
  };

  const buttonStyles = {
    zIndex: 1,
    position: "absolute",
    top: "10%",
    left: "30%"
  };

  return (
    <div id="map-container" style={{
      position: "relative",
      top: "4vh",
    }}>
      <div id="map"></div>
      <Button style={buttonStyles} onClick={back}>回退</Button>
    </div>
  );
}

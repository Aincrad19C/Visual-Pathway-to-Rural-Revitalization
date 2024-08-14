import React from 'react';
import { useState } from 'react';
import Header from '../components/Header.jsx';
import MapComponent from '../components/Map.jsx';
import BackgroundImageComponent from '../components/Background.jsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Map() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const navigateToNewRoute = () => {
    navigate('/artical')
  };

  // 内联样式，指定按钮的位置
  const buttonStyle = {
    position: 'absolute',
    bottom: "50px", // 垂直居中
    right: '50px', // 水平居中
    transform: 'translate(-50%, -50%)', // 确保按钮的中心点位于容器的中心
    zIndex: 1000 // 确保按钮在其他元素之上
  };

  return (
    <>
      <Header />
      <MapComponent />
      {/* 添加一个按钮，点击后跳转到指定路由 */}
      <Button style={buttonStyle} onClick={navigateToNewRoute}>Go to New Route</Button>
      <BackgroundImageComponent/>
    </>
  );
}

export default Map;

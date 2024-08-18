import React from 'react';
import { useState , useEffect  } from 'react';
import Header from '../components/Header.jsx';
import MapComponent from '../components/Map.jsx';
import BackgroundImageComponent from '../components/Background.jsx';
import '../style/Transition.css'; // Import the CSS file for transitions
import { Button } from '@material-ui/core';
import Wave from "../components/Wave.jsx";
import Gallery from '../components/GalleryRandom.jsx';

function Map() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set the page to visible after it mounts
    setVisible(true);
  }, []);


  // 内联样式，指定按钮的位置
  const buttonStyle = {
    position: 'absolute',
    bottom: "50px", // 垂直居中
    right: '50px', // 水平居中
    transform: 'translate(-50%, -50%)', // 确保按钮的中心点位于容器的中心
    zIndex: 1000 // 确保按钮在其他元素之上
  };

  return (
    <div className={`page-transition ${visible ? 'visible' : ''}`}>
      <Header />
      <MapComponent />
      <Gallery/>
      {/* 添加一个按钮，点击后跳转到指定路由 */}
      <BackgroundImageComponent/>
      <Wave/>
    </div>
  );
}

export default Map;

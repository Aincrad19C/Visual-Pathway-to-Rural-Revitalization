import React from 'react';
import '../style/Background.css'; // 假设你有一些CSS样式

const BackgroundImageComponent = () => {
    // 假设图片路径是相对路径，并且图片位于项目的public文件夹中
    const imageUrl = '/background/Background.png';
  
    return (
      <div className="background-image-container" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* 这里可以放置其他内容 */}
      </div>
    );
  };
  
export default BackgroundImageComponent;

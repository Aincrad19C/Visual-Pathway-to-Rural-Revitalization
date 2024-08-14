import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';

// 创建一个SVG图标组件，显示播放键
const PlayIcon = (props) => {
  return (
    <SvgIcon {...props} style={{ fontSize: '2.5rem' }}>
      <path d="M8 5v14l11-7z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </SvgIcon>
  );
};

const ButtonToMap = () => {
  const navigate = useNavigate();

  const buttonStyles = {
    position: "fixed",
    top:"55%",
    left:"48%",
    padding: 0, // 移除内边距
    width: '60px',
    height: '60px',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 165, 0, 0.7)',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  };

  const iconStyles = {
    position: 'fixed',
    top: '60%',
    left: '50.1%',
    transform: 'translate(-50%, -50%)', // 向右移动4px
  };

  const handleButtonClick = () => {
    navigate('/map');
  };

  return (
    <Button
      onClick={handleButtonClick}
      style={buttonStyles}
      startIcon={
        <div style={iconStyles}>
          <PlayIcon />
        </div>
      }
    >
      {/* 移除文字 */}
    </Button>
  );
};

export default ButtonToMap;

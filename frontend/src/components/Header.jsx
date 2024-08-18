import React, { useState } from 'react';
import '../style/Header.css'; // 导入CSS样式文件
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

const Header = () => {
  const [openMissionDialog, setOpenMissionDialog] = useState(false);
  const [openFriendLinkDialog, setOpenFriendLinkDialog] = useState(false);
  const navigate = useNavigate();

  const handleMissionClick = () => {
    setOpenMissionDialog(true);
  };

  const handleFriendLinkClick = () => {
    setOpenFriendLinkDialog(true);
  };

  const handleCloseMissionDialog = () => {
    setOpenMissionDialog(false);
  };

  const handleCloseFriendLinkDialog = () => {
    setOpenFriendLinkDialog(false);
  };

  // 定义Dialog的样式
  const dialogStyles = {
    width: '30%', // 设置Dialog宽度为50%
    maxWidth: 'none', // 取消最大宽度限制
    height: '60%', // 设置Dialog高度为50%
    maxHeight: 'none', // 取消最大高度限制
  };

  return (
    <div className="header-container">
      <nav className="header-nav">
        <ul>
          <li><a href="#home" onClick={(e) => {
              e.preventDefault();
              navigate(`/`);
            }}>首页</a></li>
          <li><a href="#map" onClick={(e) => {
            e.preventDefault();
            navigate(`/map`);
          }}>地图一览</a></li>
          <li><a href="#mission" onClick={handleMissionClick}>项目宗旨</a></li>
        </ul>
      </nav>

      {/* 项目宗旨 Dialog */}
      <Dialog
        open={openMissionDialog}
        onClose={handleCloseMissionDialog}
        PaperProps={{ style: dialogStyles }}
      >
        <DialogTitle>项目宗旨</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              whiteSpace: 'pre-wrap', // 允许换行
              textIndent: '32px', // 首行缩进
              lineHeight: '1.6', // 模拟换行
            }}
            >
党的十八大以来，以习近平同志为核心的党中央把脱贫攻坚摆在治国理政的突出位置，经过八年接续奋斗，农村贫困人口全部脱贫，绝对贫困得以消除，区域性整体贫困得到解决，脱贫攻坚战取得全面胜利。打赢脱贫攻坚战后，各地区接续推进脱贫地区乡村振兴。
<br/>       本次项目旨在借助互联网，向大众展示各地脱贫攻坚、对口支援和乡村振兴的各项成就。我们在网页上部署中国地图，用户通过地图选点浏览不同地区乡村振兴的成果。同时，在网页上增加了ai对话功能，回答用户有关脱贫攻坚、乡村振兴的问题。我们希望有更多的人了解并认同党中央的决策部署，增强对中国特色社会主义事业的信心。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMissionDialog} color="primary">
            关闭
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
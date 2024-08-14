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
          <li><a href="#friend-link" onClick={handleFriendLinkClick}>友链</a></li>
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
          <DialogContentText>
            这里是项目宗旨的详细描述...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMissionDialog} color="primary">
            关闭
          </Button>
        </DialogActions>
      </Dialog>

      {/* 友链 Dialog */}
      <Dialog
        open={openFriendLinkDialog}
        onClose={handleCloseFriendLinkDialog}
        PaperProps={{ style: dialogStyles }}
      >
        <DialogTitle>友情链接</DialogTitle>
        <DialogContent>
          <DialogContentText>
            这里是友情链接的详细描述...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFriendLinkDialog} color="primary">
            关闭
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
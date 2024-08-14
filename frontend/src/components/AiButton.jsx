import React, { useState } from 'react';
import '../style/AiButton.css';
import axios from 'axios';

const ButtonInput = ({ position }) => {
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [bubbleText, setBubbleText] = useState('666'); // 新增状态，用于保存聊天气泡文本

  // 处理点击按钮事件
  const handleButtonClick = () => {
    setExpanded(true);
  };

  // 处理输入框内容变化
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 处理提交事件
  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:7001/aiSumbit', { content: inputValue });
      if (res.data.status === 200) {
        setBubbleText(res.data.body.message); // 假设后端返回的数据中包含一个消息字段
        cancelSession(); // 提交成功后取消会话
      } else {
        alert('提交失败');
      }
    } catch (error) {
      alert('请求失败: ' + error.message);
    }
  };

  // 取消会话（收起输入框）
  const cancelSession = () => {
    setExpanded(false);
    setInputValue('');
  };

  return (
    <div style={{ position: 'fixed', ...position }} className="button-input-container">
      {!expanded && (
        <div className="circle-button" onClick={handleButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
      )}
      {expanded && (
        <div className="input-wrapper">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="input-field"
          />
          <button onClick={handleSubmit} className="submit-button">
            提问
          </button>
          <button onClick={cancelSession} className="cancel-button">
            取消
          </button>
        </div>
      )}
      {bubbleText && ( // 如果有聊天气泡文本，则显示聊天气泡
        <div className="chat-bubble">
          {bubbleText}
        </div>
      )}
    </div>
  );
};

export default ButtonInput;
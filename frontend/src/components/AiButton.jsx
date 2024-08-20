import React, { useState } from 'react';
import '../style/AiButton.css';
import axios from 'axios';

const ButtonInput = ({ position }) => {
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [bubbleText, setBubbleText] = useState('666'); // 用于保存聊天气泡文本
  const [showBubble, setShowBubble] = useState(false); // 用于控制聊天气泡的显示

  const handleButtonClick = () => {
    setExpanded(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setShowBubble(true);
      setBubbleText("思考中...")
      const res = await axios.post('http://backend:7001/aiSumbit', { "content": inputValue });
      if (res.status === 200) {
        setShowBubble(true); // 显示聊天气泡
        setBubbleText(res.data.result); // 假设后端返回的数据中包含一个消息字段
        cancelSession(); // 提交成功后取消会话
      } else {
        alert('提交失败');
      }
    } catch (error) {
      alert('请求失败: ' + error.message);
    }
  };

  const cancelSession = () => {
    setExpanded(false);
    setInputValue('');
  };

  const handleCloseBubble = () => {
    setShowBubble(false); // 关闭聊天气泡
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
      {showBubble && ( // 使用 showBubble 状态来控制聊天气泡的显示
        <div className="chat-bubble">
          {bubbleText}
          <button onClick={handleCloseBubble} className="close-bubble-button">&times;</button>
        </div>
      )}
    </div>
  );
};

export default ButtonInput;

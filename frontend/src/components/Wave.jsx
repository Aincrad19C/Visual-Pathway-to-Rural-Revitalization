import React from 'react';
import '../style/Wave.css'; // 引入CSS样式

const App = () => {
  return (
    <div className="header">
      <div>
        <svg className="waves" 
             xmlns="http://www.w3.org/2000/svg" 
             xmlnsXlink="http://www.w3.org/1999/xlink" 
             viewBox="0 24 150 28" 
             preserveAspectRatio="none" 
             shapeRendering="auto">
          <defs>
            <path id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="var(--mao-bg-wave01)"/>
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="var(--mao-bg-wave02)"/>
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="var(--mao-bg-wave03)"/>
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="var(--mao-bg-wave04)"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default App;
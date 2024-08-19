import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Artical from '../components/Artical.jsx';
import BackgroundImageComponent from '../components/Background.jsx';
import Gallery from '../components/Gallery.jsx';
import '../style/Transition.css'; // Import the CSS file for transitions

function ArticalPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set the page to visible after it mounts
    setVisible(true);
  }, []);

  return (
    <div className={`page-transition ${visible ? 'visible' : ''}`}>
      <Header />
      <Artical />
      <Gallery />
      <BackgroundImageComponent />
    </div>
  );
}

export default ArticalPage;

import { useState } from 'react'
import Header from '../components/Header.jsx'
import Artical from '../components/Artical.jsx'
import BackgroundImageComponent from '../components/Background.jsx'

function ArticalPage() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Artical/>
        <BackgroundImageComponent/>
    </>
  )
}

export default ArticalPage;
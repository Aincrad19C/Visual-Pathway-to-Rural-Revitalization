import { useState } from 'react'
import Header from '../components/Header.jsx'
import Artical from '../components/Artical.jsx'

function ArticalPage() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Artical/>
    </>
  )
}

export default ArticalPage;
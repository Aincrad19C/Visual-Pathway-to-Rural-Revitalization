import { useState } from 'react'
import Header from '../components/Header.jsx'
import Title from '../components/Title.jsx'
import Wave from '../components/Wave.jsx'
import ImageCarousel from '../components/ImageCarousel.jsx'
import ButtonToMap from '../components/ButtonToMap.jsx'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <ImageCarousel/>
        <Title/>
        <ButtonToMap/>
        <Wave/>
    </>
  )
}

export default Home
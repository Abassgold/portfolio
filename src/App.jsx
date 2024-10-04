import React from 'react'
import ReactNavbar from './components/Navbar/ReactNavbar'
import { useSelector } from 'react-redux'
import Body from './components/Navbar/body/Body'
import Footer from './components/footer/Footer'

const App = () => {
  const { isChanged } = useSelector(state => state.features)
  let bg = isChanged ? '#ffffff' : '#082032'
  let textColor = isChanged ? '#082032' : '#ffffff'
  return (

    <>
      <div className='bg-[#1c4b82] sticky z-40 top-0'>
        <ReactNavbar />
      </div>
      <div style={{ backgroundColor: bg, color: textColor }}>
        <div className={`p-4 max-w-[80rem] mx-auto`} >
          <Body/>
        </div>
      </div>
      <div className='bg-[#1c4b82] text-center py-6 px-2 text-white'>
        <Footer/>
      </div>
    </>
  )
}

export default App
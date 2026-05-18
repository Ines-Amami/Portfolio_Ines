import {React,useState}from 'react'
import NavBar from './Components/NavBar'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
import LoadingScreen from './Components/Loading'
import Home from './Pages/Home'

const App = () => {
  const [loading, setLoading] = useState(true)
  return (
    <>
<LoadingScreen onComplete={() => setLoading(false)} />
<div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}>
  {/* your existing content */}

    <div style={{ backgroundColor: '#fdf6ef' }}>

      <NavBar />

      {/* HERO — keeps your existing background image + particles */}
      <Home />

      {/* DIVIDER */}
      <div style={{ height: '1px', background: '#ecd8ce', margin: '0 40px' }} />

      {/* PROJECTS — warm ivory */}
      <div style={{ backgroundColor: '#fdf6ef' }}>
        <Project />
      </div>

      {/* DIVIDER */}
      <div style={{ height: '1px', background: '#ecd8ce', margin: '0 40px' }} />

      {/* SKILLS — soft pink blush */}
      <div style={{ backgroundColor: '#fdf0f5' }}>
        <Skills />
      </div>

      {/* DIVIDER */}
      <div style={{ height: '1px', background: '#ecd8ce', margin: '0 40px' }} />

      {/* CONTACT — warm ivory */}
      <div style={{ backgroundColor: '#fdf6ef' }}>
        <Contact />
      </div>

      <Footer />

    </div>
    </div>
    </>
  )
}

export default App

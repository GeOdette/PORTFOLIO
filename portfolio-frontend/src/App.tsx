
import './App.css'
import AboutMe from './pages/AboutMe'
import NarvBar from './pages/navbar/NavBar'
import Home from './pages/Home'
import MyProjects from './pages/MyProjects'
import ServicesImAmProviding from './pages/ServicesImAmProviding'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Footer from './pages/Footer'

function App() {


  return (
    <>
      <NarvBar></NarvBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/my-services' element={<ServicesImAmProviding />}></Route>
        <Route path='/my-projects' element={<MyProjects />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer></Footer>

    </>
  )
}

export default App

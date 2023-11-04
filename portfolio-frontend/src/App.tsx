
import './App.css'
import AboutMe from './components/AboutMe'
import NarvBar from './components/NavBar'
import Home from './components/Home'
import MyProjects from './components/MyProjects'
import ServicesImAmProviding from './components/ServicesImAmProviding'
import { Routes, Route } from 'react-router-dom';
import About from './components/About'
import Footer from './components/Footer'

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

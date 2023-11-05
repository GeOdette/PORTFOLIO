

import HeroSection from './HeroSection';
import NarvBar from './navbar/NavBar';
import AboutMe from './AboutMe';
import ServicesImAmProviding from './ServicesImAmProviding';
import MyProjects from './MyProjects';
import ContactMe from './contactMe/ContactMe';


const Home = () => {
  return (
    <>
      <NarvBar></NarvBar>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <ServicesImAmProviding></ServicesImAmProviding>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>


    </>
  )
}

export default Home

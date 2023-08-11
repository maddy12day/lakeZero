import { Home } from "./pages/Home"
import './index.css'
import { AboutPage } from "./pages/About"
import { Contact } from "./pages/Contact"
import { WorkPage } from "./pages/Work"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { ServicesPage } from "./pages/Services"
import {useEffect} from 'react'
import PageStyle from './style/PageStyle.module.css'
function App() {
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target?.classList.add(PageStyle.PageAnimation);
          return;
      }
  });
  },{
    rootMargin:'0px 0px -150px 0px',
  })
  useEffect(()=>{
    const pages1 = document.getElementById('ABOUT')
    const pages2 = document.getElementById('SERVICES')
    const pages3 = document.getElementById('CONTACT')
    const pages4 = document.getElementById('WORK')
    pages1 && io.observe(pages1)
    pages2 && io.observe(pages2)
    pages3 && io.observe(pages3)
    pages4 && io.observe(pages4)
        // pages.forEach(page=>{
        //     io.observe(page)
        // })
  },[])
  return (
    <>
      <Navbar />
      <Home id="HOME"/>
      {/* <ContactPage/> */}
      <ServicesPage id="SERVICES"/>
      <WorkPage id="WORK"/>
      <AboutPage id="ABOUT"/>
      <Contact id='CONTACT'/>
      <Footer />
    </>
  )
}

export default App

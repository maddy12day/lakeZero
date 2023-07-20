import { Home } from "./pages/Home"
import './index.css'
import { AboutPage } from "./pages/About"
import { Contact } from "./pages/Contact"
import { WorkPage } from "./pages/Work"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
function App() {

  return (
    <>
      <Navbar />
      <Home />
      <AboutPage />
      {/* <ContactPage/> */}
      <WorkPage />
      <Contact/>
      <Footer />
    </>
  )
}

export default App

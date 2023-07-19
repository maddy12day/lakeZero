import { Home } from "./pages/Home"
import './index.css'
import { AboutPage } from "./pages/About"
import { Contact } from "./pages/Contact"
import { WorkPage } from "./pages/Work"
import { Footer } from "./components/Footer"
function App() {

  return (
    <>
      <Home/>
      <AboutPage />
      {/* <ContactPage/> */}
      <WorkPage/>
      <Footer/>
    </>
  )
}

export default App

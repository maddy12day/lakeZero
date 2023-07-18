import { Navbar } from "../components/Navbar";
import HomeStyle from '../style/Home.module.css'
import { Footer } from "../components/Footer";


export function Home(){
    return<>
    
        <div className={`${HomeStyle.background}`}>
            <Navbar/>
            <div>
                <img src="src/assets/WhiteTransp.png" alt="" className={`${HomeStyle.img}`} />
            </div>
            <Footer/>
        </div>
    </>
}
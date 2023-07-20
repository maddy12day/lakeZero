import HomeStyle from '../style/Home.module.css'
import { SocialMediaContainer } from "../components/SocialMediaContainer";


export function Home() {
    return <>

        <div className={`${HomeStyle.background}`}>
            <div className={`${HomeStyle.Brand}`}>
                <img src="src/assets/WhiteTransp.png" alt="" className={`${HomeStyle.img}`} />
            </div>
            <SocialMediaContainer />
        </div>
    </>
}
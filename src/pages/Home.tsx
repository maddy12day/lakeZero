import HomeStyle from '../style/Home.module.css'
import { SocialMediaContainer } from "../components/SocialMediaContainer";
import PageStyle from '../style/PageStyle.module.css'

export function Home() {
    return <>
            <div className={`${HomeStyle.background} ${PageStyle.Page}`}>
                <div className={`${HomeStyle.Brand}`}>
                    <img src="src/assets/WhiteTransp.png" alt="" className={`${HomeStyle.img}`} />
                </div>
                <SocialMediaContainer />
        </div>
    </>
}
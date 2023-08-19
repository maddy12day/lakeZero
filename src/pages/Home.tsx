import HomeStyle from '../style/Home.module.css'
import { SocialMediaContainer } from "../components/SocialMediaContainer";
import PageStyle from '../style/PageStyle.module.css'
import mediaData from '../data/socialMediaIcon.json'
export const Home = ({ id }: { id: string }) => {
    return <>
        <div className={`${PageStyle.Page} ${HomeStyle.background}`} id={id}>
            <div className={`${PageStyle.blurEnable}`}></div>
            <div className={`${HomeStyle.Brand}`}>
                <img src="src/assets/WhiteTransp.png" alt="" className={`${HomeStyle.img}`} />
            </div>
            <SocialMediaContainer mediaUrl={mediaData}/>
        </div>
    </>
}
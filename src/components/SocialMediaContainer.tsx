import mediaIcon from '../data/socialMediaIcon.json'
import { SocialMedia } from './FooterComp'
import Styles from '../style/Styles.module.css'
export const SocialMediaContainer = () => {
    return <>
        <div className={`${Styles.SocialMediaContainer}`}>
            {mediaIcon.map((item,index) => (
                <SocialMedia{...item} className={`${Styles.SocialMedia}`} key={index}/>
            ))}
        </div>
    </>
}
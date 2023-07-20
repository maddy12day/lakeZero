import WorkPageStyle from '../style/WorkPageStyle.module.css'
import { RotatingCarousel } from '../components/RotatingCarousel'
import PageStyle from '../style/PageStyle.module.css'
export const WorkPage = () => {
    return <>
        <div className={`${PageStyle.Page} ${WorkPageStyle.Page}`} id='WORK'>
        
            <RotatingCarousel />
            <RotatingCarousel reverse={true} />
            <RotatingCarousel />
        </div>
    </>
}
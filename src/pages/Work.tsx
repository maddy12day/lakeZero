import WorkPageStyle from '../style/WorkPageStyle.module.css'
import { RotatingCarousel } from '../components/RotatingCarousel'
import PageStyle from '../style/PageStyle.module.css'
export const WorkPage = () => {
    return <>
        <div className={`${PageStyle.Page} ${WorkPageStyle.Page}`} id='WORK'>
            <div className={`${WorkPageStyle.Text}`}>Works that will roll your mind</div>
            <div className={`${WorkPageStyle.Container}`}>
                <RotatingCarousel reverse={true} speed={3} />
                <RotatingCarousel speed={4} />
                <RotatingCarousel reverse={true} speed={1} />
            </div>
        </div>
    </>
}
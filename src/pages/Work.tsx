import WorkPageStyle from '../style/WorkPageStyle.module.css'
import { RotatingCarousel } from '../components/RotatingCarousel'
import PageStyle from '../style/PageStyle.module.css'
export const WorkPage = () => {
    return <>
        <div className={`${PageStyle.Page} ${WorkPageStyle.Page}`} id='WORK'>
            <div className={`${WorkPageStyle.Text}`}>A to Z Solutions with LakeZero</div>
            <div className={`${WorkPageStyle.Note}`}>Services that are worth taking. Reach new heights with us. <br/>Only thing which can limit you is Imagination. Get what you can Imagine</div>
            <div className={`${WorkPageStyle.Container}`}>
                <div className={`${WorkPageStyle.CardWrapper}`}>
                    <div className={`${WorkPageStyle.CardBackground}`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${WorkPageStyle.Card}`}>
                        <div className={`${WorkPageStyle.Title}`}>
                            Music Mixing
                        </div>
                    </div>
                </div>

                <div className={`${WorkPageStyle.CardWrapper}`}>
                    <div className={`${WorkPageStyle.CardBackground}`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${WorkPageStyle.Card}`}>
                        <div className={`${WorkPageStyle.Title}`}>
                            Music Composing
                        </div>
                    </div>
                </div>

                <div className={`${WorkPageStyle.CardWrapper}`}>
                    <div className={`${WorkPageStyle.CardBackground}`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${WorkPageStyle.Card}`}>
                        <div className={`${WorkPageStyle.Title}`}>
                            Music Production
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={`${WorkPageStyle.Text}`}>Works that will roll your mind</div>
            <div className={`${WorkPageStyle.Container}`}>
                <RotatingCarousel reverse={true} speed={3} />
                <RotatingCarousel speed={4} />
                <RotatingCarousel reverse={true} speed={1} />
            </div>
        </div>
    </>
}
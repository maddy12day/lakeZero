import ServicesPageStyle from '../style/ServicesPage.module.css'
import PageStyle from '../style/PageStyle.module.css'
export const ServicesPage = () => {
    return <>
        <div className={`${PageStyle.Page} ${ServicesPageStyle.Page}`} id='SERVICES'>
        <div className={`${PageStyle.Text}`}>A to Z Solutions with LakeZero</div>
            <div className={`${PageStyle.Note}`}>Services that are worth taking. Reach new heights with us. <br/>Only thing which can limit you is Imagination. Get what you can Imagine</div>
            <div className={`${PageStyle.Container} ${ServicesPageStyle.Container}`}>
                <div className={`${ServicesPageStyle.CardWrapper}`}>
                    <div className={`${ServicesPageStyle.CardBackground}`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${ServicesPageStyle.Card}`}>
                        <div className={`${ServicesPageStyle.Title}`}>
                            Music Mixing
                        </div>
                    </div>
                </div>

                <div className={`${ServicesPageStyle.CardWrapper}`}>
                    <div className={`${ServicesPageStyle.CardBackground}`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${ServicesPageStyle.Card}`}>
                        <div className={`${ServicesPageStyle.Title}`}>
                            Music Composing
                        </div>
                    </div>
                </div>

                <div className={`${ServicesPageStyle.CardWrapper}`}>
                    <div className={`${ServicesPageStyle.CardBackground}`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${ServicesPageStyle.Card}`}>
                        <div className={`${ServicesPageStyle.Title}`}>
                            Music Production
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
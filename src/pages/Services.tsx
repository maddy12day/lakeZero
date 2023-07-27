import ServicesPageStyle from '../style/ServicesPage.module.css'
import PageStyle from '../style/PageStyle.module.css'
export const ServicesPage = () => {
    const services = [
        'Music Production',
        ' Music Composition',
        'Music Mastering',
        'Lyrics',
        'Audio Dubbing',
        'Session Instruments',
        'Foley',
        'Background Score',
        'Album Art'
    ]
    return <>
        <div className={`${PageStyle.Page} ${ServicesPageStyle.Page}`} id='SERVICES'>
            <div className={`${PageStyle.ContainerColFlex}`} style={{ position: 'relative' }}>
                {/* <div className={`${PageStyle.Ribbon}`} >
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>

                </div> */}
                <div className={`${PageStyle.Text}`}>A to Z Solutions with LakeZero</div>
                <div className={`${PageStyle.Note}`}>Services that are worth taking. Reach new heights with us. <br />Only thing which can limit you is Imagination. Get what you can Imagine</div>
                <div className={`${ServicesPageStyle.CarouselContainer}`}>

                
                <div className={`${ServicesPageStyle.CarouselWrapper}`}>
                    <div className={`${ServicesPageStyle.Carousel}`}>
                        <div className={`${ServicesPageStyle.CardContainer}`}>

                            {services.map(service => <>
                                <div className={`${ServicesPageStyle.CardWrapper}`}>
                                    <div className={`${ServicesPageStyle.CardBackground}`}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={`${ServicesPageStyle.Card}`}>
                                        <div className={`${ServicesPageStyle.Title}`}>
                                            {service}
                                        </div>
                                    </div>
                                </div>
                            </>)}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
}
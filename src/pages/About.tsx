import AboutPageStyle from '../style/AboutPageStyle.module.css'
import aboutData from '../data/aboutData.json'
import PageStyle from '../style/PageStyle.module.css'

export const AboutPage = () => {
    return <>
        <div className={`${AboutPageStyle.Page} ${PageStyle.Page}`} id='ABOUT'>
            <div className={`${PageStyle.ContainerColFlex} ${AboutPageStyle.LeftSide}`}>
                {/* HEADING */}
                <div className={`${PageStyle.Text} ${AboutPageStyle.heading}`}>
                    About
                </div>

                {/* BULLET POINTS  */}

                <div className={` ${PageStyle.Note} ${AboutPageStyle.points}`}>
                    {
                        aboutData.map(items => (
                            <p>
                                {items.aboutDescription}
                            </p>
                        )
                        )
                    }
                </div>
            </div>
            <div className={`${PageStyle.ContainerColFlex} ${AboutPageStyle.RightSide}`}>
                <div className={`${AboutPageStyle.Card}`}>
                    <div className={`${AboutPageStyle.CardBackground}`}>
                        <img src='/src/assets/About.jpg'/>
                    </div>
                    <div className={`${AboutPageStyle.CardWrapper}`}>
                        <span className={`${PageStyle.nameStyle}`}>SUKRIT SHRIVASTAV</span>
                        <hr/>
                        <span>Composer | Music Producer</span>
                    </div>
                </div>
                <div className={`${AboutPageStyle.Card}`}>
                <div className={`${AboutPageStyle.CardBackground}`}>
                        <img src='src/assets/about.jpg'/>
                    </div>
                    <div className={`${AboutPageStyle.CardWrapper}`}>
                        <span className={`${AboutPageStyle.nameStyle}`}>ANIMESH SHUKLA</span>
                        <hr/>
                        <span>Music Producer | Guitarist</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}
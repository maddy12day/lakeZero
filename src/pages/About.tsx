import AboutPageStyle from '../style/AboutPageStyle.module.css'
import aboutData from '../data/aboutData.json'

export const AboutPage = ()=> {
    return <>
        <div className={`${AboutPageStyle.Page}`} id='ABOUT'>
            <div className={`${AboutPageStyle.leftSide}`}>
                {/* HEADING */}
                <div className={`${AboutPageStyle.heading}`}>
                <h1>About</h1>
                </div>

                {/* BULLET POINTS  */}

                <div className={`${AboutPageStyle.points}`}>
                {
                    aboutData.map(items=>(
                        <p>
                            {items.aboutDescription}
                        </p>
                    )
                    )
                }
                </div>
            </div>
            <div className={`${AboutPageStyle.rightSide}`}>
                <span className={`${AboutPageStyle.nameStyle}`}>SUKRIT SHRIVASTAV</span>
                <span className={`${AboutPageStyle.nameStyle}`}>ANIMESH SHUKLA</span>
            </div>
        </div>    
    </>
}
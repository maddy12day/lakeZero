import AboutPageStyle from '../style/AboutPageStyle.module.css'
import aboutData from '../data/aboutData.json'

export const AboutPage = () => {
    return <>
        <div className={`${AboutPageStyle.parentDiv}`} id='ABOUT'>
            <div className={`${AboutPageStyle.imageDiv} ${AboutPageStyle.blurEnable}`}></div>
            <div className={`${AboutPageStyle.aboutBody}`}>
                
                    <section className={`${AboutPageStyle.leftSection}`}>
                        <h1 className={`${AboutPageStyle.aboutHeading}`}>ABOUT</h1>
                        <article className={`${AboutPageStyle.aboutDesc}`}>
                        {aboutData.map(items=>(
                            <p>{items.aboutDescription}</p>
                        ))}
                        </article>
                    </section>
                    <section className={`${AboutPageStyle.aboutImg}`}>
                        <span className={`${AboutPageStyle.aboutOwner}`}>
                            SUKRIT SHRIVASTAV
                            <hr />
                            Composer|Music Producer
                        </span>
                        <span className={`${AboutPageStyle.aboutOwner}`}>
                            ANIMESH SHUKLA
                            <hr />
                            Music Producer|Guitarist
                        </span>
                    </section>
                
            </div>
        </div>
    </>
}
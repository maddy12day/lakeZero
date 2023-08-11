import AboutPageStyle from '../style/AboutPageStyle.module.css'
import aboutData from '../data/aboutData.json'

export const AboutPage = ({id}:{id:string}) => {
    return <>
        <div className={`${AboutPageStyle.parentDiv}`} id={id}>
            <div className={`${AboutPageStyle.imageDiv} ${AboutPageStyle.blurEnable}`}></div>
            <div className={`${AboutPageStyle.aboutBody}`}>
                
                    <section className={`${AboutPageStyle.leftSection}`}>
                        <h1 className={`${AboutPageStyle.aboutHeading}`}>ABOUT</h1>
                        <article className={`${AboutPageStyle.aboutDesc}`}>
                        {aboutData.map((items,index)=>(
                            <p key={index}>{items.aboutDescription}</p>
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
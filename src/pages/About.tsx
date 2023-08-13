import AboutPageStyle from '../style/AboutPageStyle.module.css'
import aboutData from '../data/aboutData.json'
import PageStyle from '../style/PageStyle.module.css'
export const AboutPage = ({ id }: { id: string }) => {
    return <>
        <div className={`${AboutPageStyle.parentDiv} ${PageStyle.Page}`} id={id}>
            <div className={`${AboutPageStyle.blurEnable}`}></div>
            <div className={`${AboutPageStyle.aboutBody}`}>
                <h1 className={`${AboutPageStyle.aboutHeading}`}>ABOUT</h1>
                <div className={`${PageStyle.Container} ${AboutPageStyle.DataSection}`}>
                    <article className={`${AboutPageStyle.aboutDesc}`}>
                        {aboutData.map((items, index) => (
                            <p key={index}>{items.aboutDescription}</p>
                        ))}
                    </article>
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
        </div>
    </>
}
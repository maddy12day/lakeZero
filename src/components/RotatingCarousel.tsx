import Styles from '../style/RotatingCarousel.module.css'
import WorkPageStyle from '../style/WorkPageStyle.module.css'
export const RotatingCarousel = ({ reverse = false }) => {
    const row1 = [
        "https://youtube.com/watch?v=3_DJLe54t2c",
        "https://youtube.com/watch?v=T5drLlke8Sg",
        "https://youtube.com/watch?v=w8CWyaWHSog",
        "https://youtube.com/watch?v=3aiwr_NCgn0",
        "https://youtube.com/watch?v=w8CWyaWHSog",
        "https://youtube.com/watch?v=FbrnNh_MocI"
    ];

    const getVideoThumbnail = (youtubeURL: string) => {
        let thumbnailUrl = "https://img.youtube.com/vi/" + youtubeURL.split("?v=")[1] + "/0.jpg"
        return thumbnailUrl
    }

    return (
        <div className={`${Styles.AppContainer}`}>
            <div className={`${Styles.Wrapper}`}>
                <div className={`${Styles.Marquee}`}>
                    <div className={`${reverse ? Styles.MarqueeGroup2 : Styles.MarqueeGroup}`}>
                        {row1.map((el) => (
                            <a href={el}>
                                <div className={`${WorkPageStyle.Card} ${WorkPageStyle.ImageGroup}`}>
                                    <div className={`${WorkPageStyle.CardImage}`}>
                                        <img className={`${Styles.Image}`} src={getVideoThumbnail(el)} />
                                    </div>
                                    {/* <span className={`${WorkPageStyle.CardTitle}`}>
                                        Abraca Dabra
                                    </span> */}
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className={`${reverse ? Styles.MarqueeGroup2 : Styles.MarqueeGroup}`}>
                        {row1.map((el) => (
                            <a href={el}>
                                <div className={`${WorkPageStyle.Card} ${WorkPageStyle.ImageGroup}`}>
                                    <div className={`${WorkPageStyle.CardImage}`}>
                                        <img className={`${Styles.Image}`} src={getVideoThumbnail(el)} />
                                    </div>
                                    {/* <span className={`${WorkPageStyle.CardTitle}`}>
                                        Abraca Dabra
                                    </span> */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

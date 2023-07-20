import Styles from '../style/RotatingCarousel.module.css'
import WorkPageStyle from '../style/WorkPageStyle.module.css'
export const RotatingCarousel = ({reverse=false}) => {
    const row1 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
    ];

    const row2 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    ];

    return (
        <div className={`${Styles.AppContainer}`}>
            <div className={`${Styles.Wrapper}`}>
                <div className={`${Styles.Marquee}`}>
                    <div className={`${reverse ? Styles.MarqueeGroup2 : Styles.MarqueeGroup}`}>
                        {row1.map((el) => (
                            <div className={`${WorkPageStyle.Card} ${WorkPageStyle.ImageGroup}`}>
                                <div className={`${WorkPageStyle.CardImage}`}>
                                    {/* <img src='src/assets/20220213_041556.jpg' /> */}
                                    <img className={`${Styles.Image}`} src={'src/assets/20220213_041556.jpg'} />
                                </div>
                                <span className={`${WorkPageStyle.CardTitle}`}>
                                    Abraca Dabra
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className={`${reverse ? Styles.MarqueeGroup2 : Styles.MarqueeGroup}`}>
                        {row1.map((el) => (
                            <div className={`${WorkPageStyle.Card} ${WorkPageStyle.ImageGroup}`}>
                                <div className={`${WorkPageStyle.CardImage}`}>
                                    <img className={`${Styles.Image}`} src={'src/assets/20220213_041556.jpg'} />
                                </div>
                                <span className={`${WorkPageStyle.CardTitle}`}>
                                    Abraca Dabra
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

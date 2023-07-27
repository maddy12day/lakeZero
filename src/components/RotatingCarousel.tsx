import Styles from '../style/RotatingCarousel.module.css'

interface dataType{
    imageUrl:string;
    url:string;
}
export const RotatingCarousel = ({ reverse = false, speed = 2, data=[{imageUrl:'',url:''}] }) => {

    return (
        <div className={`${Styles.CarouselContainer}`}>
            <div className={`${Styles.CarouselWrapper}`}>
                <div className={`${Styles.Carousel}`}>
                    <div className={`${reverse ? Styles.CarouselMarqueeReverse : Styles.CarouselMarquee} ${Styles['MarqueeSpeed_'+speed]}`}>
                        {data.map((el) => (
                            <a href={el.url} target='_blank'>
                                <div className={`${Styles.Card} ${Styles.ImageGroup}`}>
                                    <div className={`${Styles.CardImage}`}>
                                        <img className={`${Styles.Image}`} src={el.imageUrl} />
                                    </div>
                                    {/* <span className={`${Styles.CardTitle}`}>
                                        Abraca Dabra
                                    </span> */}
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className={`${reverse ? Styles.CarouselMarqueeReverse : Styles.CarouselMarquee} ${Styles['MarqueeSpeed_'+speed]}`}>
                        {data.map((el) => (
                            <a href={el.url} target='_blank'>
                                <div className={`${Styles.Card} ${Styles.ImageGroup}`}>
                                    <div className={`${Styles.CardImage}`}>
                                        <img className={`${Styles.Image}`} src={el.imageUrl} />
                                    </div>
                                    {/* <span className={`${Styles.CardTitle}`}>
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

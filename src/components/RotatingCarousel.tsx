import Styles from '../style/RotatingCarousel.module.css'

interface dataType {
    imageUrl: string;
    url: string;
}
export const RotatingCarousel = ({ reverse = false, speed = 2, data = [{ imageUrl: '', url: '' }] }) => {
    function returnCallback(cb: Function) { return cb() }
    return (
        <div className={`${Styles.CarouselContainer}`}>
            <div className={`${Styles.CarouselWrapper}`}>
                <div className={`${Styles.Carousel}`}>
                    {
                        returnCallback(() => {
                            const rows = []
                            for (let index = 0; index < 2; index++) {
                                rows.push(
                                    <div className={`${reverse ? Styles.CarouselMarqueeReverse : Styles.CarouselMarquee} ${Styles['MarqueeSpeed_' + speed]}`}>
                                        {data.map((el, index) => (
                                            <a href={el.url} target='_blank' key={index}>
                                                <div className={`${Styles.Card} ${Styles.ImageGroup}`}>
                                                    <div className={`${Styles.CardImage}`}>
                                                        <img className={`${Styles.Image}`} src={el.imageUrl} />
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>)
                            }
                            return rows;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

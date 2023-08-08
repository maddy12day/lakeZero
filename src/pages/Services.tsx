import ServicesPageStyle from '../style/ServicesPage.module.css'
import PageStyle from '../style/PageStyle.module.css'
import { useEffect } from 'react'
export const ServicesPage = () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // const cards = entry.target.getElementsByClassName(ServicesPageStyle.CardContainer);
            if (entry.isIntersecting) {
                    entry.target?.classList.add(ServicesPageStyle.CardAnimation);
                return;
            }
        });
    });

    useEffect(() => {
        observer.observe(document.getElementsByClassName(ServicesPageStyle.CardContainer)[0]);
        observer.observe(document.getElementsByClassName(ServicesPageStyle.CardContainer)[1]);
        observer.observe(document.getElementsByClassName(ServicesPageStyle.CardContainer)[2]);
    }, [])
    const services = [
        {
            bg: 'src/assets/587608.jpg',
            group: [
                'Music Production',
                ' Music Composition',
                'Music Mastering',
            ],
        },
        {
            bg: 'src/assets/service2.jpg',
            group: [
                'Lyrics',
                'Audio Dubbing',
                'Session Instruments',
            ],
        },
        {
            bg: 'src/assets/service3.jpg',
            group: [
                'Foley',
                'Background Score',
                'Album Art'
            ]
        }
    ]
    return <>
        <div className={`${PageStyle.Page} ${ServicesPageStyle.Page}`} id='SERVICES'>

            <div className={`${PageStyle.ContainerColFlex}`}>
                <div className={`${PageStyle.Title}`}>Services</div>
                <div className={`${PageStyle.ContainerColFlex} `} >
                    <div className={`${PageStyle.Note}`}>Services that are worth taking. Reach new heights with us. <br />Only thing which can limit you is Imagination. Get what you can Imagine</div>
                    {/* <div className={`${ServicesPageStyle.Circle}`}>
                        <hr className={`${ServicesPageStyle.Line}`}/>
                        <hr className={`${ServicesPageStyle.Line}`}/>
                        <hr className={`${ServicesPageStyle.Line}`}/>
                        <hr className={`${ServicesPageStyle.Line}`}/>
                        <hr className={`${ServicesPageStyle.Line}`}/>

                    </div> */}
                    <div className={`${PageStyle.Container} ${ServicesPageStyle.Container}`}>
                        {
                            services.map(service => <>
                                <div className={`${ServicesPageStyle.CardContainer}`}>
                                    <div className={`${ServicesPageStyle.CardWrapper}`}>
                                        <img src={service.bg} alt="" className={`${ServicesPageStyle.CardBackground}`} />
                                        <div className={`${PageStyle.ContainerColFlex} ${ServicesPageStyle.Card}`}>
                                            {service.group.map(service => <>
                                                <div className={`${PageStyle.Text}`}>
                                                    {service}
                                                </div>
                                            </>)}
                                        </div>
                                    </div>
                                </div>
                            </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}
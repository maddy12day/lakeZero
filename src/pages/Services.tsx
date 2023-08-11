import ServicesPageStyle from '../style/ServicesPage.module.css'
import PageStyle from '../style/PageStyle.module.css'
import { useEffect } from 'react'
export const ServicesPage = () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target?.classList.add(ServicesPageStyle.CardAnimation);
                return;
            }
        });
    });

    useEffect(() => {
        const cards = Array.from(document.getElementsByClassName(ServicesPageStyle.CardContainer))
        cards.forEach(card=>{
            observer.observe(card)
        })
    }, [])
    const services = [
        {
            bg: 'src/assets/587608.jpg',
            name: 'Music Production'
        },
        {
            bg: 'src/assets/service2.jpg',
            name: 'Lyrics',
        },
        {
            bg: 'src/assets/service3.jpg',
            name: 'Recording',
        },
        {
            bg: 'src/assets/service3.jpg',
            name: ' Music Composition',
        },
        {
            bg: 'src/assets/service3.jpg',
            name: 'Background Score',
        },
        {
            bg: 'src/assets/service3.jpg',
            name: 'Music Mastering',
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
                            services.map((service,index) => <>
                                <div className={`${ServicesPageStyle.CardContainer}`} key={index}>
                                    <div className={`${ServicesPageStyle.CardWrapper}`}>
                                        <img src={service.bg} alt="" className={`${ServicesPageStyle.CardBackground}`} />
                                        <div className={`${PageStyle.ContainerColFlex} ${ServicesPageStyle.Card}`}>
                                            <div className={`${ServicesPageStyle.Text}`}>
                                                {service.name}

                                            </div>
                                            <div className={`${ServicesPageStyle.CardFadeUp}`}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae aut eos omnis veniam ea eum ab perspiciatis rerum voluptates.
                                                <a href='' className={`${ServicesPageStyle.Link}`}>Learn More</a>
                                            </div>
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
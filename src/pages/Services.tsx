import ServicesPageStyle from '../style/ServicesPage.module.css'
import PageStyle from '../style/PageStyle.module.css'
import { useEffect } from 'react'
export const ServicesPage = ({id}:{id:string}) => {
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
            bg: 'src/assets/music_production.jpg',
            name: 'Music Production',
            text:"Turn creative visions into reality with expert music production. From composition to mixing, we craft immersive sonic experiences that captivate audiences."
        },
        {
            bg: 'src/assets/lyrics.jpg',
            name: 'Lyrics',
            text:"Craft compelling stories and emotions through expertly written lyrics. Our skilled writers bring depth and meaning to your music."
        },
        {
            bg: 'src/assets/recording.jpg',
            name: 'Recording',
            text:"Capture the magic of your music with top-tier recording services. Our studio offers professional quality and a comfortable creative environment."
        },
        {
            bg: 'src/assets/music_composition.jpg',
            name: ' Music Composition',
            text:"Ignite musical journeys with original composition. Our skilled composers create captivating melodies that resonate, enriching your project with unique artistry."
        },
        {
            bg: 'src/assets/background_score.jpg',
            name: 'Background Score',
            text:"Enhance visuals and emotions with captivating background scores. Our compositions enrich storytelling, immersing audiences in memorable cinematic experiences."
        },
        {
            bg: 'src/assets/music_mastering.png',
            name: 'Music Mastering',
            text:"Elevate your tracks with professional music mastering services. Achieve balanced, polished sound that stands out across all platforms. Unlock your music's potential."
        }
    ]
    return <>
        <div className={`${PageStyle.Page} ${ServicesPageStyle.Page}`} id={id}>
            <div className={`${PageStyle.ContainerColFlex}`}>
                <div className={`${PageStyle.Title}`}>Services</div>
                <div className={`${PageStyle.ContainerColFlex} `} >
                    <div className={`${PageStyle.Note}`}>Services that are worth taking. Reach new heights with us. <br />Only thing which can limit you is Imagination. Get what you can Imagine</div>
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
                                                {service.text}
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
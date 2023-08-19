import PageStyle from '../style/PageStyle.module.css'
import Style from '../style/ContactPageStyle.module.css'
import { Widget } from '@typeform/embed-react'
import { SocialMediaContainer } from '../components/SocialMediaContainer'
import mediaData from '../data/socialMediaIcon.json'
export const Contact = ({ id }: { id: string }) => {
    return (
        <>
            <div className={`${Style.Ribbon}`}>Get in Touch with us</div>
            <div className={`${PageStyle.Page} ${Style.Page}`} id={id}>
                <div className={`${PageStyle.ContainerColFlex} ${Style.Container}`}>
                    <div className={`${PageStyle.Title}`}>
                        Contact Us
                    </div>
                    <div className={`${PageStyle.Container} ${Style.FormContainer}`}>
                        <Widget id="h4tmeBNy" className={`my-form ${Style.Form}`} />
                        <div className={`${PageStyle.ContainerColFlex} ${Style.ContactInfo}`}>
                            <div className={PageStyle.Container}>
                                <img src='src/assets/location.png' title='Location Icon' className={Style.icon}/>
                                <div className={Style.Address}>
                                    <span>LakeZero Studios</span>
                                    <span>1301, Sheetal Vishal Dharmaraj,</span>
                                    <span>Marve Road, Mith Chowki, Opp. Girdhar Park,</span>
                                    <span>Malad West, Mumbai 400064.</span>
                                </div>
                            </div>
                            <SocialMediaContainer mediaUrl={mediaData} className={Style.SocialMedia}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

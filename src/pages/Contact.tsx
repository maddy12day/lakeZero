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
                    <div className={`${PageStyle.Container} ${Style.Container}`}>
                        <div className={`${PageStyle.ContainerColFlex} ${Style.ContactInfo}`}>
                            <div>
                                Animesh Shukla
                            </div>
                            <SocialMediaContainer mediaUrl={mediaData}/>
                        </div>
                        <Widget id="h4tmeBNy" className={`my-form ${Style.Form}`} />
                    </div>
                    {/* <div className={`${Style.Form}`}>
                    <label>Drop us a message</label>
                    <div className={`${Style.Name}`}>
                        <input type="text" placeholder="First Name" autoComplete="false" />
                        <input type="text" placeholder="Last Name" autoComplete="false" />
                    </div>
                    <input type="text" placeholder="Mobile" />
                    <input type="email" placeholder="name@company.com" pattern='[a-zA-Z\-\.]@[a-zA-Z].com'/>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <button id="send" className="gridCenter">Send</button>
                </div> */}
                </div>
            </div>
        </>
    )
}

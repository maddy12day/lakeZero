import PageStyle from '../style/PageStyle.module.css'
import Style from '../style/ContactPageStyle.module.css'
export const Contact = () => {
    return (
        <div className={`${PageStyle.Page} ${Style.Page}`}>
            <div className={`${PageStyle.Container} ${Style.ContactInfoContainer}`}>
                <div className={`${PageStyle.ContainerColFlex}`}>
                    <div className={`${Style.ContactInfo}`}>
                        <div>
                            <p>Animesh Shukla</p>
                            <p>business@lakezero.com</p>
                            <p>Address - <br /> Lorem ipsum dolor sit.<br /> Lorem ipsum dolor sit.<br />
                                Mumbai, Maharashtra <br />
                                India
                            </p>
                        </div>
                    </div>
                    <div className={`${Style.flexRow} ${Style.SocialMedia}`}>
                        <a href="https://www.instagram.com/lakezero" target="_blank" rel="noreferrer">
                            <img src='src/socialMedia/instagram.svg' height={'24px'} width={'24px'}/>
                            {/* <div className={`${Style.Media}`}> <FontAwesomeIcon icon={faInstagramSquare} /></div> */}
                            </a>
                    </div>
                </div>
                <div className={`${Style.Form}`}>
                    <label>Drop us a message</label>
                    <div className={`${Style.Name}`}>
                        <input type="text" placeholder="First Name" autoComplete="false" />
                        <input type="text" placeholder="Last Name" autoComplete="false" />
                    </div>
                    <input type="text" placeholder="Mobile" />
                    <input type="email" placeholder="name@company.com" pattern='[a-zA-Z\-\.]@[a-zA-Z].com'/>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <button id="send" className="gridCenter">Send</button>
                </div>
            </div>
        </div>
    )
}

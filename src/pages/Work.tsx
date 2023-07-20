import WorkPageStyle from '../style/WorkPageStyle.module.css'
import PageStyle from '../style/PageStyle.module.css'
export const WorkPage = ()=> {
    return <>
        <div className={`${PageStyle.Page} ${WorkPageStyle.Page}`} id='WORK'>
            <div className={`${WorkPageStyle.CardWrapper}`}>
            <div className={`${WorkPageStyle.Card}`}>
                <div className={`${WorkPageStyle.CardImage}`}>
                    <img src='src/assets/20220213_041556.jpg'/>
                </div>
                <span className={`${WorkPageStyle.CardTitle}`}>
                    Abraca Dabra
                </span>
            </div>
            <div className={`${WorkPageStyle.Card}`}>
                <div className={`${WorkPageStyle.CardImage}`}>
                    <img src='src/assets/20220213_041556.jpg'/>
                </div>
                <span className={`${WorkPageStyle.CardTitle}`}>
                    Abraca Dabra
                </span>
            </div> 
            <div className={`${WorkPageStyle.Card}`}>
                <div className={`${WorkPageStyle.CardImage}`}>
                    <img src='src/assets/20220213_041556.jpg'/>
                </div>
                <span className={`${WorkPageStyle.CardTitle}`}>
                    Abraca Dabra
                </span>
            </div> 
            <div className={`${WorkPageStyle.Card}`}>
                <div className={`${WorkPageStyle.CardImage}`}>
                    <img src='src/assets/20220213_041556.jpg'/>
                </div>
                <span className={`${WorkPageStyle.CardTitle}`}>
                    Abraca Dabra
                </span>
            </div> 
            <div className={`${WorkPageStyle.Card}`}>
                <div className={`${WorkPageStyle.CardImage}`}>
                    <img src='src/assets/20220213_041556.jpg'/>
                </div>
                <span className={`${WorkPageStyle.CardTitle}`}>
                    Abraca Dabra
                </span>
            </div> 
            <div className={`${WorkPageStyle.Card}`}>
                <div className={`${WorkPageStyle.CardImage}`}>
                    <img src='src/assets/20220213_041556.jpg'/>
                </div>
                <span className={`${WorkPageStyle.CardTitle}`}>
                    Abraca Dabra
                </span>
            </div> 
            </div>
        </div>    
    </>
}
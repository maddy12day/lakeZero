interface footerType{
    mediaUrl:string;
    className:string
}

import Style from '../style/Styles.module.css'

export const SocialMedia =({mediaUrl ,className}:footerType) => {
    return<>
    <div className={className}>
       <img className={`${Style.iconStyle}`} src={mediaUrl}/>
    </div>
    </>
}
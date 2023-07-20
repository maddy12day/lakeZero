import AboutPageStyle from '../style/AboutPageStyle.module.css'
import PageStyle from '../style/PageStyle.module.css'
export const AboutPage = ()=> {
    return <>
        <div className={`${PageStyle.Page}`} id='ABOUT'>
        <div className={`${AboutPageStyle.Circle1}`}/>
        <div className={`${AboutPageStyle.Circle2}`}/>
            About us    
        </div>    
    </>
}
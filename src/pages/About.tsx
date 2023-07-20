import AboutPageStyle from '../style/AboutPageStyle.module.css'

export const AboutPage = ()=> {
    return <>
        <div className={`${AboutPageStyle.Page}`} id='ABOUT'>
        <div className={`${AboutPageStyle.Circle1}`}/>
        <div className={`${AboutPageStyle.Circle2}`}/>
            About us    
        </div>    
    </>
}
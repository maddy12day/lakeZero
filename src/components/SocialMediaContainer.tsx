import Styles from '../style/Styles.module.css'

interface footerType {
    mediaUrl: {
        mediaIcon: string,
        mediaUrl: string,
        title:string
    }[];
}

export const SocialMediaContainer = ({ mediaUrl }: footerType) => {
    return <>
        <div className={`${Styles.SocialMediaContainer}`}>
            {mediaUrl?.map((item, index: number) => (
                <a href={item.mediaUrl} key={index} title={item.title}>
                    <div className={Styles.SocialMedia} >
                        <img src={item.mediaIcon} title={item.title}/>
                    </div>
                </a>
            ))}
        </div>
    </>
}
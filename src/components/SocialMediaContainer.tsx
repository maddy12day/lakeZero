import Styles from '../style/Styles.module.css'

interface footerType {
    mediaUrl: {
        mediaIcon: string,
        mediaUrl: string,
        title: string
    }[];
    className: string;
}

export const SocialMediaContainer = ({ mediaUrl, className = '' }: footerType) => {
    return <>
        <div className={`${Styles.SocialMediaContainer} ${className}`}>
            {mediaUrl?.map((item, index: number) => (
                <div className={`${Styles.SocialMedia}`} >
                    <a href={item.mediaUrl} key={index} title={item.title}>
                        <img src={item.mediaIcon} title={item.title} className={`${Styles.iconStyle}`}/>
                    </a>
                </div>
            ))}
        </div>
    </>
}
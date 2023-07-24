import WorkPageStyle from '../style/WorkPageStyle.module.css'
import { RotatingCarousel } from '../components/RotatingCarousel'
import PageStyle from '../style/PageStyle.module.css'
export const WorkPage = () => {
    const row1 = [
        "https://www.youtube.com/watch?v=QTJhCrIuIYc",
        "https://www.youtube.com/watch?v=-tWCh0FNn3w",
        "https://www.youtube.com/watch?v=Qua9AayODxc",
        "https://www.youtube.com/watch?v=QHtRfpGaph0",
        "https://www.youtube.com/watch?v=rLex-8-67RE",
        "https://www.youtube.com/watch?v=4EqPOuFn8-s",
    ];
    const row2 = [
        "https://www.youtube.com/watch?v=LCkqRkF2rxg",
        "https://www.youtube.com/watch?v=LCU5vV5Gb8w",
        "https://www.youtube.com/watch?v=D6fGO3mjT1g",
        "https://www.youtube.com/watch?v=QSGaJpKJ9Vk",
        "https://www.youtube.com/watch?v=CbKTTXjZSFE",
        "https://www.youtube.com/watch?v=REy-QoOjUuU",
    ];
    const row3 = [
        "https://www.youtube.com/watch?v=EwThZgRZNhE",
        "https://www.youtube.com/watch?v=FbrnNh_MocI",
        "https://youtube.com/watch?v=3_DJLe54t2c",
        "https://youtube.com/watch?v=T5drLlke8Sg",
        "https://youtube.com/watch?v=w8CWyaWHSog",
        "https://youtube.com/watch?v=3aiwr_NCgn0",
    ]

    const getVideoThumbnail = (youtubeURL: string) => {
        let thumbnailUrl = "https://img.youtube.com/vi/" + youtubeURL.split("?v=")[1] + "/0.jpg"
        return thumbnailUrl
    }
    return <>
        <div className={`${PageStyle.Page} ${WorkPageStyle.Page}`} id='WORK'>
            <div className={`${PageStyle.Text}`}>Works that will roll your mind</div>
            <div className={`${PageStyle.Container}`}>
                <RotatingCarousel reverse={true} speed={3} data={row1.map(el=>{return {imageUrl: getVideoThumbnail(el), url:el}})}/>
                <RotatingCarousel speed={4} data={row2.map(el=>{return {imageUrl: getVideoThumbnail(el), url:el}})}/>
                <RotatingCarousel reverse={true} speed={1} data={row3.map(el=>{return {imageUrl: getVideoThumbnail(el), url:el}})}/>
            </div>
        </div>
    </>
}
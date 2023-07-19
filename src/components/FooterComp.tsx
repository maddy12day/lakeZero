interface footerType{
    mediaUrl:string;
    className:string
}


export const SocialMedia =({mediaUrl ,className}:footerType) => {
    return<>
    <div className={className}>
       <img src={mediaUrl}/>
    </div>
    </>
}
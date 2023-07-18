type footerType={
    mediaUrl:string
}


export function FooterComp({mediaUrl}:footerType){
    return<>
       <img src={mediaUrl}/>
    </>
}
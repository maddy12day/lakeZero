import {ListGroup} from 'react-bootstrap'
import mediaIcon from '../data/socialMediaIcon.json'
import { FooterComp } from './FooterComp'

export const SocialMediaContainer = ()=> {
    return<>
        <ListGroup horizontal className={`gap-5 justify-content-center`}>
           {mediaIcon.map(item=>(
            <FooterComp{...item}/>
           ))} 
        </ListGroup>
    </>
}
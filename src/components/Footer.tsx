import {ListGroup} from 'react-bootstrap'
import mediaIcon from '../data/socialMediaIcon.json'
import { FooterComp } from './FooterComp'
import FooterStyle from '../style/Footer.module.css'

export function Footer(){
    return<>
        <ListGroup horizontal className={`${FooterStyle.toBottom} gap-5 justify-content-center`}>
           {mediaIcon.map(item=>(
            <FooterComp{...item}/>
           ))} 
        </ListGroup>
    </>
}
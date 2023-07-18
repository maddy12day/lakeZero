import {Container,Nav, Navbar as NavbarBs} from 'react-bootstrap'
import NavData from '../data/navData.json'
import NavStyle from '../style/NavStyle.module.css'
import { NavComp } from './NavComp'

export function Navbar(){
    return<>
        <NavbarBs collapseOnSelect expand="lg" className={`${NavStyle.custombackground} "bg-body-tertiary  "`}>
      <Container>
        <NavbarBs.Toggle aria-controls="responsive-navbar-nav lg" />
        <NavbarBs.Collapse id="responsive-navbar-nav" className='justify-content-center '>
          <Nav className="gap-5 ">
            {NavData.map(items=>(
            <NavComp{...items}/> 
            ))}
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
</>
}
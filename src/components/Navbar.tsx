import { Link } from 'react-router-dom'
import NavStyle from '../style/NavStyle.module.css'
import NavData from '../data/navData.json'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [isNavCollapsed, setNavCollapsed] = useState(false)
  return <>
    <div className={`${NavStyle.NavBar} ${isNavCollapsed ? NavStyle.NavBarCollapseGlassMorphism : ''}`}>

      <div className={`${NavStyle.NavBarWrapper}`}>
        <div className={`${NavStyle.NavBarToggle}`} onClick={() => setNavCollapsed(!isNavCollapsed)}></div>


          <div className={`${NavStyle.NavBarMenu} ${isNavCollapsed ? NavStyle.NavBarVisible : ''}`}>
            {NavData.map(item => (
              <div className={`${NavStyle.NavItem}`}>
                <Link to={`#${item.navlinkName}`}
                  key={item.navlinkName}
                  onClick={() =>
                    document.getElementById(item.navlinkName)?.scrollIntoView({ behavior: 'smooth' })
                  }>
                  {item.navlinkName}

                </Link>
              </div>
            ))}
          </div>
      </div>
    </div>
  </>
}

// export function Navbar() {
//   return <>
//     <NavbarBs collapseOnSelect expand="lg" className={`${NavStyle.custombackground} "bg-body-tertiary  "`}>
//       <Container>
//         <NavbarBs.Toggle aria-controls="responsive-navbar-nav lg" />
//         <NavbarBs.Collapse id="responsive-navbar-nav" className='justify-content-center '>
//           <Nav className="gap-5 ">
//             {NavData.map(items => (
//               <NavComp{...items} />
//             ))}
//           </Nav>
//         </NavbarBs.Collapse>
//       </Container>
//     </NavbarBs>
//   </>
// }
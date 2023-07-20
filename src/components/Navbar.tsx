import { Link } from 'react-router-dom'
import NavStyle from '../style/NavStyle.module.css'
import NavData from '../data/navData.json'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [toggleVisible, setToggle] = useState(false)
  const [isNavCollapsed, setNavCollapsed] = useState(false)

  useEffect(() => {
    if (window.outerWidth <= 780) {
      setToggle(true)
    }
    console.log(window.outerWidth)
  }, [toggleVisible, window.outerWidth])
  return <>
    <div className={`${NavStyle.NavBar} ${toggleVisible ? NavStyle.NavBarCollapse : ''} ${isNavCollapsed ? NavStyle.NavBarCollapseGlassMorphism : ''}`}>

      <div className={`${NavStyle.NavBarWrapper}`}>
        <div className={`${toggleVisible ? NavStyle.NavBarToggle : ''}`} onClick={() => setNavCollapsed(!isNavCollapsed)}></div>


          <div className={`${!toggleVisible ? NavStyle.NavBarMenu : isNavCollapsed ? NavStyle.NavBarCollapseMenu : NavStyle.NavBarHidden}`}>
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
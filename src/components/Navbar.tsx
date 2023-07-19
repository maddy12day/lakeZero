import NavData from '../data/navData.json'
import NavStyle from '../style/NavStyle.module.css'

export const Navbar = () => {
  return <>
    <div className={`${NavStyle.NavBar}`}>
      <div className={`${NavStyle.NavBarWrapper}`}>
        <div className={`${NavStyle.NavBarToggle}`}></div>
        <div className={`${NavStyle.NavBarCollapse}`}>
          {NavData.map(item => (
            <div className={`${NavStyle.NavItem}`}>
              {item.navlinkName}
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
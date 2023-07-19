
type navType = {
    navlinkName:string
}

export function NavComp({navlinkName}:navType){
    return<>
            <Nav.Link className='text-white fs-5 '>{navlinkName}</Nav.Link>

    </>
}
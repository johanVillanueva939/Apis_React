import './Nav.css'
import { NavLink } from 'react-router-dom'

export const Nav = ({ route, style, children }) => {
    return (
        <>
            <NavLink className={style} to={route}>{children}</NavLink>
        </>
    )
}

export default Nav
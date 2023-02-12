import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/dialog">Dialog</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/login">Logout</NavLink>

        </nav>
    )
}

export default Navigation;
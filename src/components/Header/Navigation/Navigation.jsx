import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.scss"
const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/" className={styles.navItem}>Home</NavLink>
            <NavLink to="/counter" className={styles.navItem}>Counter</NavLink>
            <NavLink to="/login" className={styles.navItem}>Login</NavLink>
            <NavLink to="/register" className={styles.navItem}>Registration</NavLink>

        </nav>
    )
}

export default Navigation;
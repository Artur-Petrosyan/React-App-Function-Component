import { useEffect, useRef } from "react"
import styles from "./Header.module.scss"
import Navigation from "./Navigation/Navigation"


const Header = () => {

    return(
    <div className={styles.container}>
       <Navigation />
    </div>
)
}

export default Header;
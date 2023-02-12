import styles from "./Header.module.scss"
import Navigation from "./Navigation/Navigation"


export const Header = () => {
return(
    <div className={styles.container}>
       <Navigation />
    </div>
)
}


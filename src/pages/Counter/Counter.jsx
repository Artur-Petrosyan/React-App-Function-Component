import { useState } from "react"
import Button from "../../ui-kit/Button/Button"
import styles from "./Counter.module.scss"
const Counter = () => {
const [count,setCount] = useState(0)
const increment = () => {
    setCount(count + 1)
}
const decrement = () => {
    setCount(count - 1)
}
    return (
        <div>
            <Button className={styles.btn} onClick={increment}>INCREMENT</Button>
            <Button className={styles.btn} onClick={decrement}>DECREMENT</Button>
            <h2 className={styles.h2}>{count}</h2>
        </div>
    )

}
export default Counter;
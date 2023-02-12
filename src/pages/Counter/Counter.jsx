import { useState } from "react"
import Button from "../../ui-kit/Button/Button"

const Counter = () => {
const [count,setCount] = useState(0)
const increment = () => {
    setCount(count + 1)
}
const decrement = () => {
    setCount(count - 1)
}
    return (
        <>
            <Button onClick={increment}>INCREMENT</Button>
            <Button onClick={decrement}>DECREMENT</Button>
            <h2>{count}</h2>
        </>
    )

}
export default Counter;
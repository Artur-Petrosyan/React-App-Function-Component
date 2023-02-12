import { useState } from "react"
import Button from "../../../ui-kit/Button/Button"
import Input from "../../../ui-kit/Input/Input"
import styles from "./Login.module.scss"
const Login = ({ }) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const onChangeLogin = (event) => {
        setLogin(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Input name='login'
                    className={styles.input}
                    placeholder="Login"
                    value={login}
                    onChange={onChangeLogin} />
                <Input name='password'
                    className={styles.input}
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword} />
                <div className={styles.btnContainer}>
                    <Button
                        disabled={!login || !password}
                        type='submit'
                        className={styles.btn}>
                        LOG IN
                    </Button></div>
                    <Button
                        disabled={!login || !password}
                        type='submit'
                        className={styles.btn}>
                        Create Account
                    </Button>
            </div>
        </div>

    )
}

export default Login;
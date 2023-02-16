import { useEffect, useRef, useState } from "react";
import Button from "../../../ui-kit/Button/Button";
import Input from "../../../ui-kit/Input/Input";
import styles from "./Register.module.scss"
const Register = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])
    
    const onChangeLogin = (event) => {
        setLogin(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = () => {
        setData([...data, { userName: login, userPassword: password }])
    }
    const user = JSON.stringify(data)
    localStorage.setItem("user", user)

    return (
        <div ref={divRef} className={styles.container}>
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
                        className={styles.btn}
                        onClick={onSubmit}
                    >
                        Create Account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Register;
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../../components/Header/Header";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import Counter from "../Counter/Counter";
import Home from "../Home/Home"
const AppLayout = () => {
    return (
        <>
            <BrowserRouter >
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppLayout;
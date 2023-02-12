import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home/Home"

const AppLayout = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element ={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppLayout;
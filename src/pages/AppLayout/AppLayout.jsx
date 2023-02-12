import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../../components/Header/Header";
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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppLayout;
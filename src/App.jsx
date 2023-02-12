import classNames from 'classnames/bind'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from "./App.module.scss"
import AppLayout from './pages/AppLayout/AppLayout'
const cx = classNames.bind(styles)
const App = () => {
return (
  <AppLayout />
)

}





export default App;

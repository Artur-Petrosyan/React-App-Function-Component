import classNames from 'classnames/bind'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from "./App.module.scss"
import { Header } from './components/Header/Header'
import Navigation from './components/Header/Navigation/Navigation'
import AppLayout from './pages/AppLayout/AppLayout'
const cx = classNames.bind(styles)
const App = () => {
  return (
    <div className="App">
      <AppLayout />

    </div>
  )

}





export default App;


import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'

function App() {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App

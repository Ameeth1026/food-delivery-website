import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/place order/PlaceOrder'
import Footer from './components/Footer/Footer'
import App_download from './components/App_download/App_download'
import { useState } from 'react'
import Login_popup from './components/Login_popup/Login_popup'

function App() {

const [showLogin,setShowLogin] = useState(false);

  return (
    
      <>

      {showLogin?<Login_popup setShowLogin={setShowLogin}/>:<></>}

      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <App_download/>
      <Footer/>
      </>
)
}

export default App

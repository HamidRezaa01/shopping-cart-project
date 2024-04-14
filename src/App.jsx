import { Routes, Route } from 'react-router-dom'
import NavBar from "./Components/Navigation/NavBar/NavBar"
import Shop from './pages/Shop'
import { CartProvider } from '../src/context/CartContext'

const App = () => {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App

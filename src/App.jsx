import { Routes,Route } from 'react-router-dom'
import NavBar from "./Components/Navigation/NavBar/NavBar"
import Shop from './pages/Shop'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Shop />} />
      </Routes>
    </>
  )
}

export default App

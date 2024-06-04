
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Products from './pages/Products'
import Cart from './pages/Cart'
import LoginSignUp from './pages/LoginSignUp'

function App() {
 
  return (
    <>
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<ShopCategory category="mens"/>}/>
              <Route path='/womens' element={<ShopCategory category="women"/>}/>
              <Route path='/kids' element={<ShopCategory category="kid"/>}/>
              <Route path='product' element={<Products/>}>
                  <Route path=':productId' element={<Products/>}/>
              </Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignUp/>}/>
          </Routes>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App

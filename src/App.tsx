
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Products from './pages/Products'
import Cart from './pages/Cart'
import LoginSignUp from './pages/LoginSignUp'
import Footer from './components/footer/Footer'
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'


function App() {
 
  return (
    <>
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<ShopCategory category="men" banner={men_banner} />}/>
              <Route path='/womens' element={<ShopCategory category="women" banner={women_banner} />}/>
              <Route path='/kids' element={<ShopCategory category="kid" banner={kids_banner} />}/>
              <Route path='product' element={<Products/>}>
                  <Route path=':productId' element={<Products/>}/>
              </Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignUp/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App

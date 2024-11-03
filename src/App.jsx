import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Products } from './Components/Products'
import { Footer } from './Components/Footer'
import { NotFound } from './Components/NotFound'
import { Details } from './Components/Details'
import { Blog } from './Components/Blog'

function App() {
  return (
   <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/blog/:productId' element={<Details/>}/>
    <Route path='/*' element={<NotFound/>}/>
    <Route path='/newblog' element={<Blog/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
   </div>
  )
}

export default App

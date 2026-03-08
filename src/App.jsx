import { useState } from 'react'
import Home from './component/Home'
import Phonepage from './component/Phone';
import Grocery from './component/Grocery';
import Fashion from './component/Fashion';
import Furniture from './component/Furniture';
import Productdetail from './component/Products';
import { BrowserRouter,Route,Routes} from "react-router";
import Searchpage from './component/Searchpage';
import Secondaryhome from './component/Secondaryhome';
import Footerpage from './component/Footerpage';
function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route element={<Footerpage/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route element={<Secondaryhome></Secondaryhome>}>
      <Route path='/phonepage' element={<Phonepage/>}></Route>
      <Route path='/grocery' element={<Grocery/>}></Route>
      <Route path='/fashion' element={<Fashion/>}></Route>
      <Route path='/furniture' element={<Furniture/>}></Route>
      <Route path="/products/detail/:id" element={<Productdetail/>}></Route>
      <Route path="/search/product" element={<Searchpage/>}></Route>
      </Route>
      </Route>
    </Routes>
   </BrowserRouter>
   {/* <Furniture/> */}
    </>
  )
}

export default App

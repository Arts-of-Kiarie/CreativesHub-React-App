import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
import Login from "./pages/login"
import SignUp from './pages/signup'
import Resources from './pages/resources';
import HireADesigner from './pages/hire-a-designer';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/resources' element={<Resources/>}/>
      <Route path='/hire-a-designer' element={<HireADesigner/>}/>
      <Route path='/hire a designer' element={<HireADesigner/>}/>
      <Route path='/hire-designer' element={<HireADesigner/>}/>
      <Route path='/hiring' element={<HireADesigner/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

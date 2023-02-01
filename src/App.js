//*REACT layers

import { Routes, Route} from 'react-router-dom';

//* COMPONENTS
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './components/sign-in/SignIn';
//* STYLES

const Shop = () => {
  
  return<div><h1>I am the shop</h1></div>
}


const  App = () => {

  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
    </Route>
  </Routes>
  )
}

export default App;

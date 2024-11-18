//*REACT layers

import { Routes, Route} from 'react-router-dom';

//* COMPONENTS
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import CheckOut from './routes/checkout/CheckOut';
//* STYLES


const  App = () => {

  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='shop/*' element={<Shop/>}/>
      <Route path='checkout' element={<CheckOut/>}/>
      <Route path='auth' element={<Authentication/>}/>
    </Route>
  </Routes>
  )
}

export default App;

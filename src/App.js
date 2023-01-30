//*REACT
import { Routes, Route} from 'react-router-dom';

//* COMPONENTS
import Home from './routes/home/Home.component';
//* STYLES




const  App = () => {

  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    
  </Routes>
  )
}

export default App;

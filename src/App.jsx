
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import {LocationsPage} from './pages/locations/LocationsPage';
import { Register } from './pages/Register/Register';
import { WrapperUseLocation } from './components/WrapperUseLocation';
import { WrapperHeaderShow } from './components/WrapperHeaderShow';
import { Login } from './pages/Login/Login';




function App() {
 
  return (
    <div className='App'>
    
    
      <Router>
        
        <WrapperHeaderShow />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/info' element={<AboutPage />} />
          <Route path='/locations' element={<LocationsPage />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>

        </Routes>
       <WrapperUseLocation />
         
      </Router> 
    
       
    </div>
  )
}

export default App

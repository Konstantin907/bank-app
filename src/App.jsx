
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { TeamPage } from './pages/team/TeamPage';
import {LocationsPage} from './pages/locations/LocationsPage';
import Header from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Copyrights } from './components/copyrights/Copyrights';


function App() {
 

  return (
    <>
    
    
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/info' element={<AboutPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/locations' element={<LocationsPage />} />
        </Routes>
        <Footer />
        <Copyrights />
      </Router> 
    
       
    </>
  )
}

export default App

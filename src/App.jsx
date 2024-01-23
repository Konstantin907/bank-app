
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { TeamPage } from './pages/team/TeamPage';
import {LocationsPage} from './pages/locations/LocationsPage';


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/info' element={<AboutPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/locations' element={<LocationsPage />} />
      </Routes>
    </Router>    
    </>
  )
}

export default App

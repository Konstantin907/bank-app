import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { LocationsPage } from './pages/locations/LocationsPage';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Credit } from './pages/credit-calc/Credit';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Layout component for displaying header and footer conditionally
const Layout = () => {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/login', '/register'];

  const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <main><Outlet /></main> 
      {showHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes with Layout */}
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/info' element={<AboutPage />} />
            <Route path='/locations' element={<LocationsPage />} />
            <Route path='/credit-calculator' element={<Credit />}/>
          </Route>

        </Routes>
      </Router> 
    </div>
  );
}

export default App;

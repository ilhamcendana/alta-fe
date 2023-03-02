/** Libs */
import { Navigate, Route, Routes, useNavigate, useNavigation, useRoutes } from 'react-router-dom';

/** Components */

/** Pages */
import Home from './pages/home';
import BurgerApp from './pages/burger';

/** Assets */
import './App.css';
import { useAuth } from 'hooks/auth';
import Login from 'pages/login';
import NotFound from 'pages/not-found';
import Navbar from 'components/navbar';
import About from 'pages/about';
import Help from 'pages/help';
import AboutDetail from 'pages/about/about-detail';
import Cookies from 'js-cookie';

export default function App() {
  // State  

  // hooks
  const { isLoggedIn, isLoggedInSet, isReady } = useAuth();
  const navigate = useNavigate();
  console.log(isLoggedIn)
  // Func
  const handleLogin = val => {
    Cookies.set("token", "123");
    isLoggedInSet(true);
    navigate('/');
  }
  // Handler        

  // useEffect  

  if (!isReady) return null;

  return (
    <div className="App">
      {isLoggedIn ?
        <>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/about/:id' element={<AboutDetail />} />
            <Route path='/help' element={<Help />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='*' element={<Navigate to='/not-found' replace />} />
          </Routes>
        </>
        :
        <Routes>
          <Route path='/login' element={<Login loginSet={handleLogin} />} />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
      }
    </div>
  );
}

// <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/burger' element={<BurgerApp />} />
//         {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
//       </Routes>



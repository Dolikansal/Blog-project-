import { BrowserRouter , Routes, Route, Navigate,useLocation } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './components/home';
import About from './components/about';
import Services from './components/service';
import Contact from './components/contact';
import CreatePost from './components/createpost';
import Footer from './components/footer';
import EditPost from './components/editpost';
import Signup from './components/signup';
import Login from './components/login';
const AppContent = () => {
  const location = useLocation();
  const isAuthenticated = () => localStorage.getItem("user") !== null;

  // Jin paths par Navbar NAHI dikhana unki list
  const hideNavbarPaths = ["/login", "/signup"];

  return (
    <>
      {/* Agar current path list mein nahi hai, tabhi Navbar dikhao */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/signup" />} />
        <Route path="/about" element={isAuthenticated() ? <About /> : <Navigate to="/signup" />} />
        <Route path="/services" element={isAuthenticated() ? <Services /> : <Navigate to="/signup" />} />
        <Route path="/contact" element={isAuthenticated() ? <Contact /> : <Navigate to="/signup" />} />
        <Route path="/create-post" element={isAuthenticated() ? <CreatePost /> : <Navigate to="/signup" />} />
      </Routes>

      {!hideNavbarPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Blog-project-'}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
/*<Route 
          path="/edit/:id" 
          element={isAuthenticated() ? <EditPost /> : <Navigate to="/signup" />} 
        /> */
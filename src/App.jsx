import { BrowserRouter , Routes, Route } from 'react-router-dom';
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
function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Blog-project-'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
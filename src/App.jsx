import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './components/home';
import About from './components/about';
import Services from './components/service';
import Contact from './components/contact';
import CreatePost from './components/createpost';
import Footer from './components/footer';
import EditPost from './components/editpost';
const Login = () => <div className="p-20 text-center text-3xl">Login Page</div>;

function App() {
  return (
    <BrowserRouter basename="/Blog-project">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
      <Footer />
    </Router>
    </BrowserRouter>
  );
}

export default App;
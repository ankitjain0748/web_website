import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Page from './home/Page';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './User/Index';
import About from './About/Index';
import Index from './Services/Index';
import Gallery from './Gallery/Gallery';
import Prot from './protfolio/Prot';
import BlogList from './Blog/Blog';
import ServicesSection from './Services/Index';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Page />}>
      </Route>
        <Route path='/sing_up' element={<User />}>
        </Route>
        <Route path='/about_us' element={<About />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
        <Route path='/services' element={<ServicesSection />}>
        </Route>
        <Route path='/gallery' element={<Gallery />}>
        </Route>
        <Route path='/blog' element={<BlogList />}>
        </Route>
        <Route path='/protfolio' element={<Prot />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

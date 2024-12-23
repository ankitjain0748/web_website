import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Page from './Home/Page';
import Page from './Main/Page';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './User/Index';
import About from './About/Index';
import Gallery from './Gallery/Gallery';
import BlogList from './Blog/Blog';
import ServicesSection from './Services/Index';
import Services2 from './Services/Services2';
import Services3 from './Services/Services3';
import Protfoli1 from './protfolio/Protfoli1';

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
        <Route path='/services2' element={<Services2 />}>
        </Route>
        <Route path='/services3' element={<Services3 />}>
        </Route>
        <Route path='/gallery' element={<Gallery />}>
        </Route>
        <Route path='/blog' element={<BlogList />}>
        </Route>
        <Route path='/protfolio' element={<Protfoli1 />}>
        </Route>
        <Route path='/protfolio1' element={<Protfoli1 />}>
        </Route>
        <Route path='/protfolio2' element={<Protfoli1 />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

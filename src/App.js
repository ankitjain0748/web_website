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
import BlogDetailPage from './Blog/Blogdetail';
import ServicesSection from './Services/Index';
import Services2 from './Services/Services2';
import Protfoli1 from './protfolio/Protfoli1';
import Protfoilo2 from './protfolio/Protfoilo2';
import Protfoli3 from "./protfolio/Protfoli3"

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

        <Route path='/gallery' element={<Gallery />}>
        </Route>

        <Route path='/blog' element={<BlogList />}>
        </Route>

        <Route path='/blog-page' element={<BlogDetailPage />}>
        </Route>

        <Route path='/protfolio' element={<Protfoli1 />}>
        </Route>

        <Route path='/portfoli2' element={<Protfoilo2 />}>
        </Route>

        <Route path='/portfoli3' element={<Protfoli3 />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// import Banner from "./Comonent/Banner/Banner";
// import Header from "./Comonent/Banner/header";
// import Navbar from "./Comonent/Navbar/Nav";
import { Route, Routes } from 'react-router-dom';
import './App.css'
import About from './pages/About';
import ContactPage from './pages/ContactPage';
// import ContactUs from "./Comonent/Contact/Contact";

import Home from "./pages/Home";
import Services from './pages/SuccessStories';

import Footer from "./Comonent/Footer/Footer";
function App() {
  return (
    <div>
      {/* <div className="backImg">
        <Navbar />
      </div>
      <ContactUs />
      <Footer /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/success' element={<Services />} />

      </Routes>
      <Footer />
      {/* <Home /> */}
    </div>
  );
}

export default App;

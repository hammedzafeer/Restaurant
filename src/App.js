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
import Admin from './pages/ADMIN/Admin';
// import LoadingBar from 'react-top-loading-bar';
// // import { useState } from 'react';
function App() {
  // const [progress, setProgress] = useState(0)

  return (
    <div>
      {/* <div className="backImg">
        <Navbar />
      </div>
      <ContactUs />
      <Footer /> */}
      {/* <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
        onLoaderFinished={() => setProgress(100)}
      /> */}
      <Routes>
      
      <Route path='/Admin' element={<Admin />} />
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

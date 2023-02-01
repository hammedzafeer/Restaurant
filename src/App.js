
import { Route, Routes } from 'react-router-dom';
import './App.css'
import About from './pages/About';
import ContactPage from './pages/ContactPage';

import Home from "./pages/Home";
import Services from './pages/SuccessStories';

import AdminBanner from './pages/ADMIN/AdminBanner'
import CreateBanner from './pages/ADMIN/AdminCreateBanner'
import EditBanner from './pages/ADMIN/AdminEditBanner';
import AdminContactIndex from './pages/ADMIN/AdminContactPage';
import EditContact from './pages/ADMIN/AdminEditContact';
import AdminServices from './Comonent/Admin/Component/Service/AdminServices';
import AdminServicesIndex from './pages/ADMIN/AdminServicesPage';
import AdminEditServicesIndex from './pages/ADMIN/AdminEditServicesPage';
import AdminDetailServicesIndex from './pages/ADMIN/AdminDetailServicesPage';
import AdminCreateServicesIndex from './pages/ADMIN/AdminCreateServicesPage';
import AdminReviewIndex from './pages/ADMIN/AdminReviewPage.';
import AdminCreateReviewIndex from './pages/ADMIN/AdminReviewCreatePage';
import AdminDetailReviewIndex from './pages/ADMIN/AdminReviewDetailPage';
import AdminEditReviewIndex from './pages/ADMIN/AdminReviewEditPage';

function App() {

  return (
    <div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/success' element={<Services />} />
        <Route path='/Admin' element={<AdminBanner />} />
        <Route path='/Admin/BannerEdit' element={<EditBanner />} />
        <Route path='/Admin/CreateBanner' element={<CreateBanner />} />
        <Route path='/Admin/Contact' element={<AdminContactIndex />} />
        <Route path='/Admin/Contact/ContactEdit' element={<EditContact />} />
        <Route path='/Admin/Services' element={<AdminServicesIndex />} />
        <Route path='/Admin/Services/EditServices' element={<AdminEditServicesIndex />} />
        <Route path='Admin/Services/DetailServices' element={<AdminDetailServicesIndex />} />
        <Route path='/Admin/Services/CreateServices' element={<AdminCreateServicesIndex />} />
        <Route path='/Admin/Reviews' element={<AdminReviewIndex />} />
        <Route path='/Admin/Reviews/CreateReview' element={<AdminCreateReviewIndex />} />
        <Route path='/Admin/Review/DetailReview' element={<AdminDetailReviewIndex />} />
        <Route path='/Admin/Review/EditReview' element={<AdminEditReviewIndex />} />





        
      </Routes>
    </div>
  );
}

export default App;

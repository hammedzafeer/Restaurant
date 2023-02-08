
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
// import AdminServices from './Comonent/Admin/Component/Service/AdminServices';
import AdminServicesIndex from './pages/ADMIN/AdminServicesPage';
import AdminEditServicesIndex from './pages/ADMIN/AdminEditServicesPage';
import AdminDetailServicesIndex from './pages/ADMIN/AdminDetailServicesPage';
import AdminCreateServicesIndex from './pages/ADMIN/AdminCreateServicesPage';
import AdminReviewIndex from './pages/ADMIN/AdminReviewPage.';
import AdminCreateReviewIndex from './pages/ADMIN/AdminReviewCreatePage';
import AdminDetailReviewIndex from './pages/ADMIN/AdminReviewDetailPage';
import AdminEditReviewIndex from './pages/ADMIN/AdminReviewEditPage';
import AdminLogin from './Comonent/Admin/Component/Login/Login';
import Apply from './pages/Apply';
import NoPage from './pages/NoPage';
import AdminListIndex from './pages/ADMIN/AdminRestaurantListPage';

function App() {

  return (
    <div>
      {/* exect */}
      <Routes>
        <Route exect path='/' element={<Home />} />
        <Route exect index element={<Home />} />
        <Route exect path='/home' element={<Home />} />
        <Route exect path='/about' element={<About />} />
        <Route exect path='/contact' element={<ContactPage />} />
        <Route exect path='/success' element={<Services />} />
        <Route exect path='/apply' element={<Apply />} />
        <Route exect path='/home/Admin' element={<AdminBanner />} />
        <Route exect path='/Admin' element={<AdminBanner />} />
        <Route exect path='/Admin/BannerEdit' element={<EditBanner />} />
        <Route exect path='/Admin/CreateBanner' element={<CreateBanner />} />
        <Route exect path='/Admin/Contact' element={<AdminContactIndex />} />
        <Route exect path='/Admin/Contact/ContactEdit' element={<EditContact />} />
        <Route exect path='/Admin/Services' element={<AdminServicesIndex />} />
        <Route exect path='/Admin/Services/EditServices' element={<AdminEditServicesIndex />} />
        <Route exect path='Admin/Services/DetailServices' element={<AdminDetailServicesIndex />} />
        <Route exect path='/Admin/Services/CreateServices' element={<AdminCreateServicesIndex />} />
        <Route exect path='/Admin/Reviews' element={<AdminReviewIndex />} />
        <Route exect path='/Admin/Reviews/CreateReview' element={<AdminCreateReviewIndex />} />
        <Route exect path='/Admin/Review/DetailReview' element={<AdminDetailReviewIndex />} />
        <Route exect path='/Admin/Review/EditReview' element={<AdminEditReviewIndex />} />
        <Route exect path='/Admin/Login' element={<AdminLogin />} />
        <Route exect path='/Admin/Restaurantlist' element={<AdminListIndex />} />

        <Route exect path='*' element={<NoPage />} />






      </Routes>
    </div>
  );
}

export default App;

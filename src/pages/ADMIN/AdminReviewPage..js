
import  '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'
import AdminReviews from '../../Comonent/Admin/Component/Review/AdminReview';
 
function AdminReviewIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="active" SignOut="" />
            <div className="main-contant">
                <MainAdmin />
                <AdminReviews />
            </div>
        </>
    );
}

export default AdminReviewIndex;
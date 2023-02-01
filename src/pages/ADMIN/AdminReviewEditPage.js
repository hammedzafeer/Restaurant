import  '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'
import AdminEditReview from '../../Comonent/Admin/Component/Review/AdminReviewEdit';

function AdminEditReviewIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="active" SignOut="" />
            <div className="main-contant">
                <MainAdmin />
                <AdminEditReview />
            </div>
        </>
    );
}

export default AdminEditReviewIndex;
import  '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import BannerEdit from '../../Comonent/Admin/Component/Banner/BannerEdit';
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'

function EditBanner() {
    return (
        <>
            <AdminNav Dashboard="" Banner="active" Contact="" Services="" Reviews="" SignOut="" />
            <div className="main-contant">
                <MainAdmin />
                <BannerEdit />
            </div>
        </>
    );
}

export default EditBanner;
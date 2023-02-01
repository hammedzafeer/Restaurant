import  '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import BannerCreate from '../../Comonent/Admin/Component/Banner/BannerCreateNew';
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'

function CreateBanner() {
    return (
        <>
            <AdminNav Dashboard="" Banner="active" Contact="" Services="" Reviews="" SignOut="" />
            <div className="main-contant">
                <MainAdmin />
                <BannerCreate />
            </div>
        </>
    );
}

export default CreateBanner;
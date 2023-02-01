import  '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'
import Banner from '../../Comonent/Admin/Component/Banner/Banner'

function MainBanner() {
    
    return (
        <>
            <AdminNav Dashboard="" Banner="active" Contact="" Services="" Reviews="" SignOut="" />
            <div className="main-contant">
                <MainAdmin />
                <Banner />
            </div>
        </>
    );
}

export default MainBanner;
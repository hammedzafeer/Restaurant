
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminRider from '../../../Comonent/Admin/Component/AdminRider/AdminRiderList';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminRiderIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="" itemvrities="" rider="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminRider />
            </div>
        </>
    );
}

export default AdminRiderIndex;
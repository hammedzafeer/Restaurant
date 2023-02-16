
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminItemVrities from '../../../Comonent/Admin/Component/ItemVrities/AdminItemVrities';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminItemVritiesIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="" itemvrities="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminItemVrities />
            </div>
        </>
    );
}

export default AdminItemVritiesIndex;
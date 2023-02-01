import  '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'
import AdminEditServces from '../../Comonent/Admin/Component/Service/AdminEditServices';

function AdminEditServicesIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="active" Reviews="" SignOut="" />
            <div className="main-contant">
                <MainAdmin />
                <AdminEditServces />
            </div>
        </>
    );
}

export default AdminEditServicesIndex;
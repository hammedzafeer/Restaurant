
import  '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminContact from '../../Comonent/Admin/Component/ContactUS/AdminContact';
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'

function AdminContactIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="active" Services="" Reviews="" SignOut="" />
            <div className="main-contant">
                <MainAdmin />
                <AdminContact />
            </div>
        </>
    );
}

export default AdminContactIndex;
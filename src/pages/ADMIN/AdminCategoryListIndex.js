
import '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'
import AdminCategoryList from '../../Comonent/Admin/Component/AdminCategory/AdminCategory';
    
function AdminCategoryListIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="" category="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminCategoryList />
            </div>
        </>
    );
}

export default AdminCategoryListIndex;

import '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminRestaurantList from '../../Comonent/Admin/Component/AdminRestaurantList/AdminRestaurantList';
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminListIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminRestaurantList />
            </div>
        </>
    );
}

export default AdminListIndex;
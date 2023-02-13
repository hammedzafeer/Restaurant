
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminOrderCompelete from '../../../Comonent/Admin/Component/AdminRestaurantOrder/AdminOrderCompelete';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminOrderCompeleteIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminOrderCompelete />
            </div>
        </>
    );
}

export default AdminOrderCompeleteIndex;
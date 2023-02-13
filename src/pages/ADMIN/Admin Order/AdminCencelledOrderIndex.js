
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminOrderCancelled from '../../../Comonent/Admin/Component/AdminRestaurantOrder/AdminOrderCencelled';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminCencelledOrderIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminOrderCancelled />
            </div>
        </>
    );
}

export default AdminCencelledOrderIndex;
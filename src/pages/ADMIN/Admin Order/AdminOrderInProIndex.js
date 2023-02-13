
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminOrderInProgress from '../../../Comonent/Admin/Component/AdminRestaurantOrder/AdminOrderInProgress';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminOrderInProgressIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminOrderInProgress />
            </div>
        </>
    );
}

export default AdminOrderInProgressIndex;
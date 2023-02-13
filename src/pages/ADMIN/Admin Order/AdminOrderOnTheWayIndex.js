
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminOrderOnTheWay from '../../../Comonent/Admin/Component/AdminRestaurantOrder/AdminOrderOnTheWay';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminOrderOnTheWayIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminOrderOnTheWay />
            </div>
        </>
    );
}

export default AdminOrderOnTheWayIndex;
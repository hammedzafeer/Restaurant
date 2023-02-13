
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminWaitingRider from '../../../Comonent/Admin/Component/AdminRestaurantOrder/AdminWaitingRider';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminWaitingRiderIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminWaitingRider />
            </div>
        </>
    );
}

export default AdminWaitingRiderIndex;
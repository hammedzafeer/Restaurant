
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminRestaurantOrder from '../../../Comonent/Admin/Component/AdminRestaurantOrder/AdminRestaurantOrder';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminRestaurantOrderIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminRestaurantOrder />
            </div>
        </>
    );
}

export default AdminRestaurantOrderIndex;
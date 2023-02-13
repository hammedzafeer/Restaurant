
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminNewOrder from '../../../Comonent/Admin/Component/AdminRestaurantOrder/AdminNewOrder';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminNewOrderIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminNewOrder />
            </div>
        </>
    );
}

export default AdminNewOrderIndex;
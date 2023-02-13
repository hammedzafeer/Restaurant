
import '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminRestaurantItem from '../../Comonent/Admin/Component/AdminRestaurantItem/AdminRestaurantItem';
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'
    
function AdminRestaurantItemIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="active"/>
            <div className="main-contant">
                <MainAdmin />
                <AdminRestaurantItem />
            </div>
        </>
    );
}

export default AdminRestaurantItemIndex;
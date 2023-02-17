import  '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import RestaurantEdit from '../../../Comonent/Admin/Component/AdminRestaurantList/RestaurantEdit';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'

function RestaurantEditIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="active"/>
            <div className="main-contant">
                <MainAdmin />
                <RestaurantEdit />
            </div>
        </>
    );
}

export default RestaurantEditIndex;
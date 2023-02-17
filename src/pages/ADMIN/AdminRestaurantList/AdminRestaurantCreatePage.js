import  '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import RestaurantCreate from '../../../Comonent/Admin/Component/AdminRestaurantList/RestaurantCreate';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'

function RestaurantCreateIndex() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="active"/>
            <div className="main-contant">
                <MainAdmin />
                <RestaurantCreate />
            </div>
        </>
    );
}

export default RestaurantCreateIndex;
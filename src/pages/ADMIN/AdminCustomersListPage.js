
import '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'
import AdminCustomersList from '../../Comonent/Admin/Component/AdminCustomersList/AdminCustomersList';

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'
// import Progress from '../../Comonent/User/ProgressBar/progress';

function AdminCustomerListIndex() {
    return (
        <>
            {/* <Progress /> */}
            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Customerslist="active" />
            <div className="main-contant">
                <MainAdmin />
                <AdminCustomersList />
            </div>
        </>
    );
}

export default AdminCustomerListIndex;
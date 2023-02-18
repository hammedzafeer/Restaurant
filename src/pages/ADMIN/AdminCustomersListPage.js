
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'
import AdminCustomersList from '../../Comonent/Admin/Component/AdminCustomersList/AdminCustomersList';

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'
// import Progress from '../../Comonent/User/ProgressBar/progress';

function AdminCustomerListIndex() {
  const [progress, setProgress] = useState(0);
    return (
        <>
            {/* <Progress /> */}
            <LoadingBar
                    color='#f11946'
                    height={4}
                    progress={progress}
                // onLoaderFinished={() => setProgress(0)}
                />

            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Customerslist="active" />
            <div className="main-contant">
                <MainAdmin />
                <AdminCustomersList setProgress={setProgress}/>
            </div>
        </>
    );
}

export default AdminCustomerListIndex;
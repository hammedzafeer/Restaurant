
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import AdminRestaurantList from '../../../Comonent/Admin/Component/AdminRestaurantList/AdminRestaurantList';
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'

function AdminRestaurantListIndex() {
    const [progress, setProgress] = useState(0);

    return (
        <>
            <LoadingBar
                color='#f11946'
                height={4}
                progress={progress}
            // onLoaderFinished={() => setProgress(0)}
            />

            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="active" />
            <div className="main-contant">
                <MainAdmin />
                <AdminRestaurantList setProgress={setProgress} />
            </div>
        </>
    );
}

export default AdminRestaurantListIndex;
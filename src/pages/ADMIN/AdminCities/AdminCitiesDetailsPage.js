
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import '../../../Comonent/Admin/Component/Admin/Admin.css'
import '../../../Comonent/Admin/Component/Admin/utilty.css'
import AdminCitiesDetails from '../../../Comonent/Admin/Component/AdminCities/AdminCityDetail';
import AdminNav from '../../../Comonent/Admin/Component/AdminNav/AdminNav'
import MainAdmin from '../../../Comonent/Admin/Component/Main/AdminMain'

function AdminCitiesDetailsIndex() {
    const [progress, setProgress] = useState(0);

    return (
        <>
            <LoadingBar
                color='#f11946'
                height={4}
                progress={progress}
            // onLoaderFinished={() => setProgress(0)}
            />

            <AdminNav Dashboard="" Banner="" Contact="" Services="" Reviews="" SignOut="" list="" Itemlist="" orderList="" itemvrities="" rider="" cities="active" />
            <div className="main-contant">
                <MainAdmin />
                <AdminCitiesDetails setProgress={setProgress}/>
            </div>
        </>
    );
}

export default AdminCitiesDetailsIndex;
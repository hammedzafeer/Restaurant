import MainAdmin from '../Main/AdminMain';
import './Admin.css'
import './utilty.css'
import AdminNav from '../AdminNav/AdminNav';
function AdminDashboard() {


    return (
        <div>
            <div className="admin_container">
                {/* <!-- ===== Navigation Bar Start ===== --> */}
                {/* <!-- ===== Navigation Bar End ===== --> */}
                <AdminNav />
                {/* <!-- ===== Dashboard Mein Contant Start ===== --> */}
                <MainAdmin />
                {/* <!-- ===== Dashboard Mein Contant End ===== --> */}
            </div>
        </div>
    );
}

export default AdminDashboard;
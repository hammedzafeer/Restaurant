import  '../../Comonent/Admin/Component/Admin/Admin.css'
import '../../Comonent/Admin/Component/Admin/utilty.css'

import AdminNav from '../../Comonent/Admin/Component/AdminNav/AdminNav'
import ContactFormEdit from '../../Comonent/Admin/Component/ContactUS/EditContactForm';
import MainAdmin from '../../Comonent/Admin/Component/Main/AdminMain'

function EditContact() {
    return (
        <>
            <AdminNav Dashboard="" Banner="" Contact="active" Services="" Reviews="" SignOut="" />
            <div className="main-contant">
                <MainAdmin />
                <ContactFormEdit />
            </div>
        </>
    );
}

export default EditContact;
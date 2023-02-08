import "./Login.css"
import login from '../../../../Img/login-img.png'

function AdminLogin() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="admin_login_container">
            <div className="admin_login_content">
                <div className="admin_login_img">
                    <img src={login} alt="" id="admin_Img" />
                </div>
                <form action="" onSubmit={handleSubmit} className="login_form">
                    <div className="login_form_content user">
                        <ion-icon name="person-circle"></ion-icon>
                        <input type="text"  placeholder="Username"/>
                    </div>
                    <div className="login_form_content password">
                        <ion-icon name="lock-closed"></ion-icon>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="login_form_content">
                        <input type="checkbox" name="" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
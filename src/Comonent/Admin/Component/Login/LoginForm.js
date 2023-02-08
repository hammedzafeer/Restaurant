import login from '../../../../Img/login-img.png'
import './LoginForm.css'
function LoginForm() {
    return ( 
        <section className="form_container flex flex-jc">
        <div className="adminLog flex flex-dc flex-jc">
          <div className="login-img">
            <img src={login} alt="" id="admin_Img" />
          </div>
          <form action="">
            <div className="form-login username">
              <i className="fa-solid fa-user"></i>
              <input type="text" name="" id="userid" placeholder="Username" required />
            </div>
            <div className="form-login password">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name="" id="pass" placeholder="Password" required minlength="8"/>
            </div>
            <div className="form-login remember">
              <input type="checkbox" name="" id="remem" />
              <label for="remem">Remember me</label>
            </div>
            <button type="submit" onClick="window.location.href='Admin.html';">Login</button>
          </form>
        </div>
      </section>
     );
}

export default LoginForm;
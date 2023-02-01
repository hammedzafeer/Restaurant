

function MainAdmin() {
    const toggleCLick = (e) => {
        let navigation = document.getElementById("NavId");
        let main = e.target.parentElement.parentElement.parentElement;
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    }
    return (
        <>
            <section className="topbar">
                <div className="toggle" >
                    <ion-icon name="menu-outline" onClick={toggleCLick}></ion-icon>
                </div>
                {/* <!-- search --> */}
                <div className="search">
                    <label htmlFor="">
                        <input type="search" placeholder="Search Here" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </label>
                </div>
                {/* <!-- admin --> */}
                <div className="admin">
                    <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                </div>
            </section>


        </>
    );
}

export default MainAdmin;
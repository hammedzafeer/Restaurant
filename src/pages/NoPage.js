import FooterComponent from "../Comonent/User/Footer/Footer";
import Navbar from "../Comonent/User/Navbar/Nav";

function NoPage() {
    return (
        <>
            <Navbar />
            <div className="pageNot" style={{
                margin: "7rem auto",
                width: "100%",
                textAlign: "center",
            }}>
                <h1 style={{
                    fontSize: "5rem",
                    letterSpacing: "2px",
                    fontWeight: "800",
                    paddingBottom: "0.6rem"
                }}>404</h1>
                <p style={{
                    fontSize: "2rem",
                    fontStyle: 'italic',
                    letterSpacing: '1px'
                }}>Page not found</p>
            </div>
            <FooterComponent />
        </>
    );
}

export default NoPage;
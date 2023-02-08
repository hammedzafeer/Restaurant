import Navbar from "../Comonent/User/Navbar/Nav";
import FooterComponent from '../Comonent/User/Footer/Footer'
import ApplyForm from "../Comonent/User/ApplyForm/Applyform";
import Progress from "../Comonent/User/ProgressBar/progress";


function Apply() {
    return (
        <>
        <Progress />
            <Navbar />
            <ApplyForm />
            <FooterComponent />
        </>
    );
}

export default Apply;
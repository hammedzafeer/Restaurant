import { useState } from 'react';
import './progress.css'

function Progress() {
    // let progress = document.getElementById("ProgressBar");
    let totalheight = document.body.scrollHeight - window.innerHeight;
    const [heght, setHeght] = useState(1);
    let progressStyle = {
        height: heght
    }
    window.onscroll = function () {
        let progressheight = (window.pageYOffset / totalheight) * 100;
        setHeght(progressheight + "%")
        // progress.style.height = progressheight + "%"
        // console.log(progress.style.height = progressheight + H +`%`);
        // console.log(progressheight + `%`);
    }
    return (
        <>
            {/* <!-- Progress Bar --> */}
            <div id="ProgressBar" style={progressStyle}></div>
            <div id="ScrollBar"></div>
        </>
    );
}

export default Progress;
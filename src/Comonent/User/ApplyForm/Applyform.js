import './ApplyForm.css'
function ApplyForm() {
    let focus = document.getElementsByClassName("focus");
    // for(let i = 0; i < focus.length; i++) {
    //     focus[i].onfocus = (elm) => {
    //         console.log(elm)
    //     }
    //     // console.log(focus[i])
    // }
    const ApplyFun = () => {
        for (let i = 0; i < focus.length; i++) {
            focus[i].onfocus = (elm => {
                // console.log(elm)
                let Target = elm.target;
                let parent = Target.parentElement;
                let Label = parent.querySelector("label");
                Target.classList.remove("valid")
                Label.style.top = "-5px"
            })
            focus[i].onblur = (elm) => {
                let Target = elm.target;
                // console.log(elm)
                // console.log(Target);
                let parent = Target.parentElement;
                let Label = parent.querySelector("label");
                if (Target.value == 0) {
                    Target.classList.add("valid")
                }
                if (Target.value == 0) {
                    Label.style.top = "50%"

                }
                else {
                    Label.style.top = "-5px"
                }
            }
        };
        setTimeout(ApplyFun, 2000)
    }
    ApplyFun()

    // console.log(focus[0])

    return (
        <>
            <div className="about_heading review_heading">
                <h2>Apply Form</h2>
                {/* <p>please call at least 24 hours in advance for catering orders</p> */}
            </div>
            <div className="apply_container">
                <div className="contant">
                    <form className="form-contant">
                        {/* <!-- basic Information --> */}
                        <section>
                            <h2 className="section-heading">Enter Your Information</h2>
                            <div className="flex">
                                <div className="col-6">
                                    <input type="text" required />
                                    <span></span>
                                    <label htmlFor=''>First Name</label>
                                </div>
                                <div className="col-6">
                                    <input type="text" required />
                                    <span></span>
                                    <label htmlFor="">Last Name</label>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="col-6">
                                    <input type="date" required />
                                    <span></span>
                                    <label htmlFor="" className="datelabel">Date Of Birth</label>
                                </div>
                                <div className="col-6">
                                    <select name="" id="" required>
                                        <option value="choice">Choice</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <span></span>
                                    <label htmlFor="" className="genderLabel">Gender</label>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="focus valid" id="cnic" required
                                        placeholder="99999-9999999-9" maxLength="15" />
                                    <span></span>
                                    <label htmlFor="" className="">CNIC</label>
                                </div>
                                <div className="col-6">
                                    <input type="text" id="phone" required className="focus valid" placeholder="0300-1234567" maxLength="12" />
                                    <span></span>
                                    <label htmlFor="">Phone No</label>
                                </div>
                                <div className="col-6">
                                    <input type="email" id="email" required className="focus valid" placeholder="example@gmail.com" />
                                    <span></span>
                                    <label htmlFor="">Email</label>
                                </div>
                                <div className="col-6">
                                    <select name="" id="" required>
                                        <option value="choice" >Choice</option>
                                        <option value="Chef" >Chef</option>
                                        <option value="Waiter">Waiter</option>
                                        <option value="Restaurant">Restaurant Manager</option>
                                        <option value="Dish">Dish washer</option>
                                    </select>
                                    <span></span>
                                    <label htmlFor="service" className="genderLabel">Service</label>
                                </div>
                                <div className="col-6">
                                    <select name="" id="" required>
                                        <option value="choice">List of City</option>
                                    </select>
                                    <span></span>
                                    <label htmlFor="" className="genderLabel">City</label>
                                </div>
                                <div className="col-12">
                                    <input type="text" required />
                                    <span></span>
                                    <label htmlFor="">Address</label>
                                </div>
                                <div className="col-12">
                                    <input type="file" />
                                    <span></span>
                                    <label htmlFor="" style={{top: "-20px"}}>CV / Resume</label>
                                </div>
                                <div className="col-6">
                                    <input type="text" className="focus valid" />
                                    <span></span>
                                    <label htmlFor="">Street (optional)</label>
                                </div>
                                <div className="col-6">
                                    <input type="number" className='focus valid' min="0" step="1" />
                                    <span></span>
                                    <label htmlFor="">Postal / Zip Code (optional)</label>
                                </div>
                            </div>
                        </section>

                        <div className="btn-section flex">
                            <button type="submit" className="btn">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default ApplyForm;
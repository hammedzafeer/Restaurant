import City from '../../Cities/Cities';
import './ContactForm.css'



// let focus = document.querySelectorAll(".focus");
// focus.forEach((e) => {

//     e.onfocus = (elm) => {
//         let Target = elm.target;
//         let parent = Target.parentElement;
//         let Label = parent.querySelector("label");
//         Target.classList.remove("valid")
//         Label.style.top = "-5px"

//     }
//     e.onblur = (elm) => {
//         let Target = elm.target;
//         // console.log(Target);
//         let parent = Target.parentElement;
//         let Label = parent.querySelector("label");
//         if (Target.value === 0) {
//             Target.classList.add("valid")
//         }
//         if (Target.value === 0) {
//             Label.style.top = "50%"

//         }
//         else {
//             Label.style.top = "-5px"
//         }
//     }
// })

// let cnic = document.querySelector("#cnic");
// cnic.addEventListener("input", () => {
//     let text = "";
//     if (cnic.value.length == 5 || cnic.value.length == 13) {
//         cnic.value += "-";
//     }
// })
// let phone = document.querySelector("#phone");
// phone.addEventListener("input", () => {
//     let text = "";
//     if (phone.value.length == 4) {
//         phone.value += "-";
//     }
// })
// function Input() {
// let inp = document.querySelectorAll("input");
// let submit = document.querySelectorAll("button");
// for(let i = 0; i < inp.length; i++) {
//     let inpVal = inp[i].value;
//     if(inpVal.length !== 0) {
//         submit.classList.remove("sub");
//     }
//     else{
//         submit.classList.add("sub");

//     }

// }
// }
// // Input()
// setInterval(Input, 1000);


function ContactForm() {
    const handleSubmit = (e) => {
        console.log("OK")
        e.preventDefault();
    }
    // const city = ["Rawalpindi", "Islamabad", "Lahore", "Karachi"]
    // console.log(city);
    return (
        <div className="contact_form_container">
            <div className="contant">

                <form className="form-contant" onSubmit={handleSubmit}>
                    <section>
                        <h2 className="section-heading">Contact US</h2>
                        <div className="flex">
                            <div className="col-6">
                                <input type="text" required />
                                <span></span>
                                <label htmlFor="">First Name</label>
                            </div>
                            <div className="col-6">
                                <input type="text" required />
                                <span></span>
                                <label htmlFor="">Last Name</label>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="col-6">
                                <input type="text" id="phone" required className="focus valid" pattern="[0-9]{4}-[0-9]{7}" placeholder="0300-1234567" maxLength={12} />
                                <span></span>
                                <label htmlFor="">Phone No</label>
                            </div>
                            <div className="col-6">
                                <input type="text" id="email" required className="focus valid" placeholder="example2gmal.com" />
                                <span></span>
                                <label htmlFor="">Email</label>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="col-6">
                                <select name="" id="" required>
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
                                {/* <input type="search" name="" id="" /> */}
                                    <option value="list" >List of City</option>
                                    <City />
                                </select>
                                <span></span>
                                <label htmlFor="service" className="genderLabel">City</label>
                            </div>
                            {/* <div className="col-6">
                                <input list='browser' />
                                <datalist id='browser'>
                                    <City />
                                </datalist>
                                <span></span>
                                <label htmlFor="service" className="genderLabel">City</label>
                            </div> */}

                        </div>

                        <div className="flex">
                            <div className="col-12">
                                <textarea style={{ height: "36px" }} name="" id="" className="focus valid" required></textarea>
                                <span></span>
                                <label htmlFor="">Message</label>
                            </div>
                        </div>

                    </section>

                    <div className="btn-section flex">
                        <button type="submit" className="btn">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default ContactForm;
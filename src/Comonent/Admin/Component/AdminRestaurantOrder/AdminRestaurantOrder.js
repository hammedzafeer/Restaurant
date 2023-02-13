import { Link } from 'react-router-dom';
import './AdminRestaurantOrder.css'

function AdminRestaurantOrder() {

    const Contact = []



    const handleContact = (e) => {
        let ID = e.target.parentElement.id;
        console.log(ID);
        Contact.map((element) => {
            if (ID == element.Id) {
                let contactEdit = localStorage.getItem("Contacts");
                let contactObj = [];
                if (contactEdit == null) {
                    contactObj = [];
                }
                else {
                    contactObj = [];
                    localStorage.setItem("Contacts", JSON.stringify(contactObj))
                }
                let contactInfo = {
                    id: element.Id,
                    sName: element.serviceName,
                    name: element.name,
                    contact: element.contact,
                    email: element.email,
                    message: element.message
                }
                contactObj.push(contactInfo)
                localStorage.setItem("Contacts", JSON.stringify(contactObj))
                console.log(contactObj);
            }
        })
    }
    return (
        <>
            <section className="details" id="contact">
                <div className="adminDetails">
                    <div className="data-header">
                        <h2 className="heading">Order List</h2>
                        {/* <Link to="/Admin/RestaurantCreate" className="btn">Create New</Link> */}
                    </div>
                    <div className="orderItem_Container">
                        <div className="orderItem_Cotent">
                            <Link to="/Admin/OrderList/NewOrder" className="orderItem">
                                <h5 className='orderItem_name'>New Orders</h5>
                                <p className='orderItem_price'>70</p>
                            </Link>
                            <Link to="/Admin/OrderList/OrderInPro" className="orderItem">
                                <h5 className='orderItem_name'>Orders in progress</h5>
                                <p className='orderItem_price'>70</p>
                            </Link>
                            <Link to="/Admin/OrderList/WaitingRider" className="orderItem">
                                <h5 className='orderItem_name'>Waiting for rider</h5>
                                <p className='orderItem_price'>70</p>
                            </Link>
                            <Link to="/Admin/OrderList/Orderontheway" className="orderItem">
                                <h5 className='orderItem_name'>Order on the way</h5>
                                <p className='orderItem_price'>70</p>
                            </Link>
                            <Link to="/Admin/OrderList/CompeleteOrder" className="orderItem">
                                <h5 className='orderItem_name'>Completed Orders</h5>
                                <p className='orderItem_price'>70</p>
                            </Link>
                            <Link to="/Admin/OrderList/CancelOrder" className="orderItem">
                                <h5 className='orderItem_name'>Cancelled Orders</h5>
                                <p className='orderItem_price'>70</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdminRestaurantOrder;
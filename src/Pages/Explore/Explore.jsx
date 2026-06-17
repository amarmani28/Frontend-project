import "./Explore.css";
import {useContext, useState} from "react";
import {AppContext} from "../../Context/AppContext.jsx";
import DisplayCategory from "../../Component/DisplayCategory/DisplayCategory.jsx";
import DisplayItems from "../../Component/DisplayItems/DisplayItems.jsx";
import CustomerForm from "../../Component/CustomerForm/CustomerForm.jsx";
import CartItems from "../../Component/CartItems/CartItems.jsx";
import CartSummary from "../../Component/CartSummary/CartSummary.jsx";

const Explore = () => {
    const {categories}=useContext(AppContext);
 const [selectedCategory, setSelectedCategory] = useState("");
 const [customerName, setCustomerName] = useState("");
 const [mobileNumber, setMobileNumber] = useState("");
    return (
        <div className="explore-container text-light">


            <div className="left-column">

                <div className="first-column" style={{overflowY:'auto'}}>
                    <DisplayCategory
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        categories={categories}/>
                </div>

                <hr className="horizontal"/>

                <div className= "second-column" style= {{overflowY: 'auto'}}>
                  <DisplayItems selectedCategory={selectedCategory}/>
                </div>

            </div>



            <div className="right-column">

                <div className="costumer-form-container" style={{height:'15%'}}>
                    <CustomerForm
                    customerName={customerName}
                    mobileNumber={mobileNumber}
                    setCustomerName={setCustomerName}
                    setMobileNumber={setMobileNumber}
                    />
                </div>

                <hr className="my-3 text-light "/>

                <div className="cart-items-container" style={{height:'55%', overflowY:'auto'}}>
                    <CartItems/>
                </div>

                <div className="cart-summary horizontal" style={{height:'40%'}}>
                    <CartSummary
                        customerName={customerName}
                        mobileNumber={mobileNumber}
                        setCustomerName={setCustomerName}
                        setMobileNumber={setMobileNumber}
                    />
                </div>

            </div>

        </div>
    )
}

export default Explore;
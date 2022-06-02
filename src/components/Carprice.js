import React, { Component } from 'react'
// import Navbar from './Navbar';
// import Footer from './Footer';
const predict = () => {

}
const prediction = () => {

}
export default class Carprice extends Component {
    render() {
        return (
            <div className="row">

                <div className="container text-center p-1 col-md-8 col-sm-10 col-xs-10 mb-1 text-white">

                    <form action='/carprice' method="post">
                        <h1 className="h-primary" >CAR Price Predictive analysis</h1>
                        <hr/>
                        <h3 className="mb-0 ">Year of Purchase</h3>
                        <input id="first" className="p-1  col-10  col-md-8 col-sm-10 col-xs-10 mb-1" name="Year" type="number " />
                        <h3 className="mb-0 ">Showroom Price?(In lakhs)</h3>
                        <input id="second" className="p-1  col-10  col-md-8 col-sm-10 col-xs-10 mb-1" name="Present_Price" required="required" />
                        <h3 className="mb-0 ">Kilometers Drived?</h3>
                        <input id="third" className="p-1  col-10  col-md-8 col-sm-10 col-xs-10 mb-1" name="Kms_Driven" required="required" />
                        <h3 className="mb-0">Past owners count(0 to 3) ?</h3>
                        <input id="fourth" className="p-1  col-10  col-md-8 col-sm-10 col-xs-10 mb-1" name="Owner" required="required" />

                        <h3 className="mb-0 text-white">Fuel type</h3>
                        <select name="Fuel_Type_Petrol" id="fuel" className="p-2  col-10 col-md-8 col-sm-10 col-xs-10 mb-1" required="required">
                            <option className="p-2  col-10 col-md-8 col-sm-10 col-xs-10 mb-1" value="Petrol">Petrol</option>
                            <option className="p-2  col-10 col-md-8 col-sm-10 col-xs-10 mb-1" value="Diesel">Diesel</option>
                            <option className="p-2  col-10 col-md-8 col-sm-10 col-xs-10 mb-1" value="CNG"   >CNG</option>
                        </select>

                        <h3 className="mb-0">Are you A Dealer or Individual</h3>
                        <select name="Seller_Type_Individual" id="resea" className="p-2  col-10 col-md-8 col-sm-10 col-xs-10 mb-1" required="required">
                            <option value="Dealer"    >Dealer</option>
                            <option value="Individual">Individual</option>
                        </select>

                        <h3 className="mb-0">Transmission type</h3>
                        <select name="Transmission_Mannual" id="research" className="p-2  col-10 col-md-8 col-sm-10 col-xs-10 mb-1" required="required">
                            <option value="Mannual"  >Manual Car</option>
                            <option value="Automatic">Automatic Car</option>
                        </select>
                        <hr/>
                        <p >Calculate the Selling Price</p>
                        <button className="btn btn-success m-2 " id="sub" type="submit ">submit</button>
                    </form>
                    <h3>{prediction} lakhs</h3>
                    <button className="btn btn-outline-success m-2 " onclick={predict} type="">predict again</button>


                </div>

            </div>
        )
    }
}


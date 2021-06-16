import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import { useForm } from "react-hook-form";
import { PriceFormat } from "../../components/constant";
import BillingApi from "../../api/BillingApi";
import { isAuthenticated } from "../../auth";
const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const cart = JSON.parse(localStorage.getItem("cart"));
  const total = JSON.parse(localStorage.getItem("total"));

  const { user } = isAuthenticated();
  const onSubmit = async (res) => {
    // res.total = total;
    // res.user = null;
    // res.status = "Đặt hàng";
    // res.date = Date.now();
    // res.item = cart;
    // await BillingApi.add(res);
    // // <Redirect to="/thanks" />;
    // localStorage.removeItem('cart');
    // localStorage.removeItem('total');
    // window.location = "/thanks";
    console.log(res);
    if (user === undefined) {
      res.total = total;
      res.user = null;
      res.status = "Đặt hàng";
      res.date = Date.now();
      res.item = cart;
      const { data: req } = await BillingApi.add(res);
      sessionStorage.setItem("billId", req._id);
      // <Redirect to="/thanks" />;
      localStorage.removeItem("cart");
      localStorage.removeItem("total");
      window.location = "/thanks";
    } else {
      res.total = total;
      res.user = user._id;
      res.status = "Đặt hàng";
      res.date = Date.now();
      res.item = cart;
      const { data: req } = await BillingApi.add(res);
      sessionStorage.setItem("billId", req._id);
      // <Redirect to="/thanks" />;
      localStorage.removeItem("cart");
      localStorage.removeItem("total");
      window.location = "/thanks";
    }
  };

  return (
    <div>
      <div>
        <section className="hero">
          <div className="container">
            {/* Breadcrumbs */}
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="breadcrumb-item active">Checkout </li>
            </ol>
            {/* Hero Content*/}
            <div className="hero-content pb-5 text-center">
              <h1 className="hero-heading">Checkout</h1>
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  <p className="lead text-muted">
                    Please fill in your address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Checkout*/}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="block">
                    {/* Invoice Address*/}
                    <div className="block-header">
                      <h6 className="text-uppercase mb-0">Invoice address </h6>
                    </div>
                    <div className="block-body">
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label className="form-label" htmlFor="fullname">
                            Full Name
                          </label>
                          <input
                            {...register("fullname")}
                            className="form-control"
                            type="text"
                            name="fullname"
                            placeholder="Joe Black"
                            id="fullname"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label className="form-label" htmlFor="invoice_email">
                            Email Address
                          </label>
                          <input
                            {...register("email")}
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="joe.black@gmail.com"
                            id="invoice_email"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            htmlFor="invoice_street"
                          >
                            Street
                          </label>
                          <input
                            {...register("street")}
                            className="form-control"
                            type="text"
                            name="street"
                            placeholder="123 Main St."
                            id="invoice_street"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label className="form-label" htmlFor="invoice_city">
                            City
                          </label>
                          <input
                            {...register("city")}
                            className="form-control"
                            type="text"
                            name="city"
                            placeholder="City"
                            id="invoice_city"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label
                            className="form-label"
                            htmlFor="invoice_postcode"
                          >
                            Postcode
                          </label>
                          <input
                            {...register("postcode")}
                            className="form-control"
                            type="text"
                            name="postcode"
                            placeholder="Postal code"
                            id="invoice_postcode"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label className="form-label" htmlFor="invoice_state">
                            State
                          </label>
                          <input
                            {...register("state")}
                            className="form-control"
                            type="text"
                            name="state"
                            placeholder="State"
                            id="invoice_state"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label className="form-label" htmlFor="invoice_phone">
                            Phone Number
                          </label>
                          <input
                            {...register("phone")}
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            id="invoice_phone"
                          />
                        </div>
                      </div>
                      {/* /Invoice Address*/}
                    </div>
                  </div>
                  <div className="mb-5 d-flex justify-content-between flex-column flex-lg-row">
                    <a className="btn btn-link text-muted" href="/#/cart">
                      {" "}
                      <i className="fa fa-angle-left mr-2" />
                      Back{" "}
                    </a>
                    <button className="btn btn-dark" type="submit">
                      Submitttt
                      <i className="fa fa-angle-right ml-2" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="block mb-5">
                  <div className="block-header">
                    <h6 className="text-uppercase mb-0 ml-2 font-bold">
                      Order Summary
                    </h6>
                  </div>
                  <div className="block-body bg-light pt-1 p-4">
                    <p className="text-sm">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    <ul className="order-summary mb-0 list-unstyled">
                      <li className="order-summary-item">
                        <span>Order Subtotal </span>
                        <span className="subtotal">
                          {PriceFormat(total - 35000)}
                        </span>
                      </li>
                      <li className="order-summary-item">
                        <span>Shipping and handling</span>
                        <span className="shipfee">{PriceFormat(35000)}</span>
                      </li>
                      <li className="order-summary-item">
                        <span>Tax</span>
                        <span>$0.00</span>
                      </li>
                      <li className="order-summary-item border-0">
                        <span>Total</span>
                        <strong className="order-summary-total">
                          {PriceFormat(total)}
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;

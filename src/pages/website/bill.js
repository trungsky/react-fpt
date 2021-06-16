import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BillingApi from "../../api/BillingApi";
import { PriceFormat } from "../../components/constant";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../auth";
const BillPage = () => {
  const { idBill } = useParams();
  const [bill, setBill] = useState({});
  const [billProduct, setBillProduct] = useState([]);

  useEffect(() => {
    const getBillDetails = async () => {
      const { data: bill } = await BillingApi.get(idBill);
      setBill(bill);
      setBillProduct(bill.item);
      console.log(billProduct);
    };
    getBillDetails();
  }, []);

  const { user } = isAuthenticated();
  const date = new Date(bill.date);
  const dateReg = new Date(user.createdAt);

  const datetime =
    date.getHours() +
    ":" +
    date.getMinutes() +
    " " +
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear();

  return (
    <div>
      <div>
        <section className="hero">
          <div className="container">
            {/* Breadcrumbs */}
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="customer-orders.html">Orders</a>
              </li>
              <li className="breadcrumb-item active">Order {bill.id}</li>
            </ol>
            {/* Hero Content*/}
            <div className="hero-content pb-5 text-center">
              <h1 className="hero-heading">Order {bill.id}</h1>
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  <p className="lead text-muted">
                    Order {bill.id} was placed on <strong>{datetime}</strong>{" "}
                    and is currently <strong>{bill.status}</strong>.
                  </p>
                  <p className="text-muted">
                    If you have any questions, please feel free to{" "}
                    <Link to="/contact">contact us</Link>, our customer service
                    center is working for you 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-9">
                <div className="cart">
                  <div className="cart-wrapper">
                    <div className="cart-header text-center">
                      <div className="row">
                        <div className="col-6">Item</div>
                        <div className="col-2">Price</div>
                        <div className="col-2">Quantity</div>
                        <div className="col-2">Total</div>
                      </div>
                    </div>
                    <div className="cart-body">
                      {/* Product*/}
                      {billProduct.map((product) => {
                        return (
                          <div className="cart-item">
                            <div className="row d-flex align-items-center text-center">
                              <div className="col-6">
                                <div className="d-flex align-items-center">
                                  <Link to={`/products/${product.id}`}>
                                    <img
                                      className="cart-item-img"
                                      src={product.photo}
                                    />
                                  </Link>
                                  <div className="cart-title text-left">
                                    <Link
                                      className="text-uppercase text-dark"
                                      to={`/products/${product.id}`}
                                    >
                                      <strong>{product.name}</strong>
                                    </Link>
                                    <br />
                                    {/* <span className="text-muted text-sm">
                                      Size: ${"{"}
                                      product.size
                                      {"}"}
                                    </span> */}
                                  </div>
                                </div>
                              </div>
                              <div className="col-2">
                                {PriceFormat(product.price)}
                              </div>
                              <div className="col-2">{product.quantity}</div>
                              <div className="col-2 text-center">
                                {PriceFormat(product.price * product.quantity)}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-md-6">
                    <div className="block mb-5">
                      <div className="block-header">
                        <h6 className="text-uppercase mb-0">Order Summary</h6>
                      </div>
                      <div className="block-body bg-light pt-1">
                        <p className="text-sm">
                          Shipping and additional costs are calculated based on
                          values you have entered.
                        </p>
                        <ul className="order-summary mb-0 list-unstyled">
                          <li className="order-summary-item">
                            <span>Order Subtotal </span>
                            <span>{PriceFormat(bill.total - 35000)}</span>
                          </li>
                          <li className="order-summary-item">
                            <span>Shipping and handling</span>
                            <span>{PriceFormat(35000)}</span>
                          </li>
                          <li className="order-summary-item">
                            <span>Tax</span>
                            <span>{PriceFormat(0)}</span>
                          </li>
                          <li className="order-summary-item border-0">
                            <span>Total</span>
                            <strong className="order-summary-total">
                              {PriceFormat(bill.total)}
                            </strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-header">
                      <h6 className="text-uppercase mb-0">Invoice address</h6>
                    </div>
                    <div className="block-body bg-light pt-1">
                      <p>
                        <strong>Name:</strong> {bill.fullname}
                        <br />
                        <strong>Email:</strong> {bill.email}
                        <br />
                        <strong>Phone:</strong> {bill.phone}
                        <br />
                        <strong>Street:</strong> {bill.street}
                        <br />
                        <strong>City:</strong> {bill.city}
                        <br />
                        <strong>State:</strong> {bill.state}
                        <br />
                        <strong>Postcode:</strong> {bill.postcode}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Customer Sidebar*/}
              <div className="col-xl-3 col-lg-4 mb-5">
                <div className="customer-sidebar card border-0">
                  <div className="customer-profile">
                    <img
                      className="img-fluid rounded-circle customer-image"
                      src
                    />
                    <p className="text-xl text-center">
                      Xin chào: <p className="font-bold">{user.name}</p>
                    </p>
                    <p className="text-muted text-center text-sm mb-0">
                      Là thành viên từ: <br />
                      {dateReg.getDate() +
                        "-" +
                        (dateReg.getMonth() + 1) +
                        "-" +
                        dateReg.getFullYear()}
                    </p>
                  </div>
                  <nav className="list-group customer-nav">
                    <Link
                      className="active list-group-item d-flex justify-content-between align-items-center"
                      to="/user"
                    >
                      <span>
                        <svg className="svg-icon svg-icon-heavy mr-2">
                          <use xlinkHref="#paper-bag-1"> </use>
                        </svg>
                        Orders
                      </span>
                      <div className="badge badge-pill badge-light font-weight-normal px-3">
                        5
                      </div>
                    </Link>
                    <a
                      className="list-group-item d-flex justify-content-between align-items-center"
                      href="/#/changeinfo"
                    >
                      <span>
                        <svg className="svg-icon svg-icon-heavy mr-2">
                          <use xlinkHref="#male-user-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 64 64"
                              id="paper-bag-1"
                            >
                              <title>Paper Bag</title>
                              <desc>
                                A line styled icon from Orion Icon Library.
                              </desc>
                              <path
                                data-name="layer2"
                                fill="none"
                                stroke="#202020"
                                strokeMiterlimit={10}
                                d="M8 22h48v40H8z"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                style={{ stroke: "var(--layer1, #202020)" }}
                              />
                              <path
                                data-name="layer1"
                                d="M22 26V12A10 10 0 0 1 32 2a10 10 0 0 1 10 10v14"
                                fill="none"
                                stroke="#202020"
                                strokeMiterlimit={10}
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                style={{ stroke: "var(--layer1, #202020)" }}
                              />
                            </svg>
                          </use>
                        </svg>
                        Change infomation
                      </span>
                    </a>
                    <Link
                      className="list-group-item d-flex justify-content-between align-items-center"
                      to="/logout"
                    >
                      <span>
                        <svg className="svg-icon svg-icon-heavy mr-2">
                          <use xlinkHref="#exit-1">
                            <svg
                              viewBox="0 0 64 64"
                              xmlns="http://www.w3.org/2000/svg"
                              id="exit-1"
                            >
                              <title>Exit</title>
                              <desc>
                                A line styled icon from Orion Icon Library.
                              </desc>
                              <path
                                d="M22 48h16V4H2v43l20 14V19L2 4"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                stroke="#202020"
                                fill="none"
                                data-name="layer2"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M32 26h29M51 16l10 10-10 10"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                stroke="#202020"
                                fill="none"
                                data-name="layer1"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </use>
                        </svg>
                        Log out
                      </span>
                    </Link>
                  </nav>
                </div>
              </div>
              {/* /Customer Sidebar*/}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BillPage;

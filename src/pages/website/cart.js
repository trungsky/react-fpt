import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import { PriceFormat } from "../../components/constant";
const CartPage = ({ onDeleteCart, carts }) => {
  const totalPrice = localStorage.getItem("cart") !== null ? carts.reduce((init, curr, index) => {
    return (init += curr.price * curr.quantity) + 35000;
  }, 0) : 0;
  localStorage.setItem("total", totalPrice);

  const onHandleRemove = (id) => {
    onDeleteCart(id);
    const btnRemove = document.querySelectorAll("#remove-product");
    const hiddenThis = btnRemove[id].parentNode.parentNode.parentNode;
    hiddenThis.hidden = true;
    window.location.reload();
  };

  return (
    <div>
      <div>
        <section className="hero">
          <div className="container">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Shopping cart </li>
            </ol>
            <div className="hero-content pb-5 text-center">
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  <p className="lead text-muted">
                    {carts !== null ? (
                      <span>Bạn có {carts.length} món trong cart</span>
                    ) : (
                      <h3 className="text-center my-5 text-xl font-bold">
                        Không có sản phẩm nào trong giỏ cả, quay lại mua hàng
                        ngay nào
                        <p className=" mt-5">
                          <Link
                            className="text-bold text-red-500 p-2 bg-red-200 rounded hover:text-red-900 hover:no-underline"
                            to="/products"
                          >
                            Quay lại
                          </Link>
                        </p>
                      </h3>
                    )}
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8">
                {carts === null ? (
                  ""
                ) : (
                  <div className="cart">
                    <div className="cart-wrapper">
                      <div className="cart-header text-center">
                        <div className="row">
                          <div className="col-1">Photo</div>
                          <div className="col-4">Name</div>
                          <div className="col-2">Price</div>
                          <div className="col-2">Quantity</div>
                          <div className="col-2">Total</div>
                          <div className="col-1">Delete</div>
                        </div>
                      </div>
                      <div className="cart-body">
                        <div id="trungsky">
                          {/* item */}
                          {carts === null
                            ? "Không có sản phẩm nào"
                            : carts.map((product, index) => {
                                return (
                                  <div key={index} className="cart-item">
                                    <div className="row d-flex align-items-center text-center">
                                      <div className="col-5">
                                        <div className="d-flex align-items-center">
                                          <Link to={`/products/${product.id}`}>
                                            <img
                                              className="cart-item-img w-14 mr-3 rounded"
                                              src={product.photo}
                                            />
                                          </Link>
                                          <div className="cart-title text-left">
                                            <Link
                                              className="hover:text-gray-400 hover:no-underline"
                                              to={`/products/${product.id}`}
                                            >
                                              <strong>{product.name}</strong>
                                            </Link>
                                            <br />
                                            {/* <span className="text-muted text-sm">
                                        Size: product.size
                                      </span> */}
                                          </div>
                                        </div>
                                      </div>
                                      <div id="price" className="col-2">
                                        {PriceFormat(product.price)}
                                      </div>
                                      <div className="col-2">
                                        <div className="d-flex align-items-center">
                                          <input
                                            className="form-control text-center input-items"
                                            type="text"
                                            disabled
                                            defaultValue={product.quantity}
                                          />
                                        </div>
                                      </div>
                                      <div className="col-2 text-center">
                                        <span>
                                          {PriceFormat(
                                            product.quantity * product.price
                                          )}
                                        </span>
                                      </div>
                                      <div className="col-1 text-center">
                                        <button
                                          className="btn btn-secondary btn-remove"
                                          id="remove-product"
                                          data-id={index}
                                          onClick={() => onHandleRemove(index)}
                                        >
                                          <i className="fa fa-times" />
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          {/* item */}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="my-5 d-flex justify-content-between flex-column flex-lg-row">
                  <Link className="btn btn-link text-muted" to="/products">
                    <i className="fa fa-chevron-left" /> Continue Shopping
                  </Link>
                  {carts === null ? (
                    ""
                  ) : (
                    <Link
                      id="btn-checkout"
                      className="btn btn-dark"
                      to="/checkout"
                    >
                      Proceed to checkout <i className="fa fa-chevron-right" />{" "}
                    </Link>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="block mb-5 p-4">
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
                          {carts === null
                            ? PriceFormat(0)
                            : PriceFormat(
                                carts.reduce((init, curr, index) => {
                                  return (
                                    (init += curr.price * curr.quantity) + 35000
                                  );
                                }, 0)
                              )}
                        </span>
                      </li>
                      <li className="order-summary-item">
                        <span>Fee shipping</span>
                        <span>{PriceFormat(35000)}</span>
                      </li>
                      <li className="order-summary-item">
                        <span>Tax</span>
                        <span>{PriceFormat(0)}</span>
                      </li>
                      <li className="order-summary-item border-0">
                        <span>Total</span>
                        <strong className="order-summary-total">
                          {carts === null
                            ? PriceFormat(0)
                            : PriceFormat(
                                carts.reduce((init, curr, index) => {
                                  return (
                                    (init += curr.price * curr.quantity) + 35000
                                  );
                                }, 0)
                              )}
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

export default CartPage;

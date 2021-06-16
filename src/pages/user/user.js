import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../auth";
import BillingApi from "../../api/BillingApi";
import { PriceFormat } from "../../components/constant";
const UserPage = () => {
  const { user } = isAuthenticated();
  const [bills, setBills] = useState([]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location = "/";
  };
  const dateReg = new Date(user.createdAt);

  useEffect(() => {
    const getBills = async () => {
      const { data: result } = await BillingApi.getAll();
      const userBill = result.filter((bill) => bill.user === user._id);
      setBills(userBill);
    };
    getBills();
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="container">
          {/* Breadcrumbs */}
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Orders </li>
          </ol>
          {/* Hero Content*/}
          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Your orders</h1>
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <p className="lead">Your orders in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <table className="table table-borderless table-hover table-responsive-md">
                <thead className="bg-light">
                  <tr>
                    <th className="py-4 text-uppercase text-sm">Order #</th>
                    <th className="py-4 text-uppercase text-sm">Date</th>
                    <th className="py-4 text-uppercase text-sm">Total</th>
                    <th className="py-4 text-uppercase text-sm">Status</th>
                    <th className="py-4 text-uppercase text-sm">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map((bill) => {
                    const dateBill = new Date(bill.date);

                    return (
                      <tr>
                        <th class="py-4 align-middle"># {bill._id}</th>
                        <td class="py-4 align-middle">
                          {dateBill.getDate() +
                            "-" +
                            (dateBill.getMonth() + 1) +
                            "-" +
                            dateBill.getFullYear()}
                        </td>
                        <td class="py-4 align-middle">
                          {PriceFormat(bill.total)}
                        </td>
                        <td class="py-4 align-middle">
                          <span class="badge p-2 text-uppercase badge-info">
                            {bill.status}
                          </span>
                        </td>
                        <td class="py-4 align-middle">
                          <Link
                            class="btn btn-outline-dark btn-sm"
                            to={`bill/${bill._id}`}
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
                  <a
                    className="active list-group-item d-flex justify-content-between align-items-center"
                    href="/#/user"
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
                  </a>
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
                  <a
                    className="list-group-item d-flex justify-content-between align-items-center"
                    id="btnLogout"
                    href="#"
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
                  </a>
                </nav>
              </div>
            </div>
            {/* /Customer Sidebar*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserPage;

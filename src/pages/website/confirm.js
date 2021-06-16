import React from "react";
import { Link } from "react-router-dom";
const ConfirmPage = () => {
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
              <li className="breadcrumb-item active">Order confirmed </li>
            </ol>
            {/* Hero Content*/}
            <div className="hero-content pb-5 text-center">
              <h1 className="hero-heading">Order confirmed</h1>
            </div>
          </div>
        </section>
        <section className="pb-5">
          <div className="container text-center">
            <h4 className="mb-3 ff-base">
              Thank you, Your order is confirmed.
            </h4>
            <p className="text-muted mb-5">
              Your order hasn't shipped yet but we will send you ane email when
              it does.
            </p>
            <p>
              {" "}
              <Link className="btn btn-outline-dark" to="/">
                BACK TO HOME
              </Link>
              <Link
                className="btn btn-outline-dark"
                to={`/bill/${sessionStorage.getItem("billId")}`}
              >
                Click here to coi lại bill
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConfirmPage;

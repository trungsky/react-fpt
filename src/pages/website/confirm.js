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
            <div className="icon-rounded bg-primary mb-3 mx-auto text-white">
              <svg className="svg-icon w-2rem h-2rem align-middle">
                <use xlinkHref="#checkmark-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="checkmark-1"
                  >
                    <title>Checkmark</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path
                      data-name="layer1"
                      fill="none"
                      stroke="#202020"
                      strokeMiterlimit={10}
                      d="M2 30l21 22 39-40"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      style={{ stroke: "var(--layer1, #202020)" }}
                    />
                  </svg>
                </use>
              </svg>
            </div>
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
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConfirmPage;

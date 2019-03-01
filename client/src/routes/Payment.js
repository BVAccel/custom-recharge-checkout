import React, { useState } from "react";

import countryStates from "../utils/country-states.json";
import { useInput, useCheckbox } from "../utils/hooks";
import History from "../utils/History";

export default function Shipping() {
  const [errors, setErrors] = useState([]);

  // get input values from local storage
  const {
    first_name,
    last_name,
    company,
    address1,
    address2,
    country,
    province,
    city,
    zip,
    phone
  } = JSON.parse(localStorage.getItem("shipping_address") || "{}");

  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="customer">
              <a className="back back--desktop" href="https://skylar.com/cart">
                <span className="back__chevron" />
                Edit
              </a>

              <h3 className="customer__heading">Customer information</h3>
            </div>

            <form className="shipping">
              <h4 className="shipping__heading">Shipping address</h4>

              <div className="shipping__footer">
                <span>
                  <input id="tc" className="shipping__tc skip" />
                  <label htmlFor="tc" className="shipping__tc-label">
                    {` `}I accept the{` `}
                    <a href="https://skylar.com/pages/terms-of-use">
                      Terms &amp; Conditions
                    </a>
                  </label>
                </span>

                <button className="submit submit--desktop" type="submit">
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="panel">
              <div className="panel__heading">Order Summary</div>

              <div className="products">
                <div className="product">
                  <div className="product__img">
                    <img src="http://via.placeholder.com/150x150" alt="" />
                  </div>
                  <div className="product__details">
                    <div className="product__title">Monthly Scent Club</div>
                    <div className="product__option">
                      Wild Child / 1.5 fl oz
                    </div>
                    <div className="product__frequency">Every month</div>
                  </div>
                  <div className="product__price">
                    <p>$39.99 / month</p>
                  </div>
                </div>

                <div className="product">
                  <div className="product__img">
                    <img src="http://via.placeholder.com/150x150" alt="" />
                  </div>
                  <div className="product__details">
                    <div className="product__title">Monthly Scent Club</div>
                    <div className="product__option">
                      Wild Child / 1.5 fl oz
                    </div>
                    <div className="product__frequency">Every 3 Months</div>
                  </div>
                  <div className="product__price">
                    <p>$39.99 / month</p>
                  </div>
                </div>
              </div>

              <div className="coupon">
                <div className="input-group no-gutter">
                  <div className="input input--2">
                    <input
                      className="coupon__input"
                      type="text"
                      placeholder="Discount"
                      name="discount_code"
                    />
                  </div>
                  <div className="input">
                    <button className="coupon__submit" type="submit">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>

              <div className="subtotals">
                <li className="subtotals__cost">
                  <span>SUBTOTAL</span>
                  <span>$39.99</span>
                </li>
                <li className="subtotals__cost">
                  <span>SHIPPING</span>
                  <span>-</span>
                </li>
                <li className="subtotals__cost">
                  <span>TAXES</span>
                  <span>-</span>
                </li>
              </div>

              <div className="total">
                <span className="total__label">TOTAL</span>
                <span className="total__content">$39.99</span>
              </div>
            </div>

            <button className="submit submit--mobile" type="submit">
              Continue
            </button>

            <a href="https://skylar.com/cart" className="back back--mobile">
              <span className="back__chevron" />
              Return to Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

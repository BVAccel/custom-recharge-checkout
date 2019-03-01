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

  // create input hooks, set default values if possible
  const firstNameInput = useInput(first_name || "");
  const lastNameInput = useInput(last_name || "");
  const companyInput = useInput(company || "");
  const address1Input = useInput(address1 || "");
  const address2Input = useInput(address2 || "");
  const countryInput = useInput(country || "United States");
  const stateInput = useInput(province || "");
  const cityInput = useInput(city || "");
  const zipInput = useInput(zip || "");
  const phoneInput = useInput(phone || "");
  const acceptTermsInput = useCheckbox(false);

  // get all states for the selected country
  const states = countryStates[countryInput.value];

  const handleShippingFormSubmit = e => {
    e.preventDefault();

    setErrors([]);

    try {
      const shipping_address = {
        address1: address1Input.value,
        address2: address2Input.value,
        city: cityInput.value,
        company: companyInput.value,
        country: countryInput.value,
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        phone: phoneInput.value,
        province: stateInput.value,
        zip: zipInput.value
      };

      // save input values in localStorage
      localStorage.setItem(
        "shipping_address",
        JSON.stringify(shipping_address)
      );

      const errors = [];

      // prevent user from continuing to payment options if terms and conditions aren't accepted
      // spaghetti because I dont have time to write better validation logic
      if (!acceptTermsInput.checked) {
        errors.push({
          message: "You must accept the terms and conditions to checkout",
          field: "termsAndConditions"
        });
      }

      if (!address1Input.value.length) {
        errors.push({
          message: "Address is required",
          field: "address1"
        });
      }

      if (!cityInput.value.length) {
        errors.push({
          message: "City is required",
          field: "city"
        });
      }

      if (!countryInput.value.length) {
        errors.push({
          message: "Country is required",
          field: "country"
        });
      }

      if (states.length && !stateInput.value.length) {
        errors.push({
          message: "State is required",
          field: "state"
        });
      }

      if (!zipInput.value.length) {
        errors.push({
          message: "Zip Code is required",
          field: "zip"
        });
      }

      if (!lastNameInput.value.length) {
        errors.push({
          message: "Last Name is required",
          field: "last_name"
        });
      }

      if (errors.length) {
        throw errors;
      }

      // if validation passes, continue to payments
      History.push("/payment");
    } catch (err) {
      setErrors(err);
    }
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="products products--mobile">
              <div className="products__hgroup">
                <h1 className="products__heading">Your Cart</h1>
                <div className="products__hide">Hide</div>
              </div>

              <div className="product">
                <div className="product__img">
                  <img src="http://via.placeholder.com/150x150" alt="" />
                </div>
                <div className="product__details">
                  <div className="product__title">Monthly Scent Club</div>
                  <div className="product__option">Wild Child / 1.5 fl oz</div>
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
                  <div className="product__option">Wild Child / 1.5 fl oz</div>
                  <div className="product__frequency">Every 3 Months</div>
                </div>
                <div className="product__price">
                  <p>$39.99 / month</p>
                </div>
              </div>
            </div>

            <div className="customer">
              <a className="back back--desktop" href="https://skylar.com/cart">
                <span className="back__chevron" />
                Return to Cart
              </a>

              <h3 className="customer__heading">Customer information</h3>
              <h4 className="customer__subheading">Logged in as</h4>
              <h5 className="customer__email">becky@email.com</h5>
              <p className="customer__logout">
                Not you? Sign into a different account
              </p>
            </div>

            <form className="shipping" onSubmit={handleShippingFormSubmit}>
              <h4 className="shipping__heading">Shipping address</h4>

              {!!errors.length && (
                <div className="Alert Alert--danger">
                  {errors.map((err, i) => (
                    <li key={`err-${i}`}>{err.message}</li>
                  ))}
                </div>
              )}

              <div className="input-container">
                <div className="input-group">
                  <div className="input">
                    <input
                      type="text"
                      placeholder="First Name"
                      {...firstNameInput}
                    />
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...lastNameInput}
                    />
                  </div>
                </div>
                <div className="input">
                  <input type="text" placeholder="Company" {...companyInput} />
                </div>

                <div className="input">
                  <input type="text" placeholder="Address" {...address1Input} />
                </div>

                <div className="input">
                  <input
                    type="text"
                    placeholder="Apt, suite, etc. (optional)"
                    {...address2Input}
                  />
                </div>

                <div className="input">
                  <input type="text" placeholder="City" {...cityInput} />
                </div>

                <div className="input-group">
                  <div className="input input--select">
                    <select {...countryInput}>
                      <option disabled>Country</option>

                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>

                      <option disabled="disabled" value="---">
                        ---
                      </option>

                      {Object.keys(countryStates).map((country, i) => (
                        <option key={`country-${i}`} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  {!!states.length && (
                    <div className="input input--select">
                      <select {...stateInput}>
                        <option disabled>State</option>
                        {states.map((state, i) => (
                          <option key={`state-${i}`} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="input">
                    <input type="number" placeholder="Zip Code" {...zipInput} />
                  </div>
                </div>
                <div className="input">
                  <input type="tel" placeholder="Phone" {...phoneInput} />
                </div>
              </div>

              <div className="shipping__footer">
                <span>
                  <input
                    id="tc"
                    className="shipping__tc skip"
                    {...acceptTermsInput}
                  />
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

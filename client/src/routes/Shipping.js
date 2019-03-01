import React from "react";
import countryStates from "../utils/country-states.json";
import { useInput } from "../utils/hooks";

export default function() {
  const countryInput = useInput("United States");
  const stateInput = useInput(countryStates[countryInput.value]);

  return (
    <section class="cart">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="products products--mobile">
              <div class="products__hgroup">
                <h1 class="products__heading">Your Cart</h1>
                <div class="products__hide">Hide</div>
              </div>

              <div class="product">
                <div class="product__img">
                  <img src="http://via.placeholder.com/150x150" alt="" />
                </div>
                <div class="product__details">
                  <div class="product__title">Monthly Scent Club</div>
                  <div class="product__option">Wild Child / 1.5 fl oz</div>
                  <div class="product__frequency">Every month</div>
                </div>
                <div class="product__price">
                  <p>$39.99 / month</p>
                </div>
              </div>

              <div class="product">
                <div class="product__img">
                  <img src="http://via.placeholder.com/150x150" alt="" />
                </div>
                <div class="product__details">
                  <div class="product__title">Monthly Scent Club</div>
                  <div class="product__option">Wild Child / 1.5 fl oz</div>
                  <div class="product__frequency">Every 3 Months</div>
                </div>
                <div class="product__price">
                  <p>$39.99 / month</p>
                </div>
              </div>
            </div>

            <div class="customer">
              <a class="back back--desktop" href="https://skylar.com/cart">
                <span class="back__chevron" />
                Return to Cart
              </a>

              <h3 class="customer__heading">Customer information</h3>
              <h4 class="customer__subheading">Logged in as</h4>
              <h5 class="customer__email">becky@email.com</h5>
              <p class="customer__logout">
                Not you? Sign into a different account
              </p>
            </div>

            <form class="shipping">
              <h4 class="shipping__heading">Shipping address</h4>

              <div class="input-container">
                <div class="input-group">
                  <div class="input">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                    />
                  </div>
                  <div class="input">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                    />
                  </div>
                </div>
                <div class="input">
                  <input type="text" placeholder="Company" name="company" />
                </div>

                <div class="input">
                  <input type="text" placeholder="Address" name="address1" />
                </div>

                <div class="input">
                  <input
                    type="text"
                    placeholder="Apt, suite, etc. (optional)"
                    name="address2"
                  />
                </div>

                <div class="input">
                  <input type="text" placeholder="City" name="city" />
                </div>

                <div class="input-group">
                  <div class="input">
                    <select {...countryInput}>
                      <option disabled selected value="undefined">
                        Country
                      </option>

                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>

                      <option disabled="disabled" value="---">
                        ---
                      </option>

                      {Object.keys(countryStates).map(country => (
                        <option value={country}>{country}</option>
                      ))}
                    </select>
                  </div>

                  <div class="input">
                    <select {...stateInput}>
                      <option disabled selected>
                        State
                      </option>
                      {countryStates[countryInput.value].map(state => (
                        <option value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  <div class="input">
                    <input type="number" name="zip" placeholder="Zip Code" />
                  </div>
                </div>
                <div class="input">
                  <input type="tel" placeholder="Phone" name="phone" />
                </div>
              </div>

              <div class="shipping__footer">
                <span>
                  <input
                    id="tc"
                    type="checkbox"
                    class="shipping__tc skip"
                    name="tc"
                  />
                  <label for="tc" class="shipping__tc-label">
                    {` `}I accept the{` `}
                    <a href="https://skylar.com/pages/terms-of-use">
                      Terms &amp; Conditions
                    </a>
                  </label>
                </span>

                <button class="submit submit--desktop" type="submit">
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <div class="panel">
              <div class="panel__heading">Order Summary</div>

              <div class="products">
                <div class="product">
                  <div class="product__img">
                    <img src="http://via.placeholder.com/150x150" alt="" />
                  </div>
                  <div class="product__details">
                    <div class="product__title">Monthly Scent Club</div>
                    <div class="product__option">Wild Child / 1.5 fl oz</div>
                    <div class="product__frequency">Every month</div>
                  </div>
                  <div class="product__price">
                    <p>$39.99 / month</p>
                  </div>
                </div>

                <div class="product">
                  <div class="product__img">
                    <img src="http://via.placeholder.com/150x150" alt="" />
                  </div>
                  <div class="product__details">
                    <div class="product__title">Monthly Scent Club</div>
                    <div class="product__option">Wild Child / 1.5 fl oz</div>
                    <div class="product__frequency">Every 3 Months</div>
                  </div>
                  <div class="product__price">
                    <p>$39.99 / month</p>
                  </div>
                </div>
              </div>

              <div class="coupon">
                <div class="input-group no-gutter">
                  <div class="input input--2">
                    <input
                      class="coupon__input"
                      type="text"
                      placeholder="Discount"
                      name="discount_code"
                    />
                  </div>
                  <div class="input">
                    <button class="coupon__submit" type="submit">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>

              <div class="subtotals">
                <li class="subtotals__cost">
                  <span>SUBTOTAL</span>
                  <span>$39.99</span>
                </li>
                <li class="subtotals__cost">
                  <span>SHIPPING</span>
                  <span>-</span>
                </li>
                <li class="subtotals__cost">
                  <span>TAXES</span>
                  <span>-</span>
                </li>
              </div>

              <div class="total">
                <span class="total__label">TOTAL</span>
                <span class="total__content">$39.99</span>
              </div>
            </div>

            <button class="submit submit--mobile" type="submit">
              Continue
            </button>

            <a href="https://skylar.com/cart" class="back back--mobile">
              <span class="back__chevron" />
              Return to Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

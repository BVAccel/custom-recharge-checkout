const form: HTMLFormElement = document.querySelector("form.shipping");
const inputsArr: HTMLInputElement[] = Array.prototype.slice.call(form.querySelectorAll("input:not(.skip)"));
const termsAndConditions: HTMLInputElement = document.querySelector('input[name="tc"]');

const handleShippingSubmit = (e: Event) => {
  e.preventDefault();

  if(!termsAndConditions.checked) {
    alert("You must accept our Terms and Conditions to checkout")

    return;
  }

  const body: any = inputsArr.reduce((body: any, input: HTMLInputElement) => {
    body[input.name] = input.value;

    return body;
  }, {});

  localStorage.setItem('shipping_address', JSON.stringify(body));
  window.location.href = '/payment';
}

const fetchCartData = () => {
  
}

const populateFormData = () => {
  const shippingData = localStorage.getItem('shipping_address');

  if(!shippingData) return;

  const shippingJSON = JSON.parse(shippingData);

  inputsArr.forEach(input => {
    if(shippingJSON && shippingJSON[input.name]) {
      input.value = shippingJSON[input.name];
    }
  })
}

const init = () => {
  populateFormData();
}


form.addEventListener("submit", handleShippingSubmit);

document.addEventListener('DOMContentLoaded', init);

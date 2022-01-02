const form_1 = document.querySelector("#form_1");
const my_name = document.querySelector("#name");
const my_age = document.querySelector("#age");
const result = document.querySelector("#result");
const success = document.querySelector(".success");
/**
 * Name form validation
 */
my_name.addEventListener("keyup", () => {
  let name_verify_pattern = /^[a-z]{1,}$\s|[^0-9]$|(^$)/i;
  let name_verify = name_verify_pattern.test(my_name.value);
  name_verify == false ? alert(`Please input only latter`) : "";
});
/**
 * age vaiue validation
 */
my_age.onkeyup = () => {
  let age_verify_pattern = /^[0-9]{1,}$|(^$)/;
  let age_verify = age_verify_pattern.test(my_age.value);
  age_verify == false ? alert(`Please input only number`) : "";
};
/**
 * Blour function
 */
my_name.addEventListener("blur", () => {
  my_name.setAttribute("style", "border: 1px solid red");
});
my_age.addEventListener("blur", () => {
  my_age.setAttribute("style", "border: 1px solid red");
});
/**
 * on submit function
 * @param {e for prevent auto reload(preventDefault())} e
 */
form_1.onsubmit = (e) => {
  e.preventDefault();
  my_name.style.border =
    my_name.value == "" ? "1px solid red" : "1px solid black";
  my_age.style.border =
    my_age.value == "" ? "1px solid red" : "1px solid black";
  if (my_name.value == "" || my_age.value == "") {
    result.innerHTML = `<p class="alert-danger p-2"> All the form are required to fill !</p>`;
    success.innerHTML = ``;
  } else {
    result.innerHTML = `${age_cal(my_name.value, my_age.value)}`;
    success.innerHTML = `<p class="alert-success">Successfull</p>`;
    my_age.value = "";
    my_name.value = "";
  }
};

// form validation with js
const form_2 = document.querySelector("#form_2");
const name_input = document.querySelector("#form_2 #name");
const number = document.querySelector("#form_2 #number");
const output = document.querySelector("#output");
const name_alert = document.querySelector("#form_2 .name_alert");
/**
 * keyup live validation
 */
form_2.addEventListener("keyup", () => {
  let input_value_pattern = /^[a-z]{1,}$\s|[^0-9]$|(^$)/i;
  if (input_value_pattern.test(name_input.value) == false) {
    name_alert.innerHTML = `<p class='alert-danger w-75 m-auto mb-2'>Please input only latters</p>`;
  } else {
    name_alert.innerHTML = "";
  }
});
/**
 * Blour function
 */
name_input.addEventListener("blur", () => {
  name_input.setAttribute("style", "border: 1px solid red");
});
number.addEventListener("blur", () => {
  number.setAttribute("style", "border: 1px solid red");
});
/**
 * function when submit
 */
form_2.onsubmit = (ev) => {
  ev.preventDefault();
  let input_value_pattern = /^[a-z]{1,}$\s|[^0-9]$|(^$)/i;
  //Border color change
  name_input.setAttribute(
    "style",
    name_input.value == "" ? "border: 1px solid red" : "border: 1px solid black"
  );
  number.setAttribute(
    "style",
    number.value == "" ? "border: 1px solid red" : "border: 1px solid black"
  );
  output.innerHTML =
    name_input.value == "" || number.value == ""
      ? `<p class='alert-danger mt-2 p-2'>All the filed are required !</p>`
      : input_value_pattern.test(name_input.value) == true
      ? (output.nnerHTML = marrage_cal(name_input.value, number.value))
      : (output.innerHTML = `<p class='alert-danger mt-2 p-2'>Please input only latter in name field !</p>`);
  name_input.value = "";
  number.value = "";
};

/**
 * Dollers converter scripts
 */
const doller_result = document.querySelector(".doller_result");
const dollers = document.querySelector("#doller");
const doller_input = document.querySelector("#doller_input");
doller_convert.addEventListener("submit", (e) => {
  e.preventDefault();
  if (dollers.value == 85) {
    doller_result.innerHTML = `<p class=' text-center alert-info p-1'>${
      doller_input.value
    } Taka = ${doller_input.value * dollers.value} US Dollers</p>`;
  }
  if (dollers.value == 98) {
    doller_result.innerHTML = `<p class=' text-center alert-info p-1'>${
      doller_input.value
    } Taka = ${doller_input.value * dollers.value} Canadian dollers</p>`;
  }
  if (dollers.value == 100) {
    doller_result.innerHTML = `<P class=' text-center alert-info p-1'>${
      doller_input.value
    } Taka = ${doller_input.value * dollers.value} Euro</P>`;
  }
  console.log(dollers.value);
});

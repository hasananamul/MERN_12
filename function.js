function age_cal(name, age) {
  let date = new Date();
  let year = date.getFullYear();
  let curent_age = year - age;
  return ` <p class="${
    age_status(curent_age).color
  }">Hi ${name} Your age is ${curent_age} years old ${
    age_status(curent_age).status
  }</p> `;
}

function age_status(age) {
  if (age < 12) {
    return {
      status: "You are slill baby",
      color: "alert-warning",
    };
  } else if (age >= 12 && age <= 18) {
    return {
      status: " You are a teneser ",
      color: "alert-info",
    };
  } else if (age >= 19 && age <= 54) {
    return {
      status: " You are a young ",
      color: "alert-success",
    };
  } else if (age >= 55 && age <= 99) {
    return {
      status: " You are a adult ",
      color: "alert-warning",
    };
  } else if (age > 100) {
    return {
      status: " You are a jin/vut ",
      color: "alert-danger",
    };
  }
}
/**
 * Marrage status function
 */
function marrage_cal(name, age) {
  let date = new Date();
  let year = date.getFullYear();
  let curent_age = year - age;
  return ` <p class="mt-2 ${marrage_status(curent_age).color}">Hi ${name} ${
    marrage_status(curent_age).status
  }</p> `;
}
function marrage_status(age) {
  if (age < 18) {
    return {
      status: `You are ${age} years old ! You are still baby you have to wait more ${
        18 - age
      } years for marrage !`,
      color: "alert-warning",
    };
  } else if (age >= 19 && age <= 54) {
    return {
      status: `You are ${age} years,Enough for marrage please marrage as soon as possible !`,
      color: "alert-success",
    };
  } else if (age >= 55 && age <= 99) {
    return {
      status: `You are ${age} years,Your marrage age already expired ! You can merrage any bury!!!`,
      color: "alert-warning",
    };
  } else if (age > 100) {
    return {
      status: `You are ${age} years,Your are too old ! Please don't marrage now !!!`,
      color: "alert-danger",
    };
  }
}

/**
 * Dollers convertor
 */

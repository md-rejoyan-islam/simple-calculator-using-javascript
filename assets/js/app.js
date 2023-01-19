const calculatorBtn = document.getElementById("calculatorBtn");
const show = document.getElementById("show");

let calData = [];

const getValue = (value) => {
  // don't show symbol at first
  if (
    calData == false &&
    (value == "+" || value == "-" || value == "/" || value == "*")
  ) {
    return false;
  }
  // extra dot check
  if (calData && calData.join("").indexOf(".") != -1 && value == ".") {
    const symbolPattern = /[*+/-]/;
    if (symbolPattern.test(calData.join(""))) {
    } else {
      return false;
    }
  }
  calData.push(value);
  show.value = calData.join("");
};

// get result when click equal button
const getResult = () => {
  let result = eval(calData.join(""));
  if (!result) {
    return;
  }
  // integer check
  if (!Number.isInteger(result)) {
    result = result.toFixed(4);
    calData = [result];
  } else {
    result = result;
    calData = [result];
  }
  show.value = result;
};

const resetValue = () => {
  calData = [];
  show.value = 0;
};

const deleteValue = () => {
  if (calData) {
    let strValue = calData.join("");
    strValue = strValue.substring(0, strValue.length - 1);
    calData = [strValue];
    if (calData == false) {
      show.value = 0;
    } else {
      show.value = strValue;
    }
  }
};

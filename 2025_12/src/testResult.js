const resultTitle = document.querySelector(".result-name");
const resultImage = document.querySelector(".result-icon > img");
const resultText = document.querySelector(".result-desc");
const msgError = document.querySelector("#msg_error");

const showResult = (value) => {
  let currentResult = null;
  let index = 0;

  console.log(value);

  if (value >= 5 && value <= 8) {
    index = 0;
  } else if (value >= 9 && value <= 12) {
    index = 1;
  } else if (value >= 13 && value <= 15) {
    index = 2;
  }
  $.getJSON("../src/testResult.json", function (result, textStatus, jqXHR) {
    currentResult = result[index];
    resultImage.src = currentResult.result_img;
    resultTitle.innerText = currentResult.result_name;
    resultText.innerText = currentResult.result_desc;
  });
};

const showError = () => {
  msgError.innerText = "모든 항목을 선택해주세요";
};
const eraseError = () => {
  msgError.innerText = "";
};

$(document).ready(function () {
  const q1 = document.getElementsByName("q1");
  const q2 = document.getElementsByName("q2");
  const q3 = document.getElementsByName("q3");
  const q4 = document.getElementsByName("q4");
  const q5 = document.getElementsByName("q5");
  let value = 0;

  $("#btn-submit").click(function (e) {
    e.preventDefault();

    if ($("input[name=q1]:radio:checked").length < 1) {
      showError();
      value = 0;
      return;
    } else {
      q1.forEach((node) => {
        console.log(node.checked);
        if (node.checked === true) {
          value += parseInt(node.value);
          console.log(value);
          return;
        }
      });
    }
    console.log(value);

    if ($("input[name=q2]:radio:checked").length < 1) {
      showError();
      value = 0;
      return;
    } else {
      q2.forEach((node) => {
        if (node.checked === true) {
          value += parseInt(node.value);
          return;
        }
      });
    }
    if ($("input[name=q3]:radio:checked").length < 1) {
      showError();
      value = 0;
      return;
    } else {
      q3.forEach((node) => {
        if (node.checked === true) {
          value += parseInt(node.value);
          return;
        }
      });
    }
    if ($("input[name=q4]:radio:checked").length < 1) {
      showError();
      value = 0;
      return;
    } else {
      q4.forEach((node) => {
        if (node.checked === true) {
          value += parseInt(node.value);
          return;
        }
      });
    }
    if ($("input[name=q5]:radio:checked").length < 1) {
      showError();
      value = 0;
      return;
    } else {
      q5.forEach((node) => {
        if (node.checked === true) {
          value += parseInt(node.value);
          return;
        }
      });
    }
    eraseError();
    showResult(value);
    value = 0;
  });
});

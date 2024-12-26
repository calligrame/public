const resultTitle = document.querySelector(".desc-title");
const resultText = document.querySelector(".popup-desc > p");
const resultImage = document.querySelector(".popup-image > img");

const showResult = (index) => {
  let currentResult = null;
  $.getJSON("../src/testResult.json", function (result, textStatus, jqXHR) {
    currentResult = result[index];
    resultTitle.innerText = currentResult.result_name;
    resultText.innerText = currentResult.result_desc;
    resultImage.src = currentResult.result_img;
    $(".result-popup-container").addClass("open");
  });
};

$(document).ready(function () {
  // 심리테스트 결과 팝업 출력
  $(".icon-result").on("click", function () {
    showResult($(this).data("index"));
  });

  $(".popup-close").on("click", function () {
    $(".result-popup-container").removeClass("open");
  });
});

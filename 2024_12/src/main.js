$(document).ready(function () {
  // 헤더 로드
  $("#header").load("/2024_12/header.html", function () {
    document.getElementById("header").classList.add("fixed");
  });
  // 최상위 이동
  $("#btn_top, #side_btn_top, #btn_top_circle").on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 표제 타이핑 코드
  let typingFirstBool = false;
  let typingSecondBool = false;
  let typing1Idx = 0;
  let typing2Idx = 0;
  let tyInt1 = 0;
  let tyInt2 = 0;

  // 타이핑될 텍스트를 가져온다
  let typingTxtFirst = (First = $(".main-text-1").text());
  let typingTxtSecond = $(".main-text-2").text();

  typingTxtFirst = typingTxtFirst.split(""); // 한글자씩 자른다.
  typingTxtSecond = typingTxtSecond.split(""); // 한글자씩 자른다.
  console.log(typingTxtFirst);

  if (typingFirstBool === false) {
    // 타이핑이 진행되지 않았다면

    tyInt1 = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    if (typing1Idx < typingTxtFirst.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $("#typing-1").append(typingTxtFirst[typing1Idx]);
      // 한글자씩 이어준다.
      typing1Idx++;
    } else {
      //끝나면 반복종료
      tyInt2 = setInterval(typing2, 100); // 반복동
      clearInterval(tyInt1);
    }
  }
  function typing2() {
    if (typing2Idx < typingTxtSecond.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $("#typing-2").append(typingTxtSecond[typing2Idx]);
      // 한글자씩 이어준다.
      typing2Idx++;
    } else {
      //끝나면 반복종료
      typingSecondBool = true;

      clearInterval(tyInt2);
    }
  }
});

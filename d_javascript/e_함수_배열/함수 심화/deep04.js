//# JS의 내장 함수 - 콜백 함수를 사용(고차함수)

//! 타이머 함수
// : 특정 시간 이후에 함수를 실행 OR 일정 간격으로 함수를 반복 실행 가능

// 1) setTimeout(콜백함수, 시간);
// : 지정된 시간 이후, 제공된 콜백 함수를 단 한 번만 실행

// cf) 시간 단위: 밀리초(1초 === 1000밀리초)

function greet(name = "홍길동") {
  console.log(`Hello ${name}`);
}

greet(); // Hello 홍길동

setTimeout(greet, 2000);

// cf) 함수 호출: 함수명();
// setTimeout(함수명, 지연시간);
// : 호출부() 작성 시 코드를 읽는 즉시 함수 실행

// +) 콜백 함수의 인자 전달은 세 번째 인자부터 나열되는 값이 함수의 매개변수로 전달
setTimeout(greet, 3000, "고길동"); // Hello 고길동

//? 익명 함수 사용
setTimeout(function () {
  console.log("4초 뒤에 실행됩니다.");
}, 4000);

setTimeout(function () {
  console.log("5초 뒤에 실행됩니다.");
}, 5000);

// cf) 타이머 취소: clearTimeout(타이머 ID);
// >> setTimeout으로 설정한 타이머를 제거

// +) setTimeout()은 타이머 ID를 자동 반환
const timeId = setTimeout(greet, 2000, "홍길동");
console.log("40번째 줄" + timeId);

clearTimeout(timeId);

//! setInterval(콜백 함수, 시간);
// : '지정된 시간 간격마다' 함수를 반복해서 실행
// >> 사용법: setTimeout과 유사

let count = 1;

let id = setInterval(() => {
  console.log(`3초 마다 실행됩니다. ${count}번째`);
  count++;
}, 3000); // 3초마다 실행

setTimeout(() => {
  console.log("타이머를 종료합니다.");
  clearInterval(id);
}, 15000); // 15초 이후 실행

// 구조분해 할당
const colors = ["red", "yellow", "black"];

// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];

const [red, yellow, black] = colors;

const Colors = {
  blue: "blue",
  green: "green",
  white: "white",
};

const { green, white } = Colors;

// 비교 연산
let a = 10;
let b = "10";

if (a == b) {
  // 동등 비교
  // 결과 true
}
if (a === b) {
  // 엄밀히 비교
  // 결과 false
}

if (a === b) {
  a = 0;
} else {
  a = 1;
}

a = a === b ? 0 : 1;

(function foo() {});

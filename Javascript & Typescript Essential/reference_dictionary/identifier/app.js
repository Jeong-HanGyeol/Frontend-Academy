let age = 10;
const AGE = 10; // 상수는 대문자로 생성하자

function setAge() {} // 단어와 단어가 붙여질경우 띄어쓰기가 아닌 두번째 단어부터 대문자로 표기하는 카멜표기법

const o = {
  age: 10,
  ["my name"]: "김",
};

o.age;
o["my name"];

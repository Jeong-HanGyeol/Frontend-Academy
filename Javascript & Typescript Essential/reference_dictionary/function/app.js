function myFn(x) {
  return x + 100;
}

const result = myFn(10);

const myFnV2 = function () {
  return 100;
};

myFnV2();
sum.call(null, 10, 20, 30);
sum.apply(null, [10, 20, 30]);

(function () {
  console.log("즉시 실행 함수 실행!");
})();

function sum(a, b, ...args) {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }
  return s;
}
const abcSum = sum(10, 20);

const arr = [10, 20, 30, 40, 50];
sum.call(null, 10, 20, 30);
sum.apply(null, arr);

const sumV2 = (a, b, ...args) => {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }
  return s;
};

const ten = (x) => 100 + x;
ten(10);

function* gen() {
  yield 10;
  yield 20;
  return 30;
}

const g = gen();

g.next();
g.next();
g.next();

function myTask() {}

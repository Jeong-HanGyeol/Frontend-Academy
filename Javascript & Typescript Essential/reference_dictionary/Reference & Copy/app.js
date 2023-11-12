let a = 10;
let b = a;

b = 20;

console.log("done");

let o = {
  isLoading: false,
};

function foo(o) {
  o.isLoading = true;
}
foo(o);

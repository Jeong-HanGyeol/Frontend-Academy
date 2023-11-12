function doException() {
  throw new Error("wow! Error!");
}

function noException() {
  return true;
}

function callException(type) {
  if (type === "do") {
    doException();
  } else {
    if (noException() === false) {
      console.log("오류처리");
    }
  }
}

function main() {
  try {
    callException("do");
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done!");
  }
}

main();

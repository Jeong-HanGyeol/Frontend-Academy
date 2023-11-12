let age = 10;

if (age === 10 || age > 20) {
  console.log("나이는 10세");
} else if (age === 20) {
  console.log("나이는 20세");
} else if (age === 30) {
  console.log("나이는 30세");
} else {
  console.log("모르겠습니다.");
}

age = 2;
if (age) {
  console.log("나이는 10세");
}

if (age === 1) {
  console.log(1);
} else if (age === 2) {
  console.log(2);
} else if (age === 3) {
  console.log(3);
} else {
  console.log("??");
}

switch (age) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("??");
    break;
}

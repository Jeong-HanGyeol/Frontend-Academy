// 객체 문법
type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  ["className"]?: string;
};

let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: "red",
};

// 함수 이용
function makeBox(
  width: number,
  height: number,
  borderRadius: number,
  backgroundColor: string
): Box {
  return {
    width,
    height,
    borderRadius,
    backgroundColor,
  };
}

makeBox(100, 100, 0, "blue");

// 클래스 이용
class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string
  ) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

const boxShape = new Shape(10, 10, 0, "blue");

// 객체 변형
box.borderRadius = 10;
box["className"] = "box rounded";

const box1 = box;
const box2 = Object.assign({}, box);
const box4 = { ...box, borderRadius: 10 };
const box3 = JSON.parse(JSON.stringify(box));

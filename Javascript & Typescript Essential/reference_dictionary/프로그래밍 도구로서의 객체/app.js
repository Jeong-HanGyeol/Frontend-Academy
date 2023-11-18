function calculateCircleArea(radius) {
  return radius * radius * Math.PI;
}

function calculateRectArea(width, height) {
  return width * height;
}

// circle 클래스
class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }
  get radius() {
    return this.#radius;
  }

  area = () => this.#radius * this.#radius * Math.PI;
}

// rect 클래스
class Rect {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(calculateCircleArea(circle.radius));
console.log(calculateRectArea(rect.width, rect.height));

console.log(circle.area());
console.log(rect.area());

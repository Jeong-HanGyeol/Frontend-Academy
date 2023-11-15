type MyObject = {
  name?: string;
  age: number;
  getFamilyName: () => string;
  getBloodType: () => string;
  getLastName: () => string;
};

const obj = {
  name: "han gyeol",
  age: 30,
  getFamilyName: function () {
    return "jeong";
  },
  getBloodType() {
    return "A";
  },
  getLastName: () => "Jeong",
};

obj.name;
obj.age;
delete obj.name;
obj.getFamilyName();
obj.getBloodType();
obj.getLastName();

class Person {
  _bloodType: string;

  constructor(bloodType: string) {
    this._bloodType = bloodType;
  }

  set bloodType(btype: string) {
    if (btype === "A" || btype === "B" || btype === "O" || btype === "AB") {
      this._bloodType = btype;
    }
  }

  get bloodType() {
    return `${this._bloodType}`;
  }
}

const p1 = new Person("A");

p1.bloodType;
p1.bloodType = "C";

const myObj = Object.create(null, {
  name: {
    value: "jeong Hangyeol",
    writable: true, // 속성 변경
    configurable: true, // 속성 삭제
  },
});

myObj.name = "한결";
delete myObj.name;

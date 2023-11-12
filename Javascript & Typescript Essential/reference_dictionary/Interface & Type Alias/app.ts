import * as allTypes from "./type";

const foo: allTypes.FooFunction = function () {
  return "아무 쓸모 없는 함수";
};

const iUsers: allTypes.IUser = {
  //   id: "1",
  id: 1,
  name: "빌 게이츠",
  email: "bill@ms.com",
  receiveInfo: false,
  active: "Y",
};

const iUserProfile: allTypes.TUserProfile = {
  id: 1,
  name: "빌 게이츠",
  email: "bill@ms.com",
  receiveInfo: false,
  active: "Y",
  profileImage: "https://...",
  github: "okay",
};

const IUserProfiles: allTypes.TUserProfile[] = [];

const iStyle: allTypes.IOnlyNumberValueObject = {
  borderWidth: 5,
  width: 300,
  height: 100,
};

const TStyle: allTypes.TOnlyBooleanValueObject = {
  border: true,
  visible: false,
  display: true,
};

const getApi: allTypes.IGetApi = (url, search = "") => {
  return new Promise((resolve) => resolve("OK"));
};

getApi("./api/users").then((data) => console.log(data));

class Rect implements allTypes.IRect {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.id = Math.random() * 100000;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

function createDefaultRect(cstor: allTypes.IRectConstruct) {
  return new cstor(0, 0, 100, 100);
}

const rect1 = new Rect(0, 0, 100, 20);
const rect2 = createDefaultRect(Rect);

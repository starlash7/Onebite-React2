// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let { name, age, hobby } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func(person);

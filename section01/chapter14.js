//스코프
// -> 전역 스코프  / 지역 스코프

let a = 1; // 전역스코프

function funcA() {
  let b = 2; //지역 스코프
  console.log(a);
}

funcA();

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}

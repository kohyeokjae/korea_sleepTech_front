export const tmp = "";

//! === 인터페이스(interface) ===
// : 객체(속성, 메서드) 구조를 정의하는 TS 기능
// +) 함수 타입 정의도 가능

// - 컴파일 시점에 타입 체킹을 사용
// : 다양한 구현체에 동일한 인터페이스를 사용하여 일관성과 재사용성을 향상

//? cf) 타입 별칭(type alias)
// : 데이터 타입 명시
// - 원시 타입, 유니온, 인터섹션 등의 모든 타입을 별칭을로 지정 가능

type UserType = {
  name: string;
  age: number;
};

//? 1) 인터페이스 구현 방법
// : interface 키워드 사용
// - 인터페이스명은 대문자로 시작
// - 객체의 문법 체계를 모두 사용 가능 (옵셔널?, readonldy)

// interface 인터페이스명 {}
interface IUser {
  // 객체 속성 명시
  name?: string;
  readonly age: number;

  // 객체 메서드 명시
  // : 메서드명(매개변수: 타입): 반환 타입
  greet(name: string): void;
}

let userA: IUser = {
  age: 50,

  // greet(name) {
  //   console.log(`${name} hello`);
  // },

  greet: (name) => {
    console.log(`Hello ${name}`);
  },
};

userA.greet("홍길동"); // Hello 홍길동

//? 2) 클래스에서 인터페이스 구현
// : implements 키워드를 사용하여 해당 타입을 가지는 클래스를 정의
class Student implements IUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(name: string): void {
    console.log(`Hello, my name is ${name}`);
    console.log(`Hello, my name is ${this.name}`);
  }
}

const student1 = new Student("고길동", 23);
student1.greet("홍길동");
// Hello, my name is 홍길동
// Hello, my name is 고길동 - this.name

const student2 = new Student("구길동", 20);
student2.greet("홍동길");
// Hello, my name is 홍동길
// Hello, my name is 구길동 - this.name

//? 3) 인터페이스의 확장
// : extends 키워드
//   (인터페이스 >> 인터페이스)
//   (클래스 >> 클래스)
// VS implements 키워드
//   (인터페이스 >> 클래스)

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
  // color: string; - 해당 속성이 생략된 것 처럼 작동
}

let square1: Square = {
  // sideLength, color 속성이 없습니다.
  color: "red",
  sideLength: 10,
};

// 타입스크립트(typeScript)란?
// 타입스크립트를 컴파일하면 자바스크립트가 된다.
// 타입스크립트는 자바스크립트와 다르게 실행 이전, 즉 코드 작성 시 에러가 있으면 자바스크립트로 컴파일 되지 않는다. -> IDE 작성단계에서 에러 감
// => 이 말은 즉슨 JS 와 달리 코드 작성과정에서 코드를 실시간으로 디버깅할 수 있어 매우 편리하다.
// 그러므로 만약 타입스크립트가 정상적으로 컴파일(이 때 컴파일러가 작동하지 않고 트렌스파일러가 작동) 된다면 자바스크립트 코드에도 버그가 전혀 없다는 것을 의미한다.

// ex code -> TypeScript 는 JS 에서 use strict 를 적용한 것과 같다.
const myName = {
    nickName: "brain"
}

// JS 였다면 run 한 후에야 에러를 확인할 수 있겠지만, TS 의 경우 IDE 코딩단계에서 에러를 뱉어준다.
myName.hello();

// 아래 코드도 마찬가지로 JS 였다면 그냥 실행되어 1, 2, 3, 4true 로 실행되었겠지만, TS 의 경우 IDE 에서 에러라고 말해준다.
[1, 2, 3, 4] + true

function divide(a, b) {
    return a / b;
}

// JS 의 경우에는 그냥 실행되고 에러도 나오지 않게 된다.
// 하지만 TS 의 경우 컴파일 이전에 숫자형 타입이 아니라는 것과 파라미터가 하나 더 필요하다는 에러가 나오게된다.
divide("hello")

// TS 는 변수의 타입을 명시적으로 적어줄 수도 있고 JS 처럼 let 형식으로 쓴다면 타입을 추론하여준다.
let a = "hello";
a = "bye"    // string 으로 인식
a = 1        // a 는 string 으로 인식하기 때문에 JS 라면 작동했겠지만, JS 는 에러가 나온다. -> 타입은 변경할 수가 없다.

let b : boolean = "x" // b 가 boolean 타입이라는 것을 명시했기 때문에 "x" 라는 string 을 대입할 수가 없다. : 형식으로 변수 타입 지정가능 -> 비추천하는 방식

// let c : number[] = [];
let c = [1, 2, 3];  // 또한 TS 는 array 의 타입도 지정해준다. number[]
c.push("1");        // number array 이므로 string 을 넣을 수 없음

// TS 의 타입
// 1. optional type -> object 와는 조금 다름
const player : {
    name: string,
    age?: number    // ? 를 적게되면 필수값이 아닌 선택값이 된다.
} = {
    name: "joungwoo",
    // age: 28
};

// Object 타입을 명시적으로 정해주는 방법

// 위와 같이 속성값의 타입을 지정해줄 수 있다. 또한 파라미터처럼 필요로 하는 값이 되는데, ? 를 입력함으로써 삼항연산자 처럼 사용 가능(없으면 undefined)
// 만약 player 를 늘리고 싶을 때... 필요로하는 속성값은 같은데 계속 선언해야하는 불편함이 있을 수 있다.
// 이 경우에는 Alias 타입을 지정하여 재사용 할 수 있게끔 할 수 있다.

// ex
type Age = number;
type Name = string;
type Player = {
    name: Name,
    age?: Age   // 선택적 타입
};

//Alias 타입의 예
const woo : Player = {
    name: "joungwoo"
};

// 함수에서 인수의 타입을 지정하기
// function playerMaker(name: string) : Player {   // 함수에서 콜론 뒤에 적는 값은 return 값을 지정하는 것이다.
//     return {
//         name
//     };
}

// 위 함수선언을 화살표함수로 바꿔보았을 때,
const playerMaker = (name: string) : Player => ({name});


const joungwoo = playerMaker('joungwoo');

// 만약 joungwoo 객체에 age 프로퍼티를 부여하고 싶을 때,
// 리턴값을 지정하지 않았을떄, TS 에서는 이런 형식으로 프로퍼티 추가를 용인하지 않음
joungwoo.age = 28   // joungwoo 변수가 Player 타입이라고 return 값을 지정해주었기 때문에 age 설정이 가능해졌다.
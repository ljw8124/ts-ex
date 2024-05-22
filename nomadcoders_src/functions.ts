// arrow function 전형적인 모습드
// const add = (a:number, b:number) => a+b

// Call Signature 모습
// type 으로 구조를 먼저 만들어주고, 그 다음에 함수를 구현하기도 함. 재 사용성 때문에.
type Add = (a: number, b: number) => number;

// Add 의 타입을 알기 때문에 a 와 b 가 number 라는 것을 앎
const add:Add = (a, b) => a + b;


// overloading Example
type Minus = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}

const minus: Minus = (a, b) => {
    if(typeof b === "string") return a;

    return a + b;
}

type FConfig = {
    path: string,
    state: object
}

type Push = {
    (path: string) : void
    (config: FConfig): void
}

const push:Push = (config) => {
    if(typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path, config.state);
    }
}

type Custom = {
    (a: number, b: number) : number
    (a: number, b: number, c: number) : number
}

// c 는 optional
const custom:Custom = (a, b, c?: number) => {

    if(c) return a + b + c;

    return a + b;
}

custom(1, 2);
custom(1, 2, 3);
// concrete string  지정하기 => type alias
type Team = "red" | "blue" | "yellow";
type HealthBar = 1 | 5 | 10;

// type 으로 지정하기
// type TeamPlayer = {
//     nickName: string,
//     team: Team
//     healthBar: HealthBar
// };

// 인터페이스는 딱 한가지 목적을 가지고 있다.
// 그건 오브젝트의 모양을 특정해주는 것
// React.js 를 이용할 때 많이 사용함
interface TeamPlayer {
    nickName: string,
    team: Team,
    healthBar: HealthBar
}

const exPlayer: TeamPlayer = {
    nickName: "joungwoo",
    team: "blue",
    healthBar: 1
}

interface UserInfo {
    name: string
}

interface UserInfo {
    health: number;
}

interface UserInfo {
    firstName: string
}

interface PlayerInfo extends UserInfo {

}

const jw: PlayerInfo = {
    name: 'joungwoo',
    health: 100,
    firstName: 'lee'
}

// 인터페이스는 property 를 축적시킬 수 있다는 장점이 있다

abstract class abUser {
    constructor(
        protected firstName: string,
        protected lastName: string
    ) {}

    abstract sayHi(name: string): string
    abstract fullName(): string
}

class childPlayer extends abUser {
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    sayHi(name: string): string {
        return `Hello! ${name}. My name is ${this.fullName()}`;
    }

}

// 추상화와 interface 의 차이
// 추상 클래스는 new 연산자로 인스턴스 생성을 허용하지 않는다
// 추상 클래스는 상속받은 클래스를 어떻게 사용해야하는지 알려주는 가이드 같은 존재이다.(자바와 비슷함)
// 문제는 추상 클래스는 js 로 컴파일 되어도 존재한다는 점이다.

interface IntUser {
    firstName: string
    lastName: string
    sayHi(name: string): string
    fullName(name: string): string
}

interface IntHuman {
    health: string
}

// implement 를 사용하여 인터페이스를 받게되면, js 로 컴파일했을 때 IntUser 의 존재가 사라지므로 더 가벼운 코드가 된다
// 즉 파일의 용량을 줄여야 한다면, ts 에서 interface 로 구현한다면 js 로 컴파일 후 코드가 사라지게 되므로 더 가볍게 된다.
// 하지만 아래 생성자에서 보는 것 처럼 interface 를 사용한다면 public 으로 파라미터를 받아야 한다.
// 다수의 인터페이스를 상속받을 수도 있다.
class IntPalyer implements IntUser, IntHuman {
    constructor(
        // public 이라고 명시해주어야 함
        public firstName: string,
        public lastName: string,
        public health: string
    ) {}

    sayHi(name: string): string {
        return '';
    }

    fullName(name: string): string {
        return '';
    }
}

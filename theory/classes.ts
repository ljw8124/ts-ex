// TS 로 물론 객체지향으로 코드를 구현할 수 있다
class Player {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ) {}
}

const joungwoo = new Player("lee", 'joung', '정우');

// C# 이나 java 처럼 private 으로 생성하면 접근이 되지 않는다.
// javaScript 라면 생성이 가능하겠지만, TypeScript 는 컴파일 단계에서 실패하게 된다.
// joungwoo.firstName;

// 추상 클래스
// 추상 클래스는 다른 클래스가 상속받을 수 있도록 만드는 클래스이고,
// 직접 인스턴스를 만들 수는 없다
abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        protected nickName: string
    ) {
    }

    abstract getNickName():void

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Tutor extends User{
    getNickName() {
        console.log(this.nickName);
    }
}

const kuki = new Tutor("lee", 'kuki', 'puppy');

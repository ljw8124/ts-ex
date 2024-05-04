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
// 물론 JS 로 컴파일되면서 아래 범위 같은 부분은 지워짐
abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        protected nickName: string  // 자바에서와 같이 protected 로 해당 변수 접근성을 줄 수 있음
    ) {
    }

    // 추상메서드를 선언함으로써, 상속받는 자식 클래스에서 구현해야함
    abstract getNickName():void

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Tutor extends User{
    // 추상메서드가 있으므로 오버라이딩 해야함(필수)
    getNickName() {
        console.log(this.nickName);
    }
}

const kuki = new Tutor("lee", 'kuki', 'puppy');

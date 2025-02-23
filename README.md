
# TypeScript

## TypeScript 와 JavaScript 의 관계
<b>"타입스크립트는 타입이 정의된 자바스크립트의 상위집합이다."</b>
</br></br>
타입스크립트는 문법적으로 자바스크립트의 상위 집합(super set)이다.</br>
즉, 자바스크립트 문법에 오류가 없다면 유효한 타입스크립트 프로그램이다.</br>
하지만 자바스크립트 프로그램에서 어떤 이슈가 존재한다면 문법 요류가 아니더라도 타입 체커에서 지적당할 가능성이 크다.</br>


문법의 유효성과 동작의 이슈는 독립적인 문제로, 타입스크립트에서는 여전히 작성된 코드를 파싱하고 자바스크립트로 변환할 수 있다.</br>
그러므로 .js 로 되어있는 프로그램을 .ts 로 바꾸어도 오류가 나지않고 잘 작동된다는 의미이다.</br>
=> 이는 자바스크립트 코드를 타입스크립트 코드로 마이그레이션하는데 엄청난 이점이 된다.


자바스크립트는 실행 이전에 오류를 알 수 없는 경우가 있지만, 타입스크립트의 경우 타입 체커에서 문제를 찾아낸다
```js
// JavaScript 의 경우
let city = 'new york city';
console.log(city.toUppercase());  // TypeError: city.toUppercase is not a function
```

```ts
// TypeSrcipt 의 경우
let city = 'new york city';
console.log(city.toUppercase());
// ~~~ 'toUppercase' 속성이 'string' 형식에 없습니다.
// toUpperCase 를 사용하시겠습니까?
```

### tsconfig.json 파일 자동생성 커멘드
```shell
$ tsc --init
```

이 때, noImplicitAny 와 strictNullChecks 를 사용하는 것이 좋음</br>
- noImplicitAny: 변수들이 미리 정의된 타입을 가져야 하는지 여부 제어
- strictNullChecks: null 과 undefined 가 모든 타입에서 허용되는지 확인 -> 이 옵션은 코드 작성을 어렵게 하는 경향이 있으므로,
새 프로젝트를 시작하거나 하는 등의 경우가 아니라면, 설정하지 않아도 괜찮음. 하지만 개인적 경험으로는 꼭 필요하다고 봄... JS 에서 최악의 에러이므로..


## TypeScript 에서의 코드생성과 타입이 관계없음을 이해하기
타입스크립트의 컴파일러는 아래 두 가지 역할을 함
- 최신 ts/js 를 브라우저에서 동작할 수 있도록 구버전의 js 로 트랜스파일 해줌
- 코드의 타입 오류를 체크함


위 두 가지는 서로 완전히 독립적으로 작동하고, ts -> js 과정에서 코드 내의 타입에는 영향을 주지 않는다.</br>
또한 그 js 의 실행 시점에도 타입은 영향을 미치지 않는다.


컴파일시에 오류가 나오더라도, 컴파일 되는 경우가 있다. 이것을 방지하기 위해서는 "noEmitOnError" 를 설정,적용해야 한다.

타입스크립트 타입은 런타임에 사용할 수 없으므로, 타입 정보 유지를 위한 별도의 방법이 필요함.</br>
일반적으로는 태그된 유니온과 속성 체크 방법을 사용함. 또는 클래스 같이 타입스크립트 타입과 런타임 값, 둘 다 제공하는 방법이 있음


### any Type
- any 타입은 타입 체커와 타입스크립트 언어 서비스를 무력화 시켜 버린다.</br>
any 타입은 진짜 문제점을 감추고 개발 경험을 나쁘게 하며, 타입 시스템의 신뢰도를 떨어트리므로 최대한 사용을 지양해야한다.

### Class 와 Interface, type
둘 다 상속 개념으로 쓸 수 있고, 추상클래스와 인터페이스의 경우 청사진 역할을 할 수 있다.
 - Class: js 에서도 있는 문법이어서, 상속하여 사용 가능하다. 하지만 js 로 컴파일 했을 때도 보이기 때문에 용량 면에서 인터페이스보다 클 가능성이 있다.
- Interface: 클래스처럼 상속하여서 사용 가능하지만, js 파일로 컴파일 했을 때 보이지 않는다는 큰 장점이 있다. 즉, ts 에서만 존재한다.</br>
또한 확장이 용이하다고 할 수 있는데, 여러개의 인터페이스를 상속받아 사용할 수 있기 때문이다.
- type: interface 와 유사하게 청사진 역할을 한다. 하지만 property 를 추가해야하는 경우 임의로 추가하지 못하고, type 원형에서 추가해야 한다.</br>
interface 와 다른점은, interface 는 다중 상속으로 property 를 추가한 것 처럼 보이게 할 수 있다.


## 타입스크립트 프로젝트 설정 방법(수동방식, 많이 사용하지 않음)
웹팩 쓰는 것과 같이 많이 사용하지만 직접 수동으로 설정하는 것은 흔치 않음</br>
```shell
$ mkdir _prjName
$ npm init -y
$ npm install -D typescript
```

위 명령어 사용 실행 후, src 디렉토리를 만들고 그 아래 .ts 소스를 만들어준다</br>
그 후, 컴파일을 위한 tsconfig.json(파일이름 고정) 생성

```shell
$ touch tsconfig.json
```

option 설정
```json
{
    "infclue": ["src"],  ->  ts 파일 경로 설정
    "compileOptions": {"outDir":  "build"},  -> 컴파일 후 js 파일 생성될 디렉토리 지정
    "target": "ES6",   -> 컴파일 될 js 버전 지정, ES6 가 가장 보편적임
}
```

컴파일 명령어
```shell
$ tsc [ts 파일] # 생략시 모든 ts 파일
```

빌드없이 타입스크립트 실행하는 방법
```shell
$ npm i -D ts-node # 빌드없이 개발에서만 빠르게 새로고침
```

### d.ts 파일
type 을 declare(정의) 하기 위한 파일이다.</br>
기조 javaScript 로 만들어진 서드파티 모듈들을 typeScript 환경에서도 사용할 수 있도록
따로 타입만 정리해서 넣어둔 파일이라고 볼 수 있다.</br>
```ts
export type Age = number;
export interface Person {
    name: string;
}
```

### JavaScript node module 으로만 선언된 경우
이 경우에는 TypeScript 에서는 타입 인식을 못하기 때문에 d.ts 파일로 일일이 설정해주어야한다.</br>
하지만 아래 url 에서 npm에 있는 거의 모든 module 을 정의해놓은 파일이 있음</br>
DefinitelyTyped: https://github.com/DefinitelyTyped/DefinitelyTyped

그 후 사용할 수 있도록 아래 cmd 명령어를 실행한다
```shell
$ npm i -D @types/node
```


참고사이트</br>
https://bk0625.tistory.com/m/19


ts 플레이그라운드(다운없이 이용가능)</br>
https://www.typescriptlang.org/play/

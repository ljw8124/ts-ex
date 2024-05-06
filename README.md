
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
console.log(city.touppercase());
// ~~~ 'toUppercase' 속성이 'string' 형식에 없습니다.
// toUpperCase 를 사용하시겠습니까?
```


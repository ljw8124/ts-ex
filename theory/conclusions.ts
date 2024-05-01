function superPrint<V>(a: V[]) {
    return a[0];
}

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, false,]);
const c = superPrint(['a', 'b', 'c']);
const d = superPrint([1, 2, true, false, "dummy"]);

// 이렇게 오버라이딩할 수도 있음
// 하지만 타입스크립트가 스스로 타입을 찾도록 하는것이 좋음
// 아래 경우는 명시적으로 해야하는 경우에만 사용
const e = <string>superPrint(["hi", "name", "place"]);

// 저장하여 사용
type Player<E> = {
    name: string
    extraInfo: E
};

// 제네릭에 사용할 정보
type joungProfile = {
    food: string
}

// 오버라이딩과 같은 느낌
type joungPlayer = Player<joungProfile>

const joungwoo: joungPlayer = {
    name: "joungwoo",
    extraInfo: {
        food: "taco"
    }
}

const extraPlayer: Player<null>  = {
    name: "extra",
    extraInfo: null
}


// 아래와 같이 다른 표현방법으로 같은 Array 를 선언할 수 있음
const numArr: number[] = [1, 2, 3];
const sameArr: Array<number> = [1, 2, 3];


// 다형성
type SuperPrint = {
    // (arr: number[]) :void
    // (arr: boolean[]) : void
    // (arr: string[]) : void
    // (arr: (number|boolean)[]) : void

    // generic -> placeholder 와 같음. Type 을 유추하도록 함
    // any 와 다르게 타입에 대한 정보를 가지고 있게 되어 유리함
    <T, M>(arr: T[], b?: M) :T
}

// @ts-ignore
const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i));

    return arr[0];
}

// const testPrint01 = superPrint([1, 2, 3, 4], "X");
// const testPrint02 = superPrint([true, false, true, true], 1);
// const testPrint03 = superPrint(['a', 'b', 'c'], false);
// const testPrint04 = superPrint([1, 2, true, false], []);

// 실제로는 위에 방식으로 작성하지 않음
// 직접 제네릭을 사용하여 선언하는 경우는 없고, 다른 패키지에서 가져다 쓰거나 리이브러리를 이용할 때 사용한다.

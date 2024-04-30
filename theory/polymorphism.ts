// 다형성
type SuperPrint = {
    // (arr: number[]) :void
    // (arr: boolean[]) : void
    // (arr: string[]) : void
    // (arr: (number|boolean)[]) : void

    // generic -> placeholder 와 같음. Type 을 유추하도록 함
    // any 와 다르게 타입에 대한 정보를 가지고 있게 되어 유리함
    <T>(arr: T[]) :T
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i));

    return arr[0];
}

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true, true]);
const c = superPrint(['a', 'b', 'c']);
const d = superPrint([1, 2, true, false]);
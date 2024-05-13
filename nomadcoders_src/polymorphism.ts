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

// 제네릭은 placeholder 타입을 쓰기도 한다 -> 재사용성을 위해서
interface SStorage<T> {
    [key: string]: T
}

// 제네릭을 큻래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에 인터페이스는 제네릭을 사용한다.
class LocalStorage<T> {
    private storage: SStorage<T> = {}

    set(key: string, value: T) {
        // 구현부
        this.storage[key] = value;
    }
    remove(key: string) {
        // 구현부
        delete this.storage[key];
    }
    get(key: string): T {
        // 구현부
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

// 따라서 위에 클래스를 쓰려면 아래와 같이 선언해야함
const stringStorage = new LocalStorage<string>();

stringStorage.set("setting key", "setting Value");
stringStorage.get('setting Key');

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get('key');
// 아래 타입 구조는 string 만을 property 로 가지는 Object 라는 것을 명시해줌
type Words = {
    [key: string]: string;
}

class Dict {
    private words: Words;

    constructor() {
        this.words = {};
    }

    add(word: Word): void {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    getWord(term: string): string {

        let returnValue: string;

        if(!this.words[term]) {
            returnValue = '검색 결과 없음';
        } else {
            returnValue = this.words[term];
        }

        return returnValue;
    }
}

class Word {
    constructor(
        // readonly 로 한 번 할당 받으면 변경을 불가능하도록 설정
        public readonly term: string,
        public readonly def: string
    ) {
    }
}

const kimchi = new Word("Kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);

dict.getWord("kimchi");
// 내가 로컬에서 생성한 js 파일과 같은 외부 파일을 node_module 처럼 사용하는 방법
// 하지만 실제로 구현하여서 사용할 일은 거의 없음
interface Config {
    url: string;
}

declare module myPackage {
    function init(config: Config): boolean;

    function exit(code: number): number;
}


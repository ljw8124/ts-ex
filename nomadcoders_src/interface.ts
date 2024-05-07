// concrete string  지정하기 => type alias
type Team = "red" | "blue" | "yellow";
type HealthBar = 1 | 5 | 10;

// type 으로 지정하기
// type TeamPlayer = {
//     nickName: string,
//     team: Team
//     healthBar: HealthBar
// };

// 인터페이스는 딱 한가지 목적을 가지고 있다.
// 그건 오브젝트의 모양을 특정해주는 것
// React.js 를 이용할 때 많이 사용함
interface TeamPlayer {
    nickName: string,
    team: Team,
    healthBar: HealthBar
}

const exPlayer: TeamPlayer = {
    nickName: "joungwoo",
    team: "blue",
    healthBar: 1
}

interface UserInfo {
    name: string
}

interface UserInfo {
    health: number;
}

interface UserInfo {
    firstName: string
}

interface PlayerInfo extends UserInfo {

}

const jw: PlayerInfo = {
    name: 'joungwoo',
    health: 100,
    firstName: 'lee'
}

// 인터페이스는 property 를 축적시킬 수 있다는 장점이 있다
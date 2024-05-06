// 구조적 타이핑
interface Vertor2D {
    x: number;
    y: number;
}

function calculateLength(v: Vertor2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

// Vector2D 로 인식함
interface NamedVector {
    name: string;
    x: number;
    y: number;
}

const v: NamedVector = {x: 3, y: 4, name: 'lee'};

calculateLength(v);
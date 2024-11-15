// enum Direction {
//     Up,        // 0
//     Down,      // 1
//     Left,      // 2
//     Right      // 3
// }
//
// const move:Direction = Direction.Down
// console.log(Direction.Up);     // 0
// console.log(Direction.Right);  // 3

// ================================================

// enum StatusCode {
//     Success = 200,
//     NotFound = 404,
//     ServerError = 500
// }
//
// console.log(StatusCode.NotFound); // 404

// ================================================

// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
// }
//
// console.log(Direction.Up); // "UP"

// ================================================

// enum Status {
//     Ready = 1,
//     Waiting = 2
// }
//
// console.log(Status.Ready);       // 1
// console.log(Status[1]);          // "Ready"

// ================================================

enum ShapeKind {
    Circle,
    Square
}

// interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
// }
//
// interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
// }
//
// function getArea(shape: Circle | Square) {
//     if (shape.kind === ShapeKind.Circle) {
//         return Math.PI * shape.radius ** 2;
//     } else {
//         return shape.sideLength ** 2;
//     }
// }

// ================================================

const enum EDirection {
    Up,
    Down,
    Left,
    Right,
}

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

EDirection.Up;
ODirection.Up;


function walk(dir: EDirection) {}

type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}


walk(EDirection.Left);
run(ODirection.Right);

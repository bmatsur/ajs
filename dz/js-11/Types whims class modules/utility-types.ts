/**
 * Partial<Type>
 */

// interface Todo {
//     title: string;
//     description: string;
// }
//
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//     return { ...todo, ...fieldsToUpdate };
// }
//
// const todo1:Todo = {
//     title: "organize desk",
//     description: "clear clutter",
// };
//
// const todo2 = {
//     title:'Ujdsf',
//     description: "throw out trash",
// }
//
// const todo3 = updateTodo(todo1, todo2);

/**
 * Required<Type>
 */

// interface Props {
//     a?: number;
//     b?: string;
// }
//
// const obj: Props = { a: 5 };
//
// const obj2: Required<Props> = { a: 5, b:'dfg' };


/**
 * Readonly<Type>
 */

// interface Todo {
//     title: string;
// }

// const todo: Readonly<Todo> = {
//     title: "Delete inactive users",
// };

// todo.title = "Hello";


/**
 * Record<Keys, Type>
 */
//
// type CatName = "miffy" | "boris" | "mordred";
//
// interface CatInfo {
//     age: number;
//     breed: string;
// }
//
// const cats: Record<CatName, CatInfo> = {
//     miffy: { age: 10, breed: "Persian" },
//     boris: { age: 5, breed: "Maine Coon" },
//     mordred: { age: 16, breed: "British Shorthair" },
// };
//
// cats.miffy

/**
 * Pick<Type, Keys>
 */

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }
//
// type TodoPreview = Pick<Todo, "title" | "completed">;
//
// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
// };
//
// todo;

/**
 * Omit<Type, Keys>
 */

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
//     createdAt: number;
// }
//
// type TodoPreview = Omit<Todo, "description" | "createdAt">;
//
// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
// };
//
//
// type TodoInfo = Omit<Todo, "completed" | "createdAt">;
//
// const todoInfo: TodoInfo = {
//     title: "Pick up kids",
//     description: "Kindergarten closes at 5pm",
// };

/**
 * Exclude<UnionType, ExcludedMembers>
 */

// type Shape =
//     | { kind: "circle"; radius: number }
//     | { kind: "square"; x: number }
//     | { kind: "triangle"; x: number; y: number };
//
// type T3 = Exclude<Shape, { kind: "circle" }>
//
//
//
// type Type =  string | bigint | number
// type T4 = Exclude<Type, bigint>


/**
 * Extract<Type, Union>
 */

// type Shape =
//     | { kind: "circle"; radius: number }
//     | { kind: "square"; x: number }
//     | { kind: "triangle"; x: number; y: number };

// type T2 = Extract<Shape, { kind: "circle" }>

// type Type =  string | bigint | number
// type T4 = Extract<Type, bigint>

// const a :T4 = 4

/**
 * NonNullable<Type>
 */

// type T0 = NonNullable<string | number | undefined>;
// type T1 = NonNullable<string[] | null | undefined>;

/**
 * Parameters<Type>
 */

// type T0 = Parameters<() => string>;
// type T1 = Parameters<(s: string) => void>;
// type T2 = Parameters<<T>(arg: T) => T>;

/**
 * ReturnType<Type>
 */

// type T0 = ReturnType<() => string>;
// type T1 = ReturnType<(s: string) => void>;
// type T2 = ReturnType<<T>() => T>;
//
// function f1(): string {
//     return 'Test';
// }
// type T3 = ReturnType<typeof f1>;


/**
 * UppercaseString<Type>
 */

// type LowercaseString = "hello";
// type UppercaseString = Uppercase<LowercaseString>; // "HELLO"

/**
 * LowercaseString<Type>
 */

// type UppercaseString = "HELLO";
// type LowercaseString = Lowercase<UppercaseString>; // "hello"

/**
 * Capitalize<StringType>
 */

// type LowercaseString = "hello";
// type CapitalizedString = Capitalize<LowercaseString>; // "Hello"

/**
 * Uncapitalize<StringType>
 */

// type CapitalizedString = "Hello";
// type UncapitalizedString = Uncapitalize<CapitalizedString>; // "hello"

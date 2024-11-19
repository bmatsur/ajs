// **************** fn

// const getFullNameArrow = (firstName: string, surname:string): string => {
//     return `${firstName} ${surname}`
// }


// **************** Objects
// function getFullName(userEntity: {firstName: string, surname: string}) {
//     return `${userEntity.firstName} ${userEntity.surname}`
// } //supplied Entity has to has firstName and surname property

// const user = {
//     firstName: 'Jack',
//     surname: 'Well',
//     city: 'York',
//     age: 44,
//     skills: {
//         dev: true,
//         devops: true
//     }
// }

// console.log(getFullName(user))



// **************** Array

// const skills: string[] = ['Dev', 'DevOps', 'Testing'];

// for(const skill of skills) {
//     console.log(skill)
// }

// console.log(` `)

// const result = skills
//     .filter((s: string) =>  s !== 'DevOps')
//     .map(s => s + '! ')
//     .reduce ((a,b) => a + b)

//     console.log(result)


// **************** Tuples
// const skills: [number, string] = [1, 'Dev'];
// const [id, skillName] = skills;

// console.log(id);

// const arr: [number, string, ...boolean[]] = [1, 'sdf', true, true, false]



// **************** Readonly
// const skill: readonly string[] = [1, 'Dev'];


// **************** Enums

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}

const result = {
    message: 'successful payment',
    statusCode: StatusCode.SUCCESS
}

if (result.statusCode === StatusCode.SUCCESS) {}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);


enum Roles {
    ADMIN,
    USER,
    GUEST
}
// 1 - success
// 2 - processing
// 3 - rejected

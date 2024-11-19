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
var skills = [1, 'Dev'];
var id = skills[0], skillName = skills[1];
console.log(id);
var arr = [1, 'sdf', true, true, false];

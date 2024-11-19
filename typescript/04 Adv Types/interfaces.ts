

interface User {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string;
}

interface UserWithRole extends User {
    roleId: number;
}

let user: UserWithRole = {
    name: 'asdf',
    age: 33,
    skills: ['1', '2'],
    roleId: 3,
    log(id) {
        return '';
    }
}

interface UserDictionary {
    [index: number]: User
}
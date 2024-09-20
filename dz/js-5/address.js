'use strict';
console.log('-----------address-----------')


const user = {
    username: "Tsb Mushtari",
    email: "tsb.mushtari@tsb.tj",
    age: 25
};

const address = {
    city: "Dushanbe",
    state: "Tajikistan",
    postalCode: "734000"
};


const userProfile = {};
Object.assign(userProfile, user, address);

console.log(userProfile);
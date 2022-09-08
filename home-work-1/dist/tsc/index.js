"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const userInfo_1 = require("./userInfo");
function getUsersJobPositions(usersArray) {
    let usersJobPositions = [];
    usersArray.forEach(user => {
        const userInfo = userInfo_1.usersInfoArray.filter(userInfoId => userInfoId.userid == user.userid);
        usersJobPositions.push({
            name: user.name,
            position: userInfo[0].organization.position,
            age: userInfo[0].age,
            gender: user.gender
        });
    });
    return usersJobPositions;
}
const usersPositions = getUsersJobPositions(users_1.usersArray);
console.log(usersPositions);

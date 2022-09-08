import {usersArray, IUser, Gender} from "./users";
import {usersInfoArray} from "./userInfo";


// исходный вариант
// interface IUserJobPosition {
// 	name: IUser["name"],
// 	position: IUserInfo["organization"]["position"],
// 	age: IUserInfo["age"],
// 	gender: IUser["gender"]
// }

interface IUserJobPosition {
	name: string,
	position: string,
	age: number,
	gender: Gender
}

function getUsersJobPositions(usersArray: IUser[]): IUserJobPosition[]{
	let usersJobPositions: IUserJobPosition[] = [];
	usersArray.forEach(user =>{
		const userInfo = usersInfoArray.filter(userInfoId => userInfoId.userid == user.userid);
		usersJobPositions.push(
			{
				name: user.name,
				position: userInfo[0].organization.position,
				age: userInfo[0].age,
				gender: user.gender
			}
		);
	});
	return usersJobPositions
}

const usersPositions = getUsersJobPositions(usersArray);

console.log(usersPositions)

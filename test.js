let users = [
    { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
    { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
    { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
    { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
]

// Finding the children under the age of 13

function getChildren(users){
	return users.filter(people=>{
    	return(people.age < 13
    )}
)}

console.log(getChildren(users))

// Everyone's age

function getAges(users){
	return users.map((user)=>user.age)
}

console.log(getAges(users))

// Find oldest user

function getOldest(users){
    let age = 0
    let itemIndex = 0
	users.forEach((user, index)=>{
        
    	if(user.age > age){
        	age = user.age;
          itemIndex = index;
        }
    })
    return users[itemIndex]
}

console.log(getOldest(users))

// return the initials of each user

function getFullInitials(users) {
  return users.map((user) => {
    return `${user.firstName[0]}${user.lastName[0]}`;
  });
}

console.log(getFullInitials(users));
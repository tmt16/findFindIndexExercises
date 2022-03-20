/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should 
return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {

  // create usersArray.find function
  return usersArray.find(function(value) {

    // return object if username equals value[objValue]
    return username === value.username;
  })
}


/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should 
remove the object from the array. If the object is not found, return undefined. 

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

function removeUser(usersArray, username) {

  // create variable: const objIndex = create usersArray.findIndex function
  let objIndex = usersArray.findIndex(function(value) {

      // return if username is equal to value.username
      return username === value.username;
  })

    // if statement: return "undefined" if objIndex is equal to -1
    if (objIndex === -1) return;

    // return: splice objIndex value from array
     return usersArray.splice(objIndex, 1)[0];
}
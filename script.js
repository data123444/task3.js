// 1
let functest = (a,b,c,d,i,e,f,g,l) => console.log(a+b+c+d+i+e+f+g+l);
functest(10, 50, 6, 7, 8, 11, 6, 3, 9);

let functest2 = (a,b,c,d,i,e,f,g,l) => {return a+b+c+d+i+e+f+g+l};
 let return2 = functest2(10, 50, 6, 7, 8, 11, 6, 3, 9);
 console.log(return2);
//2
 
function getFullName(user) {
    if (user.isloggedin) {
      return `${user.firstname} ${user.lastname}`;
    } else {
      return false;
    }
  }
  
 
  let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  };
  
  
  let fullName = getFullName(user);
  
  if (fullName !== false) {
    console.log(fullName); 
  } 

//////
  let getFullName1 = (user1) => {
    if (user1.isloggedin) {
      return `${user1.firstname} ${user1.lastname}`;
    } else {
      return false;
    }
  };
  
  let user1 = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  };
  
  let fullName1 = getFullName1(user1);
  
  if (fullName1 !== false) {
    console.log(fullName1);
  }

 //3
 function NumbersMax(numbers) {
    if (numbers.length === 0) {
      return undefined; 
    }
  
    return Math.max(...numbers);
  }
  
  let numbers = [20, 12, 1, 4];
  let Numbtest = NumbersMax(numbers);
  
  console.log(Numbtest);
  //4
  function KentNumbers(numbers3) {
    if (numbers3 % 2 === 0) {
        return 'this number is even'
    }
    else {
        return 'this number is odd'
    }
  }
  let numbers3 = 10;
  let result = KentNumbers(numbers3)
  console.log(result);
  
  
  //5
  let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push
  (array[i]);
}

console.log(reversedArray);
//6
let firstuserage = (age) => (age > 18 ? 'სრულწლოვანი' : 'არასრულწლოვანი')

let userage = 23 ;
let result4 = firstuserage(userage)
console.log(result4);

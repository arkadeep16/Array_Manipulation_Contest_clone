const data = [
  { name: 'john', age: 15, profession: 'developer' },
  { name: 'jane', age: 17, profession: 'admin' },
  { name: 'Sam', age: 24, profession: 'developer' },
  { name: 'Bam', age: 20, profession: 'developer' },
  { name: 'Pam', age: 14, profession: 'developer' },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((element) => {
    // console.log(element);
    if (element.profession == 'developer') {
      console.log(element);
    } else {
      null;
    }
  });
}

// 2. Add Data
function addData() {
  const name = prompt('Enter your name !');
  const age = prompt('Enter your age !');
  const profession = prompt('Enter your profession!');
  data.push({ name, age, profession });
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  res = data.filter((element) => element.profession !== 'admin');
  console.log(res);
}

// 4. Concatenate Array
function concatenateArray() {
  const data2 = [
    { name: 'johny', age: 24, profession: 'designer' },
    { name: 'janen', age: 27, profession: 'admin' },
    { name: 'sammy', age: 24, profession: 'designer' },
    { name: 'bammy', age: 20, profession: 'admin' },
    { name: 'pammy', age: 34, profession: 'designer' },
  ];
  let newArray = data.concat(data2);
  console.log(newArray);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  let avgAge = data.forEach((element) => {
    sum += element.age;
  });
  console.log(sum / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element.age > 25) {
      console.log('Persons exist, over 25 years old.');
      break;
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueProfessionArr = [];
  data.forEach((element) => {
    if (!uniqueProfessionArr.includes(element.profession)) {
      uniqueProfessionArr.push(element.profession);
    }
  });
  console.log(uniqueProfessionArr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => {
    return a.age - b.age;
  });
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((element) => {
    if (element.name == 'john') {
      element.profession = 'Manager';
    }
  });
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let count = 0;
  data.forEach((element) => {
    if (element.profession == 'developer') {
      count += 1;
    }
  });
  console.log(`We have ${count} developers in our system`);
}



'use strict';
//* Call method
//* call method is used to point this to another object
//* with call we can borrow functions created in another object

//* Making a independent function
//* Passing parameters
let printName = function (state, country = 'Not mentioned') {
  console.log(`${this.name} ${state} ${country}`);
};

const userDetails = {
  name: 'Pawan',
  age: '24',
  job: 'Software Engineer',
  printDetails: function () {
    console.log(`
    User name is => ${this.name}
    User age is => ${this.age}
    User job is => ${this.job}
    `);
  },
};

const userDetails2 = {
  name: 'Arun',
  age: '29',
  job: 'Software Engineer',
};

const userDetails3 = {
  name: 'Kriti',
  age: '25',
  job: 'Software Engineer',
  calcDOB: function () {
    console.log(`
    Your DOB is ${2022 - this.age}
    `);
  },
};

// userDetails.printDetails();
// userDetails3.calcDOB.call(userDetails);

// userDetails.printDetails.call(userDetails2);
// userDetails3.calcDOB.call(userDetails2);

// userDetails.printDetails.call(userDetails3);
// userDetails3.calcDOB();

// printName.call(userDetails, 'HP');
// printName.call(userDetails2, 'Delhi');
// printName.call(userDetails3, 'Chandigarh');

//* Apply method
//* There is slight difference between call and apply in call we pass arguments one by one to avoid this mess we can pass all arguments as an array in apply method at once

// printName.apply(userDetails, ['Himachal', 'India']);
// printName.apply(userDetails3, ['Delhi', 'India']);
// printName.apply(userDetails3, ['Chandigarh', 'India']);

//* Bind Method
//* Bind works similarly like call but rather then calling function directly it creates a copy of the original function and invoke it whenever we need it

let newName = printName.bind(userDetails, ['Himachal', 'India']);
newName();

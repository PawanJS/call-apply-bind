'use strict';
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

userDetails.printDetails();
userDetails3.calcDOB.call(userDetails);

userDetails.printDetails.call(userDetails2);
userDetails3.calcDOB.call(userDetails2);

userDetails.printDetails.call(userDetails3);
userDetails3.calcDOB();

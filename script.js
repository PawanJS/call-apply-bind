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

userDetails.printDetails();

const userDetails2 = {
  name: 'Arun',
  age: '29',
  job: 'Software Engineer',
};

userDetails.printDetails.call(userDetails2);

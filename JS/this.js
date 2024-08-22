// Example 1:

let cap1 = {
  name: 'Steve',
  sayHi: function () {
    console.log('Hi from ', this.name);
  },
};

cap1.sayHi();
let sayHiAdd = cap1.sayHi;
sayHiAdd();

// output: "Hi from Steve Hi from undefined"

// Example 2:

const cap2 = {
  name: 'Steve',
  sayHi: function () {
    console.log('53', this.name);
    const iamInner = () => {
      console.log('55', this.name);
    };
    iamInner();
  },
};

cap2.sayHi();

// Output: '53 Steve 55 Steve';

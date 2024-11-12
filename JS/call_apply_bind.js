const thanos = {
  name: 'THANOS',
  snap: function () {
    return `${this.name} snapped the finger and half of the universe ${
      this.name === 'THANOS' ? 'disappeared' : 'came back'
    }`;
  },
};

const ironman = {
  name: 'IRON MAN',
};

const bindedFunction = thanos.snap.bind(ironman);
console.log(bindedFunction());
//OUTPUT : IRON MAN snapped the finger and half of the universe came back

let cap = {
  name: 'Steve',
  team: 'Cap',

  petersTeam: function (mem1, mem2, ...otherMem) {
    console.log(
      `Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`
    );

    console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
  },
};

let ironMan = {
  name: 'Tony',
  team: 'Iron Man',
};

// borrow a fn from another obj for another object
// used to call it

// This will use 'ironman' as a object and call petersTeam fuction on 'ironMan' with provided arguments.
// cap.petersTeam.call(ironMan, "Anurag", "Vipin", "Shubham", "Vishnu", "Sanket");

// apply -> borrow for n number of paramters
// cap.petersTeam.apply(ironMan, ["Anurag", "Vipin", "Shubham", "Vishnu", "Sanket"]);

// bind -> copies function that you can call later with the same this
let ironManStolenMem = cap.petersTeam.bind(ironMan);

ironManStolenMem('Anurag', 'Vipin', 'Shubham', 'Vishnu', 'Sanket', 'Prajwal');

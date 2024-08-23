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

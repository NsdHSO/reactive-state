let a = [1, 2, 3, 4, 5, 7, 6, 8, 9, 10];

let ad = a.reduce((a, b, current, array) => a * b);
console.log(ad);

// closure
let acumulator = () => {
  let acc = 0;
  return {
    add: (value) => (acc = acc + value),
    get: () => acc,
    addGlobal: (value)=> {
        let x = 5
        return value + x
    }
  };
};

let newHoldValue = acumulator();
newHoldValue.add(4)
newHoldValue.add(4)
newHoldValue.add(4)
var fa= 5
console.log(newHoldValue.addGlobal(fa));
console.log(newHoldValue.get());

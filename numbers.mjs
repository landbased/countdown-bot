const OPERATIONS = [
  (a,b) => {
    const result = a+b;
    return {
      result,
      description: `${a}+${b}=${result}`,
    }
  },
  (a,b) => {
    const result = a-b;
    return {
      result,
      description: `${a}-${b}=${result}`,
    }
  },
  (a,b) => {
    const result = a*b;
    return {
      result,
      description: `${a}*${b}=${result}`,
    }
  },
  (a,b) => {
    const result = a%b === 0 ? a/b : null;
    return {
      result,
      description: `${a}/${b}=${result}`,
    }
  },
];

let FOUND = false;
function dt(numbers, goal, steps = []) {
  for (let i = 0; i < numbers.length && !FOUND; i++) {
    const a = numbers[i];
    for (let j = 0; j < numbers.length && !FOUND; j++) {
      if (i === j) {
        continue;
      }
      const b = numbers[j];
      for (let k = 0; k < OPERATIONS.length && !FOUND; k++) {
        const step = OPERATIONS[k](a,b);

  
        if (step.result) {
          const newSteps = steps.slice();
          newSteps.push(step.description);
    
          if (step.result === goal) {
            FOUND = true;
            console.log(`SOLUTION: ${newSteps}`);
            break;
          }
          const resultNumbers = numbers.filter((numVal, numIndex) => numIndex !== i && numIndex !== j);
          resultNumbers.push(step.result);
          dt(resultNumbers, goal, newSteps);
        }
      }
    }
  }
}

const args = process.argv.slice(2);
const goal = Number.parseInt(args[0]);
const numbers = args.slice(1).map((x) => Number.parseInt(x))

console.log(goal);
console.log(numbers);
console.log(`n = ${numbers.length}`);

const t1 = performance.now();

dt(numbers, goal);

const t2 = performance.now();
if (!FOUND) {
  console.log('no solution found');
}

console.log(`took ${t2-t1}ms`); 
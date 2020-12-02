const getLast = (list) => !!list && list.length ? list[list.length - 1] : null;

const stackMachineCalculator = (instructions) => {
  this.stack = [];
  const instrList = instructions.trim().split(' ');

  for (let instruction of instrList) {
    if (!isNaN(instruction)) {
      this.stack.push(instruction);
    } else if (instruction.toUpperCase() === 'DUP') {
      this.stack.push(getLast(this.stack));
    } else if (instruction.toUpperCase() === 'POP') {
      this.stack.pop();
    } else if (instruction === '+') {
      let last = parseInt(this.stack.pop() || 0);
      let secondLast = parseInt(this.stack.pop() || 0);
      this.stack.push(last + secondLast);
    } else if (instruction === '-') {
      let last = parseInt(this.stack.pop() || 0);
      let secondLast = parseInt(this.stack.pop() || 0);
      this.stack.push(last - secondLast);
    }
  }

  return Number(getLast(this.stack));
};

module.exports = stackMachineCalculator;

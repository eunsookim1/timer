const timer = function(numbers) {
  for (const num of numbers) {
    const delay = Number(num);
    if (typeof delay === 'number' && delay > -1) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay * 1000);
    }
  }
};

timer(process.argv.slice(2));

// node timer1.js 10 3 5 15 9
// Edge Cases : NO #'s / negative # / not #
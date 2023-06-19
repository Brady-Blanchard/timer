for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] < 0 || isNaN(process.argv[i])) {
  } else {
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, process.argv[i] * 1000);
  }
}

// TEST CODE

for (let i = 0; i <= 15; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${i} seconds`);
  }, i * 1000)
}
setTimeout(() => {
  process.stdout.write(`\n`);
}, 16 * 1000);
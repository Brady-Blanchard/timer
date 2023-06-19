for (let i = 2; i < process.argv.length; i++) {
  setTimeout(() => {
    process.stdout.write('\u0007');
    console.log('alarm!')
  }, process.argv[i] * 1000)
}
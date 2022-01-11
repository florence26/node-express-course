// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second') // this function gets offloaded, hence it appears last even though it is set to 0 seconds
}, 0)
console.log('third')
// completed and exited operating system process

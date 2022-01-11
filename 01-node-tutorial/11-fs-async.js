const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => { //need utf8 coding because if it doesn't, it returns a buffer
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')

// asynchronous, therefore prints 'start', 'starting the next one' then 'done with this task'

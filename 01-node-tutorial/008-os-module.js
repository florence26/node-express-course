const os = require('os') // because it is built in, do not need another file, also do not need ./
const path = require('path')
const {readFileSync, writeFileSync} = require('fs') //same as fs.readFileSync and fs.writeFileSync

const user = os.userInfo()
console.log(user)

console.log(`system uptime is ${os.uptime()} seconds`)

const currentos = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentos)

console.log(path.sep) //shows the separator used

const filePath = path.join('/content','subfolder','test.txt')
// goes into content -> subfolder -> test.txt
// gets normalised path
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
// just gets the text "test.txt"

//absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)

const first = readFileSync('./content/first.txt', 'utf8') // typically utf8
const second = readFileSync('./content/second.txt', 'utf8') // typically utf8

console.log(first, second)

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`) //either creates a new file or overwrites
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag:'a'}) // the flag means that it adds to the file rather than overwrites
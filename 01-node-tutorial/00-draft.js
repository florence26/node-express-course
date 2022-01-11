// intro
const amount = 9

if (amount < 10) {
    console.log('small number')
} else {
    console.log('large number')
}

console.log('HELLO! FIRST APP BRO')

// globals
/* console.log(__dirname)

setInterval(()=>{
    console.log('hello')
}, 1000) */

//modules

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi('susan')


// in package.json
/* "scripts": {
    "start": "node app.js", //automatically runs node app.js when you type "npm run start"
    "dev": "nodemon app.js" //automatically runs nodemon app.js when you type "npm run //dev"
  }, */
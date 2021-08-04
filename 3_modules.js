//Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code {only share minimum}
const john = 'john'
const peter = 'peter'
const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}

sayHi('susan')
sayHi(john)
sayHi(peter)
// sends data packets to other modules
module.exports = {john,peter}
const names = require('./5_name')
const data = require('./4_alt')
//console.log(data);
require('./6_min-gre')

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code {only share minimum}

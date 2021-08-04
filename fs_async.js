const {readFile, writeFile} = require('fs')
console.log('start');
readFile('./content/first.txt','utf8', (err,result) => {
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.text','utf8',(err,result) =>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/resul-async.txt',
        `Reject modernity, return to Monke ${first}, ${second}`, 
        (err, result) => {
            if(err) {
                console.log(err);
                return
            }
            console.log('done with this task');
        }
        )
    })
})
console.log('starting the next task');
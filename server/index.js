const app = require('./app.js')
const port = 9002;


app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('the server is listening to port, ', port)
    }
})
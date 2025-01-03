const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString).then(res=>{
    console.log('mongo db atled connected to pf-server');
    
}).catch(err=>{
    console.log('connection failed');
    console.log(err);
    
    
})
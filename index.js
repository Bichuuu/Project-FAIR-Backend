require('dotenv').config()


const express = require('express')
const cors=require('cors')

// import router 
const router = require('./Routes/router')

// mongo and server connect 
require('./db/connection')

// use router in express server (maintain order ways )
const pfServer = express()
pfServer.use(cors())

// convert to js object- middleware (application specific middleware)
pfServer.use(express.json())

pfServer.use(router)

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });

  pfServer.get('/', (req, res) => {
    res.status(200).send('<h1 style="">Hello, <span style="color:green">I am bichu!</span></h1>');
    });
    

// const app = express();


// pfServer.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });

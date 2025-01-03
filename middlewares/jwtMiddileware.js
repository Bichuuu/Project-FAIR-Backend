const jwt = require('jsonwebtoken')

const jwtMiddileware=(req,res,next)=>{
    console.log("inside jwtMiddileware");

    const token = req.headers["authorization"].split(" ")[1]

    if(token){

        try{
            const jwtResponse = jwt.verify(token,process.env.JWT_PASSWORD)
            console.log(jwtResponse);
            req.userId=jwtResponse.userId

            next()
            
        }
        catch(err){
            res.status(401).json("Authorization is failed ... please login")
        }
        
    }
    else{
        res.status(404).json("Authorization failed.....token is missing ")
    }

    


    
}

module.exports=jwtMiddileware
const multer=require('multer')

// user sending files storing 
const storage=multer.diskStorage({

    // destination to store files 
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },

    filename:(req,file,callback)=>{

        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})


// storage to use multer 
const multerMiddilware=multer({storage})

module.exports=multerMiddilware
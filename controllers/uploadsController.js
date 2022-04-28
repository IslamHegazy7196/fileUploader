const path=require('path')
const {StatusCodes}=require('http-status-codes')
const customError=require('../errors')
const uploadProductImage=async(req,res)=>{
    if(!req.files){
        throw new customError.BadRequestError('no file uploaded')
    }
    const productImage=req.files.image
    if(!productImage.mimetype.startsWith('image')){
        throw new customError.BadRequestError('please upload image')
    }
    const maxSize=1024*1024
    if(productImage.size>maxSize){
        throw new customError.BadRequestError('please upload smaller image')
    }
    const imagePath=path.join(__dirname,'../public/uploads/'+`${productImage.name}`)
    await productImage.mv(imagePath)
    return res.status(StatusCodes.OK).json({image:{src:`/uploads/${productImage.name}`}})
}

module.exports={uploadProductImage}
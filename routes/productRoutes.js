const express=require('express')
const router=express.Router()

const {createProduct,getAllProducts}=require('../controllers/productController')
const {uploadProductImage,uploadProductImageCloud}=require('../controllers/uploadsController')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/uploads').post(uploadProductImage)
router.route('/uploadcloud').post(uploadProductImageCloud)

module.exports=router
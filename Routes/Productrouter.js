import { Router } from "express"
import { AddProduct, GetProduct } from "../Controllers/ProductControllers.js"

const router = Router()

router.post('/addproduct',AddProduct)
router.get('/getproduct',GetProduct)

export default router
import { Router } from "express";
import Authrouters from "./Authrouters.js"
import Productrouter from "./Productrouter.js"



const router=Router()

router.use('/auth',Authrouters)
router.use('/product',Productrouter)



export default router
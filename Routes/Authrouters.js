import { Router } from "express";
import { Register,Login } from "../Controllers/AuthControllers.js";


const router = Router()

router.post('/register',Register)
router.post('/login',Login)

export default router
import  express from "express";
import mongoose from "mongoose"
import router from "./Routes/index.js"
import dotenv from "dotenv"
import { json } from "express";


const app=express()
dotenv.config()
app.use(express.json())

// app.get('/',(res,req)=>(
//     res.send("hello")
// ))

app.use("/api/v1",router)


app.listen(8000,()=>console.log("server started"))

mongoose.connect(process.env.MONGOURL).then(()=>console.log("database is connected"))

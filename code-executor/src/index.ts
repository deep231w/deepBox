import express from "express";
import cors from "cors";
import codeRunRoute from "./routes/codeRunRoute"
const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','DELET','PUT'],
    credentials:true
}))

app.get("/", codeRunRoute);

 
app.listen(3000, ()=>{
    console.log("server running on port 3000");
})

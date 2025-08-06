import express from "express";
import cors from "cors";
import codeRunRoute from "./routes/codeRunRoute"
const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','DELET','PUT'],
    credentials:true
}))
app.use(express.json());
app.use("/", codeRunRoute);

 app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(3000,'0.0.0.0', ()=>{
    console.log("server running on port 3000");
})

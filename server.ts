import express,{ Request, Response } from "express";    

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",  (req: Request, res: Response) =>{
    res.send("welcome to project-monaco!");
});

app.get("/birthday",(req:Request,res:Response)=>{
    const now= new Date();
    res.json({
    
        date:now.toDateString(),
        time:now.toLocaleTimeString(),
        iso:now.toSOString(),
    });
});

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
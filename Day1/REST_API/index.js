const  express=require("express");
const path=require("path");
const app=express();
const {v4:uuidv4} =require("uuid");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

//for url encoding
app.use(express.urlencoded({extended:true}));


let student=[
    {
        id:uuidv4(),
        username:"Vivek Gupta",
        Branch:"IT"
    },
    {
        id:uuidv4(),
        username:"Devansh",
        Branch:"CS"
    },
    {
        id:uuidv4(),
        username:"Saurav",
        Branch:"ECE"
    },
    {
        id:uuidv4(),
        username:"Anand",
        Branch:"ME"
    }
]

app.get("/student",(req,res)=>{
    res.render("index.ejs",{student});
})

app.get("/student/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/student",(req,res)=>{
    let {username,Branch}=req.body;
    console.log(username,Branch);
    let id=uuidv4();
    student.push({id,username,Branch});
    res.redirect("/student");
})








app.listen(8000,()=>{
    console.log(`Server is listening to port 8000`);
})
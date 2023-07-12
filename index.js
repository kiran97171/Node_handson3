const express = require("express");

const app = express();

const loginMiddleware = (response,request,next)=>{
    console.log("loginMiddleware verifies before giving the access to all other routes");
    next();
}

const courseMiddleWare = (request,response,next) =>{
    console.log("courseMiddleware verifies before giving the access to Course");
    next();
} 

app.use(loginMiddleware);

app.get("/login",(request,response)=>{
    console.log("This response is coming after being verified by the login middleware");
    response.send("User is Logged in");
});

app.get("/assessments",courseMiddleWare,(request,response)=>{
    console.log("This response is coming after being verified by the course middleware");
    response.send("Assessments");
});
app.get("/projects",courseMiddleWare,(request,response)=>{
    console.log("This response is coming after being verified by the course middleware");
    response.send("Projects");
});

app.listen(5000,()=>{
    console.log("Server is running at port 5000");
});
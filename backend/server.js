const app=require("./app")
const dotenv=require('dotenv')
const {connection}=require("./config/databse");
dotenv.config({path:"backend/config/config.env"});

app.listen(process.env.PORT,async ()=>{
    try{
        await connection;
        console.log("Database Collection EcommerceMERN connected through Atlas");
    }
    catch(err){
        console.log("Error while connecting DataBase");
        console.log(err);
    }
    console.log(`Server is working on port: http://localhost:${process.env.PORT}`)
})
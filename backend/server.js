const app=require("./app")
const dotenv=require('dotenv')
const {connection}=require("./config/databse");

//Handling Uncaught Exception
process.on('uncaughtException',err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting Down the Server due to Uncaught Exception Rejection`);
    process.exit(1);
})

//config path
dotenv.config({path:"backend/config/config.env"});







const server=app.listen(process.env.PORT,async ()=>{
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

//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting Down the Server due to Unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    });
});
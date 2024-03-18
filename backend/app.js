const express=require('express')
const app=express();
const errorMiddleware=require("./middleware/error")
const cookieParser=require('cookie-parser');
const cors=require('cors');
const bodyParser=require('body-parser');
const fileUpload=require('express-fileupload');
const dotenv=require('dotenv')
const path=require('path');




//config path
dotenv.config({path:"backend/config/config.env"});


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"*"
}))
 app.use(bodyParser.urlencoded({extended:true,parameterLimit:1000000,limit:"500mb"}));
 app.use(bodyParser.json())

app.use(fileUpload());


//ROute Imports
const product=require("./routes/productRoute");
const user=require('./routes/userRoute');
const order=require('./routes/orderRoute');

const payment=require('./routes/paymentRoute');

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);


app.use(express.static(path.join))
//Middleware for Error
app.use(errorMiddleware);

module.exports=app;
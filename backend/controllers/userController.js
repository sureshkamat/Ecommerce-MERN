const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModels");
const sendToken = require("../utils/jwttokens");
const sendEmail=require("../utils/sendEmail")

//Register a user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is sample id",
      url: "portfolio",
    },
  });
  // const token=user.getJWTToken();
  // res.status(201).json({
  //     success:true,
  //     token
  // })
  sendToken(user, 201, res);
});

//login User
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  //check email and password

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  // const token=user.getJWTToken();
  // res.status(200).json({
  //     success:true,
  //     token
  // })
  sendToken(user, 200, res);
});

//logout user
exports.logOut = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "LogOut User",
  });
});

//Forgot password
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("User not Found", 404));
  }
  //Get reset Password TOken
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;


  const message=`Your Password ResetToken is;- \n\n ${resetPasswordUrl} \n\n If You have not requested please Ignore it`;

  try{
await sendEmail({
email:user.email,
subject:`Ecommerce Password Recovery`,
message
});
res.status(200).json({
    success:true,
    message:`Email sent to ${user.email} Successfully`
})
  }catch(error){
   user.resetPasswordToken=undefined;
   user.resetPasswordExpire=undefined;
   await user.save({validateBeforeSave:false});
   return next(new ErrorHandler(error.message,500));
  }
});

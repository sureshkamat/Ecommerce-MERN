import React, { useState } from "react";
import "./Navbar.css";
import SpeedDial from "@mui/material/SpeedDial";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {useNavigate} from 'react-router-dom';
import {useAlert} from 'react-alert';
import { logout } from "../../../action/userAction";
import { useDispatch } from "react-redux";


export const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();
  const alert=useAlert();
  const dispatch=useDispatch();

  const options = [
    { icon: <ListAltIcon />, name: "Orders" ,func:orders},
    { icon: <PersonIcon />, name: "Profile" ,func:account},
    { icon: <ExitToAppIcon />, name: "LogOut" ,func:logOutUser},
  ];
  if (user.role === "admin") {
    options.unshift({ icon: <DashboardIcon />, name: "Dashboard",func:dashboard });
  }

function orders(){
navigate('/orders')
}
function account(){
navigate('/account')
}
function logOutUser(){
dispatch(logout ());
alert.success("Logout Successfully");
}
function dashboard(){
navigate('/dashboard');
}



  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        className="speedDial"
        direction="down"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((option) => (
          <SpeedDialAction
            key={option.name}
            icon={option.icon}
            tooltipTitle={option.name}
            onClick={option.func}
          />
        ))}
      </SpeedDial>
    </>
  );
};

import React from "react";
import Illustration from "../images/Illustration.svg";
import Box from "@mui/material/Box";
import LoginLogo from "components/Login/loginLogo";
import LoginForm from "components/Login/loginForm";


const Login:React.FC=()=> {
  
  return (
    <Box 
      display="flex"
      flex={1}
      justifyContent="center"
      alignItems={"center"}
      width="100vw"
      height="100vh"
    >
      <Box boxShadow={"0px 0px 1px 0px #B4B3B3"} paddingLeft={"20px"} >
      <Box 
        display="flex"
        flexDirection={"row"}
        justifyContent="space-evenly"
        alignItems={"center"}
        marginLeft="3vw"
      >  
          <Box  
            flex={.5} 
            marginRight="5vw" 
          >
            <LoginLogo />
            <LoginForm />
          </Box>
          <Box 
            flex={.5} 
            display="flex"
            flexDirection={"row"}
            justifyContent="center"
            alignItems={"center"}  bgcolor={"#E91D2D08" }  height={"700px"} padding="20px"
          >
            <img src={Illustration} height="375px" />
          </Box>
      </Box>
      </Box>
      
    </Box>
      
  );
};
export default Login;

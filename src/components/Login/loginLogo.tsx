import React from 'react'
import Box from "@mui/material/Box";
import ebylogo1 from "../../images/ebylogo1.png"
const LoginLogo:React.FC=()=>{
    return(
        <Box flex={1} width="100%">
            <Box display="flex" flex={1} justifyContent="center" alignItems={"center"}>
                <img src={ebylogo1} height={55} width={350}/>
            </Box>
        </Box>
    )
}
export default LoginLogo
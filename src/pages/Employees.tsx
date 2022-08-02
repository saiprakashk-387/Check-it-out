import React from 'react'
import { Typography } from '@mui/material'
import SideBar from 'components/shared/SideBar'
import EmployeesHeader from 'components/Employees/EmployeesHeader';
import EmployeesBody from 'components/Employees/EmployeesBody';
import  Box from '@mui/system/Box';

const Employees:React.FC=()=>{
    return(       
        <Box display="flex" 
        flex={1}
        flexDirection={"column"}
        >
       <EmployeesHeader /> 
       <EmployeesBody /> 
       </Box>
    )
}
export default Employees
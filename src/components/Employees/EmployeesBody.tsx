import React ,{useState} from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableCell,
  TableBody,
} from "@mui/material";
import { Box } from "@mui/system";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import EditEmployee from "./EditEmployee";

const EmployeesBody: React.FC = () => {

  const [editModal, seteditModal] = useState(false)
  const tableCell = {
    color: "#363B64",
    opacity: "100%",
    fontSize: "12px",
  };

  const data =[
    {
    "name":" Valentino Morosoe",
    "id":"JFMoNooo1",
    "location":"Moscow",
    "device":"JFMoNooo1",
    "role":"Operator",
    "status":"Active",
  },
  {
    "name":" Valentino Morosoe",
    "id":"JFMoNooo1",
    "location":"Moscow",
    "device":"JFMoNooo1",
    "role":"Operator",
    "status":"Active",
  },
  {
    "name":" Valentino Morosoe",
    "id":"JFMoNooo1",
    "location":"Moscow",
    "device":"JFMoNooo1",
    "role":"Operator",
    "status":"Active",
  },
  {
    "name":" Valentino Morosoe",
    "id":"JFMoNooo1",
    "location":"Moscow",
    "device":"JFMoNooo1",
    "role":"Operator",
    "status":"Active",
  },
  {
    "name":" Valentino Morosoe",
    "id":"JFMoNooo1",
    "location":"Moscow",
    "device":"JFMoNooo1",
    "role":"Operator",
    "status":"Active",
  },
  {
    "name":" Valentino Morosoe",
    "id":"JFMoNooo1",
    "location":"Moscow",
    "device":"JFMoNooo1",
    "role":"Operator",
    "status":"Active",
  },
  {
    "name":" Valentino Morosoe",
    "id":"JFMoNooo1",
    "location":"Moscow",
    "device":"JFMoNooo1",
    "role":"Operator",
    "status":"Active",
  }
  ]
  const editEmployee=()=>{
    seteditModal(true)
  }
  const closeEditModal=()=>{
    seteditModal(false)
  }
  return (
    <Box
      display="flex"
      // flex={0.7}
      sx={{ backgroundColor: "", width: "1000px", marginLeft: "200px" }}
    >
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{width:"1366px"}}>
              <TableCell sx={tableCell}>Employee Name</TableCell>
              <TableCell sx={tableCell}>Location</TableCell>
              <TableCell sx={tableCell}>Employee Id</TableCell>
              <TableCell sx={tableCell}>Assigned Device</TableCell>
              <TableCell sx={tableCell}>Role</TableCell>
              <TableCell sx={tableCell}>Status</TableCell>
              <TableCell sx={tableCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((val:any,i:any)=>{
          return ( <TableRow sx={{boxShadow:":0px 3px 10px #7777771A",borderRadius:"3px",background:"#FFFFFF" ,height:"59px"}}>
              <TableCell sx={{color:"#6A707E"}}> {val.name}</TableCell>
              <TableCell sx={{color:"#6BA43A"}}>{val.location}</TableCell>
              <TableCell>{val.id}</TableCell>
              <TableCell sx={{color:"#ABAFB3"}}>{val.device}</TableCell>
               <TableCell sx={{color:"#ABAFB3"}}>{val.role}</TableCell>
              <TableCell sx={{color: "#363B64"}}>{val.status}</TableCell>
              <TableCell>
                <Button sx={{Color:"#363B64 "}} onClick={editEmployee}> <EditIcon  /> </Button>
                <Button sx={{backgroundColor:"#FFFFFF" }}><LocalPrintshopIcon /></Button>
                  </TableCell>
            </TableRow> 
          )
        })}
            
          </TableBody>
        </Table>
      </TableContainer>
      <EditEmployee open={editModal} closeEditModal={closeEditModal}/>
    </Box>
  );
};
export default EmployeesBody;


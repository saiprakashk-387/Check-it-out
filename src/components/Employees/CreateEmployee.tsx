import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormLabel } from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "892px",
  height: "417px",
  bgcolor: "#FFFFFF ",
  border: "1px solid #E7E7E7",
  boxShadow: "0px 10px 15px #7777771A",
  p: 5,

  //   display:"inline-flex",
};

export default function CreateEmployee(props: any) {
  const { open, closeCreateModel } = props;

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={closeCreateModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ color: "#363B64", fontSize: "24px",textAlign:"center",padding:"4px" }}>
            Create Employee
          </Typography>
          <Box sx={{ width: "100%", display: "inline-flex" }}>
            <Typography sx={{ width: "50%" }}>
              <FormLabel  required>First Name</FormLabel>
              <FormControl>
                <OutlinedInput               
                  placeholder="Please enter text"
                  sx={{ width: "90%", height: "45px",border:"1px solid #DDDFE1" }}
                />
              </FormControl>
            </Typography>
            <Typography sx={{ width: "50%" }}>
              <FormLabel  required>Last Name</FormLabel>
              <FormControl>
                <OutlinedInput
                  placeholder="Please enter text"
                  sx={{ width: "90%", height: "45px" }}
                />
              </FormControl>
            </Typography>
          </Box>
          <br />
          <Box sx={{ width: "100%", display: "inline-flex" }}>
            <Typography sx={{ width: "50%" }}>
              <FormLabel>Role</FormLabel>
              <FormControl >
              <Select  
              sx={{width:"90%",height:"45px"}}           
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"available"}>Available</MenuItem>
              <MenuItem value={"very_soon"}>Very Soon</MenuItem>
              <MenuItem value={"not_available"}>Not Available</MenuItem>
            </Select>
              </FormControl>
            </Typography>
            <Typography sx={{ width: "50%" }}>
              <FormLabel>Status</FormLabel>
              <FormControl>
              <Select
              sx={{width:"90%",height:"45px"}}           
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"available"}>Available</MenuItem>
              <MenuItem value={"very_soon"}>Very Soon</MenuItem>
              <MenuItem value={"not_available"}>Not Available</MenuItem>
            </Select>
              </FormControl>
            </Typography>
          </Box>
          <br />
          <Box sx={{ width: "100%", display: "inline-flex" }}>
            <Typography sx={{ width: "100%" }}>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <OutlinedInput
                  placeholder="Please enter text"
                  sx={{ width: "95%", height: "45px",border:"1px solid #DDDFE1"}}
                />
              </FormControl>
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "inline-flex" }}>
            <Typography sx={{ width: "95%" }}>
              <FormLabel  required>Location</FormLabel>
              <FormControl>
                <OutlinedInput
                  placeholder="Please enter text"
                  sx={{ width: "100%", height: "45px" }}
                />
              </FormControl>
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex" ,justifyContent:"flex-end" ,paddingTop:"10px"}}>
            <Box sx={{paddingRight:"40px" }}>
            <Button sx={{background:"#E7E7E7 ",opacity:"1"}} onClick={closeCreateModel}>Cancel</Button>
            <Button sx={{background:"red",color:"antiquewhite"}}>Submit</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

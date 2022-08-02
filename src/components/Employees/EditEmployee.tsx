import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { FormLabel } from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

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
  p: 4,
};

export default function EditEmployee(props: any) {
  const { open, closeEditModal } = props;

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={closeEditModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{
                font: "normal normal bold 24px/35px Poppins",
                color: "#363B64",
                textAlign: "center",
              }}
              variant="h6"
              component="h2"
            >
              Edit Employee
            </Typography>
            <Box sx={{ width: "100%", display: "inline-flex" }}>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, width: "50%" }}
              >
                <FormLabel required>First Name</FormLabel>
                <FormControl>
                  <OutlinedInput
                    placeholder="Please enter text"
                    sx={{
                      width: "90%",
                      height: "45px",
                      border: "1px solid #DDDFE1",
                    }}
                  />
                </FormControl>
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, width: "50%" }}
              >
                <FormLabel required>Last Name</FormLabel>
                <FormControl>
                  <OutlinedInput
                    placeholder="Please enter text"
                    sx={{
                      width: "90%",
                      height: "45px",
                      border: "1px solid #DDDFE1",
                    }}
                  />
                </FormControl>
              </Typography>
            </Box>
            <Box sx={{ width: "100%", display: "inline-flex" }}>
              {/* <Typography> */}
                <Typography sx={{ width: "50%" }}>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select sx={{ width: "90%", height: "45px" }}>
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
                    <Select sx={{ width: "90%", height: "45px" }}>
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      <MenuItem value={"available"}>Available</MenuItem>
                      <MenuItem value={"very_soon"}>Very Soon</MenuItem>
                      <MenuItem value={"not_available"}>Not Available</MenuItem>
                    </Select>
                  </FormControl>
                </Typography>
              {/* </Typography> */}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

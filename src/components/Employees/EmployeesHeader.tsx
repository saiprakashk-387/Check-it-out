import React, { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";
import TextField from "@mui/material/TextField";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import CreateEmployee from "./CreateEmployee";
import AppModal from "components/shared/AppModal";

const EmployeesHeader: React.FC = () => {
  const [model, setmodel] = useState(false);
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "red",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const viewCreteModel = () => {
    setmodel(true);
  };
  const closeCreateModel = () => {
    setmodel(false);
  };
  return (
    <Box display="flex" flex={0.3}>
      <Typography
        style={{
          color: "#363B64",
          fontSize: "24px",
          fontWeight: "bold",
          marginLeft: "200px",
          marginTop: "50px",
        }}
      >
        Employee
      </Typography>
      <Box
        sx={{
          marginTop: "100px",
          marginLeft: -14,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ height: 33, width: 95, background: "#DDDFE1" }}
          sx={{
            borderRadius: "2px",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        >
          <FilterListIcon
            sx={{
              color: "red",
              opacity: "100%",
              height: "22px",
            }}
          />
          <Typography
            sx={{
              color: "#E91D2D",
              fontSize: "10px",
              fontFamily: "Poppins-Regular",
              textTransform: "capitalize",
            }}
          >
            Filter
          </Typography>
        </Button>
        {/* <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search by Name , Unique ID'  }}
            />
          </Search> */}
      </Box>
      <Box>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search by Name , Unique ID" }}
            />
          </Search>
        </Box>
      <Box
        sx={{
          marginTop: "100px",
          marginLeft: 80,
        }}
      >
       
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ height: 33, width: 101, background: "#E91D2D" }}
          sx={{
            borderRadius: "2px",
            marginTop: "-55px",
            marginBottom: "75px",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "12px",
              textTransform: "capitalize",
              fontFamily: "Poppins-Regular",
            }}
          >
            BulkUpload
          </Typography>
        </Button>
        {/* <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search by Name , Unique ID" }}
          />
        </Search> */}
      </Box>
      <Box
        sx={{
          marginTop: "100px",
          marginLeft: 1,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ height: 33, width: 101, background: "#E91D2D" }}
          sx={{
            borderRadius: "2px",
            marginTop: "-55px",
            marginBottom: "75px",
          }}
          onClick={viewCreteModel}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "12px",
              textTransform: "capitalize",
              fontFamily: "Poppins-Regular",
            }}
          >
            CreateNew
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: "100px",
          marginLeft: -14,

          // display:"inline-flex",
        }}
      >
        {/* <Search sx={{ border:"1px solid black"}}>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search by Name , Unique ID'  }}
            />
          </Search> */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ height: 33, width: 95, background: "#E91D2D" }}
          sx={{
            borderRadius: "2px",
            marginTop: "10px",
            marginLeft: "18px",
          }}
        >
          <SearchIcon
            sx={{
              color: "#FFFFFF",
              opacity: "100%",
              height: "22px",
            }}
          />
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "10px",
              fontFamily: "Poppins-Regular",
              textTransform: "capitalize",
            }}
          >
            Search
          </Typography>
        </Button>
      </Box>
      {/* ///existing model */}
      <AppModal open={model} onDismiss={closeCreateModel} children={'hello'} maxWidth={"xl"} height={"417px"} fullwidth={true}/>
    
    {/* /////custom model */}
      {/* <CreateEmployee open={model} closeCreateModel={closeCreateModel} /> */}
    </Box>
  );
};
export default EmployeesHeader;

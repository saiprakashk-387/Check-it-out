import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner: React.FC = () => (
  <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
    <CircularProgress color="primary" />
  </Backdrop>
);

export default LoadingSpinner;

import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  maxWidth?: DialogProps["maxWidth"];
  scroll?: DialogProps["scroll"];
  title?: React.ReactNode;
  onDelete?: () => void;
  onDismiss?: () => void;
  onSubmit?: () => void;
  btnDismissLabel?: string;
  btnSubmitLabel?: string;
  btnDeleteLabel?: string;
  [key: string]: any;
}

const StyledDialog = styled(Dialog)({
  "& .DialogTitle-root": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    marginTop: "1rem",
  },
  "& .DialogContent-root": {
    border: 0,
  },
  "& .DialogActions-root": {
    padding: "1.5rem",
  },
});

const AppModal: React.FC<Props> = ({
  open,
  maxWidth = "md",
  scroll = "paper",
  title,
  onDelete,
  onDismiss,
  onSubmit,
  btnDismissLabel,
  btnSubmitLabel,
  btnDeleteLabel,
  children,
  ...restProps
}) => {
  const handleDelete = () => {
    onDelete();
  };
  const handleDismiss = () => {
    onDismiss();
    open = false;
  };
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <StyledDialog
      open={open}
      maxWidth={maxWidth}
      onClose={handleDismiss}
      scroll={scroll}
      {...restProps}
    >
      <DialogTitle>
        {title && title}
        <IconButton
          aria-label="close"
          onClick={handleDismiss}
          sx={{ color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers={true}>{children}</DialogContent>
      <DialogActions>
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          {onDismiss && btnDismissLabel != "" && (
            <Button
              variant="text"
              color="error"
              onClick={handleDismiss}
              sx={{ marginRight: 2 }}
            >
              {btnDismissLabel || "Cancel"}
            </Button>
          )}
          {onDismiss && btnDismissLabel != "" && (
            <Button variant="text" color="primary" onClick={handleSubmit}>
              {btnSubmitLabel || "Submit"}
            </Button>
          )}
        </Box>
      </DialogActions>
    </StyledDialog>
  );
};

export default AppModal;

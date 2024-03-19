/* eslint-disable react/prop-types */
import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { Avatar, Box, IconButton } from "@mui/material";
import { Person } from "@mui/icons-material";

export default function PopupMenu({ logout }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <Avatar>
          <Person />
        </Avatar>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box
          sx={{
            mt: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Button variant="text" size="small">
            Notifications
          </Button>
          <Button variant="text" size="small">
            Settings
          </Button>
          <Button onClick={logout} variant="text" size="small">
            Logout
          </Button>
        </Box>
      </Popover>
    </div>
  );
}

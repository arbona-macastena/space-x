import React from "react";
import logo from "../assets/logo.svg";
import { Box } from "@mui/material";

export default function Sidebar() {
  return (
    <Box sx={{ padding: 4 }}>
      <img src={logo} alt="logo" />{" "}
    </Box>
  );
}

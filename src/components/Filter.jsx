import React from "react";
import { TextField, Box } from "@mui/material";

export default function Filter(props) {
  return (
    <Box
      sx={{
        margin: 2,
        padding: 2,
        paddingBottom: 1,
        color: "text.secondary",
        boxShadow: 1,
        borderRadius: "5px",
      }}
    >
      <form>
        <TextField
          sx={{ width: "100%" }}
          helperText="Please enter ship type"
          label="Filter"
          variant="standard"
          value={props.value}
          onChange={props.onChange}
        />
      </form>
    </Box>
  );
}

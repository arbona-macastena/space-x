import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import GridOnIcon from "@mui/icons-material/GridOn";

export default function ShipView(props) {
  return (
    <ButtonGroup
      color="primary"
      variant="outlined"
      aria-label="outlined button group"
      sx={{ display: "block", textAlign: "right", marginRight: 4 }}
    >
      <Button onClick={props.handleList}>
        <ListIcon />
      </Button>
      <Button onClick={props.handleGallery}>
        <GridOnIcon />
      </Button>
    </ButtonGroup>
  );
}

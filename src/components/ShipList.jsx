import React from "react";
import {
  ListItem,
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";

export default function ShipList(props) {
  return (
    <List
      sx={{
        height: 480,
        padding: 2,
        boxShadow: 2,
        overflow: "auto",
        borderRadius: "5px",
      }}
    >
      {props !== null
        ? props.ships.map((ship) => {
            return (
              <React.Fragment key={ship.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={ship.id} src={ship.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={ship.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {ship.type}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })
        : ""}
    </List>
  );
}

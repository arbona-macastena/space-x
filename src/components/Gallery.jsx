import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import noImage from "../assets/no-image.jpg";

export default function Gallery(props) {
  return (
    <ImageList sx={{ height: 480, overflow: "auto" }} cols={3} rowHeight={200}>
      {props.ships.map((item) => (
        <ImageListItem key={item.id} xs={{ marginTop: 2 }}>
          {item.image !== null ? (
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
              style={{ height: "100%" }}
            />
          ) : (
            <img src={noImage} style={{ height: "100%" }} />
          )}
          <ImageListItemBar title={item.name} subtitle={item.type} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

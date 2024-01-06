import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function AddCard({ addCard }) {
  const [title, setTitle] = useState("");

  return (
    <Grid display={"flex"} justifyContent={"center"} padding={5} gap={2}>
      <TextField
        type="text"
        fullWidth
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="card title"
      />
      <Button
        sx={{ width: 200 }}
        variant="contained"
        onClick={() => {
          setTitle("");
          addCard(title);
        }}
      >
        Add Card
      </Button>
    </Grid>
  );
}

"use client";
import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";

const Email = () => {
  const [isValid, setIsValid] = useState(true);
  const isEmail = (email: string) => {
    const emailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    return emailRegex.test(email);
  };

  const validator = (email: string) => {
    const isValidEmail = isEmail(email);
    if (isValidEmail) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <Box sx={{ marginBottom: "60px" }}>
      <Input
        sx={{
          border: `1px solid ${isValid ? "#b8c7ed" : "#ff5466"}`,
          borderRadius: "2rem",
          color: "#b8c7ed",
          width: "400px",
          padding: "0.25rem 0.5rem",
          marginRight: "1rem",
        }}
        onChange={(e) => validator(e.target.value)}
        placeholder="Your email address..."
      />
      {isValid ? null : (
        <Typography sx={{ color: "#ff5466" }}>
          Please provide a valid email address
        </Typography>
      )}
      <Button
        sx={{
          backgroundColor: "#4c7bf3",
          color: "#fff",
          borderRadius: "2rem",
          padding: "0.25rem 0.5rem",
          width: "150px",
          height: "40px",
        }}
      >
        Notify Me
      </Button>
    </Box>
  );
};

export default Email;

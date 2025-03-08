import Email from "@/components/Email";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="images/logo.svg"
        alt="logo"
        width={90}
        height={29}
        style={{ margin: "35px" }}
      />
      <Typography variant="h2" sx={{ color: "#969696", fontWeight: 400 }}>
        We are launching{" "}
        <span style={{ color: "#15202a", fontWeight: 700 }}>soon!</span>
      </Typography>
      <Typography
        sx={{
          color: "#15202a",
          fontSize: "1.25rem",
          marginTop: "0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        Subscribe and get notified
      </Typography>
      <Email />
      <Image
        src="/images/illustration-dashboard.png"
        alt="image"
        width={600}
        height={350}
      />
    </Box>
  );
};

export default Home;

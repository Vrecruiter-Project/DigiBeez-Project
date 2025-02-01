import React from "react";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import mern from "../../../../assets/bgsvg/mern.png";
import bottom from "../../../../assets/bgsvg/plansbottom.png";

const perks = [
  "Industry-standard curriculum by expert",
  "Self Paced Classes",
  "1:1 live doubt support (Unlimited)",
  "Live Doubt Class",
  "Relationship manager",
  "Dedicated, focused, personalised placement assistance.",
  "Peer Interaction and network building",
  "1:1 Domain Expert Sessions",
];

const Plans = () => {
  return (
    <>

      <Box display="flex" flexDirection="column" alignItems="center" m={4} >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontSize: { xs: "1.7rem", md: "2rem" }, fontWeight: "bold", mb: 4, mt: 5 }} >  Plans and pricing
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={5}
          p={1}

          m={3}
          sx={{
            width: "200px",
            textAlign: "center",
            border: "7px solid #C4E8F6",
            color: " #475877",
            display: "flex",
            gap: 2,

          }}
        >
          <>
            <img src={mern} alt="mern" style={{ width: "20%", height: "20%" }} />
            <Typography variant="h6" fontWeight="bold">
              MERN
            </Typography>
          </>
        </Box>

        <TableContainer component={Paper} elevation={3} sx={{ maxWidth: 1000, borderRadius: 5 }} >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#F0F4FF", p: 2 }}>
                <TableCell><Typography fontWeight="bold">Perks</Typography></TableCell>
                <TableCell align="center">
                  <Typography fontWeight="bold">Digibeez Job Bootcamp</Typography>
                  <Typography variant="body2" color="textSecondary">
                    to help you with a faster career transition to the tech field
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {perks.map((perk, index) => (
                <TableRow key={index} >
                  <TableCell >{perk}</TableCell>
                  <TableCell align="center" sx={{ color: "green" }}>✔</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        </Box>
       <img src={bottom} style={{
        width: "100%",
         height: "100% ",
         objectFit: "cover",
      }} alt="mern" />
      
</>
  );
};

export default Plans;

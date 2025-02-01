import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const data = [
    { label: "Final year students", percentage: "12%", color: "#A52A2A", size: 120 },
    { label: "Non CS", percentage: "14%", color: "#4682B4", size: 150 },
    { label: "Service company engineers", percentage: "41%", color: "#DAA520", size: 250 },
    { label: "Non technical roles", percentage: "27%", color: "#228B22", size: 200 },
    { label: "Others", percentage: "6%", color: "#8A2BE2", size: 100 },
];

const OurExperience = () => {
    return (
        <Box sx={{ textAlign: "center", p: 4 }}>
            <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "1.7rem", md: "2rem" }, mb: 4 }}>
                Our learners bring varied backgrounds and experiences
            </Typography>
            <Box
                sx={{
                    // p: 4,
                    borderRadius: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Grid container spacing={2} justifyContent="center" sx={{ borderRadius: 20, p: {md:8}, background: "#121212" }}>
                    {data.map((item, index) => (
                        <Grid key={index} item ={{xs:12, sm:6, md:4, lg:4}} display="flex" justifyContent="center" sx={{padding:"9px"}}>
                            <Box
                                sx={{
                                    
                                    width: item.size,
                                    height: item.size,
                                    borderRadius: "50%",
                                    background: "#1E1E1E",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderLeft: `4px solid ${item.color}`,
                                   
                                    color: "#fff",
                                    transition: "box-shadow 0.3s ease-in-out",
                                    ":hover": {
                                        boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
                                    },
                                }}
                            >
                                <Typography variant="body1">{item.label}</Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {item.percentage}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Button variant="contained" sx={{ mt: 4, bgcolor: "#FCC41B", color: "#000" }}>
                Book a Free Demo
            </Button>
        </Box>
    );
};

export default OurExperience;

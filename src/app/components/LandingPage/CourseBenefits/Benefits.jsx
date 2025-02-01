import React from "react";
import {Box, Container, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HelpIcon from "@mui/icons-material/Help";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Grid from "@mui/material/Grid2"

const benefits = [
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />,
    title: "1:1 expert session",
    description:
      "Connects theoretical understanding with practical implementation through their insights.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#9C27B0" }} />,
    title: "Expert faculty from India",
    description:
      "Top-tier education enriched by practical knowledge and innovation.",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 40, color: "#FF4081" }} />,
    title: "Projects & hackathons",
    description: "Hands-on learning to spark creative problem-solving.",
  },
  {
    icon: <HelpIcon sx={{ fontSize: 40, color: "#FF9800" }} />,
    title: "Fastest doubt support",
    description:
      "Personalized assistance for a clear understanding of concepts.",
  },
  {
    icon: <PlayCircleIcon sx={{ fontSize: 40, color: "#FF5722" }} />,
    title: "Self-paced classes",
    description: "Learn at your pace with practice and instant feedback.",
  },
];

const CoursesBenefits = () => {
  return (
    <Container>
    <Box sx={{ textAlign: "center", py: 5}}>
      <Typography variant="h4" fontWeight="bold" color="white" sx={{  mb: 4 }}>
        Courses Benefits
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid size= {{xs:12, sm:6, md:benefit.title === "1:1 expert session" ? 8 : 4}} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                p: 3,
                bgcolor: "#1E1E1E",
                color: "white",
                borderRadius: 2,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)",
                height: "100%",
              }}
            >
              {benefit.icon}
              <Typography variant="h6" sx={{ mt: 2 }}>
                {benefit.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default CoursesBenefits;

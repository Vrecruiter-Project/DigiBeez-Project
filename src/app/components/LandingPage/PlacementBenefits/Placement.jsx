import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Grid from "@mui/material/Grid2"

const benefits = [
  {
    icon: <WorkIcon fontSize="large" />,
    title: "Profiles highlighting industry products & trends",
    description: "Industry insights and trends to make informed career decisions.",
  },
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "650+ Corporate Hiring",
    description: "Access to multiple hiring partners with job opportunities.",
  },
  {
    icon: <CheckCircleIcon fontSize="large" />,
    title: "200+ internship job openings",
    description: "Internship openings to gain practical industry exposure.",
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    title: "Dedicated placement teams",
    description: "A dedicated support team to help you in your career.",
  },
  {
    icon: <SchoolIcon fontSize="large" />,
    title: "5K+ Students placed so far",
    description: "A database with students placed in various companies.",
  },
  {
    icon: <CalendarTodayIcon fontSize="large" />,
    title: "Job openings shared every day",
    description: "New job postings and updates every day.",
  },
];

const PlacementBenefits = () => {
  return (
    <Container>
    <Box sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={7} >
        Placement Benefits
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid size= {{xs:12, sm:6, md:4}} key={index}>
         
            <            Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 2,
              }}
            >
              {benefit.icon}
              <Typography variant="h6" sx={{ mt: 1 }}>
                {benefit.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" sx={{ mt: 5 ,    bgcolor: '#FCC41B', color: '#000',}}>
        Book a Free Demo
      </Button>
    </Box>
    </Container>
  );
};

export default PlacementBenefits;

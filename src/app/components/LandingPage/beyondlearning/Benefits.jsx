import React from "react";
import { Box,  Card, CardContent, Typography, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import PeopleIcon from "@mui/icons-material/People";
import Grid from '@mui/material/Grid2';

const benefits1 = [
  { icon: <GitHubIcon sx={{ fontSize: 40, color: "#4CAF50" }} />, title: "Github profile" },
  { icon: <LinkedInIcon sx={{ fontSize: 40, color: "#0077B5" }} />, title: "LinkedIn profile" },
  { icon: <DescriptionIcon sx={{ fontSize: 40, color: "#FFC107" }} />, title: "Resume writing" },

];
const benefits2 = [

  { icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: "#FF9800" }} />, title: "Soft skills", desc: "Master communication and salary negotiation skills." },
  { icon: <PeopleIcon sx={{ fontSize: 40, color: "#E91E63" }} />, title: "Interview preparation", desc: "Mock interviews and expert sessions and more." },
];

const Benefits = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" color="white" fontWeight="bold" sx={{ mb: 4 }}>
          Benefits beyond learning
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {benefits1.map((benefit, index) => (
            <Grid size = {{xs:12,sm:4 ,md:4}}  key={index}>
              <Card sx={{ bgcolor: "#1E1E1E", color: "#fff", textAlign: "center", p: 2, borderRadius: 3, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)", }}>
                <CardContent>
                  {benefit.icon}
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {benefit.title}
                  </Typography>
                  {benefit.desc && (
                    <Typography variant="body2" sx={{ mt: 1, color: "#B0BEC5" }}>
                      {benefit.desc}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} size={12} justifyContent="center" sx={{ mt: '13px' }}>
          {benefits2.map((benefit, index) => (
            <Grid spacing={3} size = {{xs:12,sm:6 ,md:6}} key={index}>
              <Card sx={{ bgcolor: "#1E1E1E", color: "#fff", textAlign: "center", p: 2, borderRadius: 3, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)", }}>
                <CardContent>
                  {benefit.icon}
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {benefit.title}
                  </Typography>
                  {benefit.desc && (
                    <Typography variant="body2" sx={{ mt: 1, color: "#B0BEC5" }}>
                      {benefit.desc}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Box>
    </Container>
  );
};

export default Benefits;

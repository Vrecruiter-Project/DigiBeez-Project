import React from 'react';
import Grid from '@mui/material/Grid2'
import { Box, Button, Container, Typography } from '@mui/material';
import PlacementSwiper from '../CoursesSwiper/PlacementSwiper';
import videoeidt from '../../../../assets/Brochurepdf/videoeditingcoursesyllabus.pdf';
import webdev from '../../../../assets/Brochurepdf/webdevelopmentcourse syllabus.pdf';
import webdesign from '../../../../assets/Brochurepdf/webdesigning.pdf';
import Graphicdesign from '../../../../assets/Brochurepdf/graphicdesignsyllabus.pdf';
import uiux from '../../../../assets/Brochurepdf/webdesigning.pdf';
import digmark from '../../../../assets/Brochurepdf/Digitalmarketing.pdf';

const Coursebrocher = () => {

  const buttonContent = [

    { label: "Download Web Development brochure", file: webdev },
    { label: "Download Web Designing brochure", file: webdesign },
    { label: "Download Graphic Designing brochure", file: Graphicdesign },
    { label: "Download Video Editing brochure", file: videoeidt },
    { label: "Download Digital Marketing brochure", file: digmark },
    { label: "Download UI/UX Designing brochure", file: uiux }

  ];

  const placementItems = [
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "424% hike"
    },
  ]
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mt={{ xs: 0, md: 6, lg: 9 }}>
        <Container>
          <Grid container >
            <Grid size={12}>
              <Typography sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "30px",
              }}>
                Course Brochure
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            {buttonContent.map((item, id) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
                <a href={item.file} download style={{ textDecoration: 'none' }}>
                  <Button sx={{
                    background: "#1E1E1E",
                    color: "white",
                    boxShadow: "revert",
                    width: "95%",
                    p: 1.5,
                    mt: 3,
                    borderRadius: 3
                  }}>
                    {item.label}
                  </Button>
                </a>
              </Grid>
            ))}
          </Grid>

          <Grid container sx={{ mt: 6 }}>
            <Grid size={12}>
              <Typography sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "30px",
              }}>
                Digibeez who took this bootcamp got hired at
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid size={12}>
              <PlacementSwiper placementItems={placementItems} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Coursebrocher;
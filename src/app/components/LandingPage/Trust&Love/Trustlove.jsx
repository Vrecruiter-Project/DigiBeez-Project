import * as React from 'react';
// import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Avatar,
  Button,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import design from '../../../../assets/Card/card-design.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div

      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TrustLove() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const onetab = [
    {
      name: "Om Sayyed",
      title: "Product Engineer",
      description:
        "As I wanted to switch my career from Mechanical to IT, I joined bootcamp. My goal was to learn full stack development and get placed in a good company with a good package. After completing this bootcamp you will be capable of cracking any interview and ready to work.",
      post: "Coding Ninjas",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      bgColor: "#4A90E2",
    },

    {
      name: "Manikanta Sura",
      title: "Application Management Analyst",
      description:
        "I was inspired by the way things were explained during the 1st session which boosted my confidence. My goal was to have good technical knowledge to transform my career. It was overall a very good support and helped me to gain a new job.",
      post: "Coding Ninjas",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      bgColor: "#E91E63",
    },

    {
      name: "Rashid Khan",
      title: "Senior Software Engineer",
      description:
        "Before joining the bootcamp I was trying to learn development on my own but I was always hitting a dead end. CN helped me figure out what exactly I needed to learn to be a good developer and get a job. The program was very well organised. It motivated me to be consistent and study.",
      post: "Coding Ninjas",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
      avatar: "https://files.codingninjas.com/img_9397__1_-removebg-preview-1706089407.webp",
      bgColor: "#FFC107",
    },

  ];
  const twotab = [
    {
      name: "Samir Sayyed",
      title: "Product Engineer",
      description:
        "As I wanted to switch my career from Mechanical to IT, I joined bootcamp. My goal was to learn full stack development and get placed in a good company with a good package. After completing this bootcamp you will be capable of cracking any interview and ready to work.",
      post: "Coding Ninjas",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      bgColor: "#4A90E2",
    },

    {
      name: "Sourav Sura",
      title: "Application Management Analyst",
      description:
        "I was inspired by the way things were explained during the 1st session which boosted my confidence. My goal was to have good technical knowledge to transform my career. It was overall a very good support and helped me to gain a new job.",
      post: "Coding Ninjas",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
      avatar: "https://files.codingninjas.com/akash-pal-1705927503.webp",
      bgColor: "#E91E63",
    },

    {
      name: "Rashid Khan",
      title: "Senior Software Engineer",
      description:
        "Before joining the bootcamp I was trying to learn development on my own but I was always hitting a dead end. CN helped me figure out what exactly I needed to learn to be a good developer and get a job. The program was very well organised. It motivated me to be consistent and study.",
      post: "Coding Ninjas",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
      avatar: "https://files.codingninjas.com/9-1705997530.webp",
      bgColor: "#FFC107",
    },

  ];
  const threetab = [
    {
      name: "Samir Sayyed",
      title: "Product Engineer",
      description:
        "As I wanted to switch my career from Mechanical to IT, I joined bootcamp. My goal was to learn full stack development and get placed in a good company with a good package. After completing this bootcamp you will be capable of cracking any interview and ready to work.",
      post: "Coding Ninjas",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
      avatar: "https://files.codingninjas.com/whatsapp-image-2023-11-08-at-9-31-00-pm-1-1705654916.webp",
      bgColor: "#4A90E2",
    },

    {
      name: "Manikanta Sura",
      title: "Application Management Analyst",
      description:
        "I was inspired by the way things were explained during the 1st session which boosted my confidence. My goal was to have good technical knowledge to transform my career. It was overall a very good support and helped me to gain a new job.",
      post: "Coding Ninjas",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
      avatar: "https://files.codingninjas.com/21-1706019038.webp",
      bgColor: "#E91E63",
    },

    {
      name: "Ayush Khan",
      title: "Senior Software Engineer",
      description:
        "Before joining the bootcamp I was trying to learn development on my own but I was always hitting a dead end. CN helped me figure out what exactly I needed to learn to be a good developer and get a job. The program was very well organised. It motivated me to be consistent and study.",
      post: "Coding Ninjas",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
      avatar: "https://files.codingninjas.com/3-1705996894.webp",
      bgColor: "#FFC107",
    },

  ];

  return (
    <Container className='pb-2'>
      <Typography
        variant="h4" color="white"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 4, mt: 5 }}
      >
        Voices of trust & love
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: 3, }}>
        <AppBar position="static" sx={{ borderRadius: '10px', width: { xs: "100%", md: "50%" }, mb: 6, }}>
          <Tabs sx={{
            bgcolor: "black",
            color: "white",
            borderRadius: '10px',

          }}
            value={value}
            onChange={handleChange}

            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="Non-tech to tech" {...a11yProps(0)} sx={{ fontSize: { xs: "10px", md: "13px" } }}
            />
            <Tab sx={{ fontSize: { xs: "10px", md: '13px' } }} label="Service to product" {...a11yProps(1)} />
            <Tab sx={{ fontSize: { xs: "10px", md: '13px' } }} label="Landed the first job" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>

          <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="center" m={{ xs: 0, md: 4 }} >
            {onetab.map((testimonial, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} >
                <Card
                  sx={{
                    bgcolor: "#1E1E1E",
                    color: "white",
                    p: 2,
                    borderRadius: "16px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "visible",
                  
                  }}
                >
                  <img
                    src={design}
                    style={{ position: 'absolute', top: '0px', height: '4em', }}

                  />

                  <Avatar
                    src={testimonial.avatar}
                    sx={{
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mt: -4,
                      position: 'absolute',
                      top: '10px',
                      backgroundColor:'white',
                      left: '38%'

                    }}
                  />
                  <Typography variant="h6" sx={{ mt: 6 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                    {testimonial.title}
                  </Typography>
                  <CardContent>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {testimonial.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "gray", fontSize: 14, mb: 2 }}
                    >
                      Post - {testimonial.post}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={testimonial.companyLogo}
                        alt={testimonial.post}
                        style={{ width: 50, height: "auto" }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

          <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="center" m={{ xs: 0, md: 4 }} >
            {twotab.map((testimonial, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} >
                <Card
                  sx={{
                    bgcolor: "#1E1E1E",
                    color: "white",
                    p: 2,
                    borderRadius: "16px",
                    textAlign: "center",
                    position: "relative", overflow: "visible",


                  }}
                >
                  <img
                    src={design}
                    style={{ position: 'absolute', top: '0px', height: '4em' }}

                  />

                  <Avatar
                    src={testimonial.avatar}
                    sx={{
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mt: -4,
                      position: 'absolute',
                      top: '10px',
                      backgroundColor:'white',

                      left: '38%'

                    }}
                  />
                  <Typography variant="h6" sx={{ mt: 6 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                    {testimonial.title}
                  </Typography>
                  <CardContent>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {testimonial.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "gray", fontSize: 14, mb: 2 }}
                    >
                      Post - {testimonial.post}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={testimonial.companyLogo}
                        alt={testimonial.post}
                        style={{ width: 50, height: "auto" }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>

          <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="center" m={{ xs: 0, md: 4 }} >
            {threetab.map((testimonial, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} >
                <Card
                  sx={{
                    bgcolor: "#1E1E1E",
                    color: "white",
                    p: 2,
                    borderRadius: "16px",
                    textAlign: "center",
                    position: "relative", overflow: "visible",

                  }}
                >
                  <img
                    src={design}
                    style={{ position: 'absolute', top: '0px', height: '4em' }}

                  />

                  <Avatar
                    src={testimonial.avatar}
                    sx={{
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mt: -4,
                      position: 'absolute',
                      top: '10px',
                      left: '38%',
                      backgroundColor:'white',

                    }}
                  />
                  <Typography variant="h6" sx={{ mt: 6 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                    {testimonial.title}
                  </Typography>
                  <CardContent>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {testimonial.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "gray", fontSize: 14, mb: 2 }}
                    >
                      Post - {testimonial.post}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={testimonial.companyLogo}
                        alt={testimonial.post}
                        style={{ width: 50, height: "auto" }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </TabPanel>
        <Button variant="contained" sx={{ mt: 4, bgcolor: '#FCC41B', color: '#000', }}>
          Book a Free Demo
        </Button>
      </Box >

    </Container>


  );
}
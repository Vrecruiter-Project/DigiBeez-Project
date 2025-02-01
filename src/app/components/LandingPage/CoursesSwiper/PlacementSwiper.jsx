import { Height } from '@mui/icons-material';
import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid2';

const Container = styled.div`
  .slider {
    margin-top: 20px;
    padding: 2em 0;
    overflow: hidden;
    position: relative;
    width: 100%; /* Full width container */
  }

  .slide-track {
    display: flex;
    gap: 2em;
    animation: scroll 30s linear infinite;
    width: calc(
      2 * ${(props) => props.placementItems.length} * 150px
    ); /* Double the content for seamless loop */
  }

  .slide {
    flex: 0 0 auto;
    width: 150px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* .slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  } */

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        calc(-${(props) => props.placementItems.length} * 150px)
      );
    }
  }
`;

const PlacementSwiper = ({ placementItems }) => {
  const duplicatedItems = [...placementItems, ...placementItems];

  return (
    <Container placementItems={placementItems}>
      <div className='slider'>
        <div className='slide-track'>
          {duplicatedItems.map((item, index) => (
            <Box key={index}>
              
              <Card
                sx={{
                  p: 2,
                  width: "13em",
              
                  borderRadius: 2,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)",
                }}
              >
                <Grid container  >
                  <Grid size={6} >
                    <img style={{
                      borderRadius: "50%",
                      height: "100%",
                    }} src={item.image} alt={item.details} />
                  </Grid>
                  <Grid size={6}>
                    <Grid size={10}>
                      <img  src={item.compimage} alt={item.details} />
                    </Grid>
                    <Grid size={12}>
                      <Typography>{item.details}</Typography>
                    </Grid>
                  </Grid>

                </Grid>
              </Card>
             

              <Card
                sx={{
                  p: 2,
                  width: "13em",
                 // height: "100%",
                  borderRadius: 2,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)",
                  mt:2
                }}
              >
                <Grid container  >
                  <Grid size={6} >
                    <img style={{
                      borderRadius: "50%",
                      height: "100%",
                    }} src={item.image} alt={item.details} />
                  </Grid>
                  <Grid size={6}>
                    <Grid size={10}>
                      <img  src={item.compimage} alt={item.details} />
                    </Grid>
                    <Grid size={12}>
                      <Typography>{item.details}</Typography>
                    </Grid>
                  </Grid>

                </Grid>
              </Card>
              
            </Box>

            
            
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PlacementSwiper;

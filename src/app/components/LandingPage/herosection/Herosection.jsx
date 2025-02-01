import React from "react";
import {
  Box,
  Container,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Grid2 from '@mui/material/Grid2';
import hand from '../../../../assets/herosection/hand.png';
import Support from '../../../../assets/herosection/support.svg'
import Future from '../../../../assets/herosection/future.svg'
import Placement from '../../../../assets/herosection/placement.svg'
import bg from '../../../../assets/herosection/herobg.jpg'
import Form from '../../Form/Form'


export default function Herosection() {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" pt={{ xs: 0, md: 6, lg: 2 }} sx={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      pb: 10,
    }}  >

      <Container >
        <Grid2 container spacing={{ xs: 2, md: 6, lg: 10 }} alignItems="center" sx={
          {
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row' },
            mt: 6,
          }
        }  >
          {/* Left Section */}
          <Grid2 size={{ xs: 12, md: 7, lg: 7 }} display="flex" flexDirection="column" >
            <Box
              mt={4}
              // mb={10}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '3px', sm: '3px', md: '10px', lg: '18px' }
              }}
            >
              <Typography variant="h4" fontWeight="bold" mt={2} color="white">
                Full Stack Web Development Job Bootcamp
              </Typography>
              <Typography variant="body1" mt={2} color="white">
                Choose MERN stack or Spring Boot and acquire expertise through
                practical application and real-world projects.
              </Typography>

              <Box display="flex" flexWrap="wrap"  gap={2} mt={2}>
                {[
                  { icon: Support, text: "Placement assistance" },
                  // { icon: Future, text: "AI-infused curriculum" },
                  { icon: Placement, text: "1:1 mentorship" },
                ].map((feature, index) => (
                  <Box
                    key={`feature-${index}`}
                    display="flex"
                    alignItems="center"
                    gap={1}
                    px={2}
                    py={1}
                    borderRadius="50px"
                    bgcolor={theme.palette.grey[800]}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.text}
                      style={{ height: "20px", width: "20px" }}
                    />
                    <Typography variant="caption" fontWeight="bold" sx={{ color: 'white' }}>
                      {feature.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Paper sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: 'wrap', gap: 2, p: 2, mt: 4, borderRadius: 3, backgroundColor: "#212121 " }}>
                {[
                  { value: "100%", label: "placement rate" },
                  { value: "500+", label: "Companies Hiring" },
                  { value: "50%", label: "Average hike" },
                  { value: "1.5k+", label: "Learners" },
                ].map((stat, index) => (
                  <React.Fragment key={`stat-${index}`}>
                    <Box textAlign="center">
                      <Typography variant="h6" fontWeight="bold" color="white">
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" color="grey.400">
                        {stat.label}
                      </Typography>
                    </Box>
                    {index < 3 && <Divider key={`divider-${index}`} orientation="vertical" flexItem sx={{ bgcolor: "grey.700" }} />}
                  </React.Fragment>
                ))}
              </Paper>

              <Box sx={{ display: { xs: 'none', sm: 'flex' } }} alignItems="center" mt={2} >
                <Typography variant="body2" color="white">
                  Know in-depth details in our free demo
                </Typography>
                <img
                  src={hand}
                  alt="Pointing finger icon"
                  style={{ height: "32px", width: "32px", marginLeft: "8px" }}
                />
              </Box>
            </Box>
          </Grid2>

          {/* Right Section */}
          <Grid2 size={{ xs: 12, md: 5, lg: 5 }} display="flex" flexDirection="column" justifyContent={{ xs: 'center', md: 'center', lg: 'flex-start' }}>
            <Paper sx={{
              p: 4,
              mt: 5,
              borderRadius: 5,
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',

            }}>
              <Typography fontWeight="bold" mb={2} >
                <span className="text-[13px] sm:text-[18px]">Book a</span>
                <span className="text-[13px] sm:text-[18px]" style={{
                  background: "linear-gradient(to right, #FCC41B , #FA00FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",


                }}>
                  {"    free demo class "}
                </span>
                <span className="text-[10px] sm:text-[14px] text-gray-500">to know more</span>

              </Typography>
              <Form />
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box >
  );
}

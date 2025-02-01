import React from 'react'
import Form from '../../Form/Form'
import { Container, Box, Typography, Paper } from '@mui/material'
import Grid from '@mui/material/Grid2'
import phone from '../../../../assets/bgsvg/mobile.png'

function RequestCall() {
  return (
    <>
      <Container>

        <Grid container spacing={2} justifyContent="center" alignItems="center" >

          <Grid size={{ xs: 12, md: 6 }} >
            <img className='hidden lg:block mt-1.5' src={phone} alt="phone" style={{ width: '90%', height: '100%', alignContent: 'center' }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', }} >
            <Paper elevation={3} sx={{ p: 3, borderRadius: 5, maxWidth: "90%" }} >
            <Typography variant="h5" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 'bold', mt: 3 }} > Have questions?
            </Typography>
            <Typography variant="h5" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 'bold', mb: 4 }} >Request a call from our counselors.
            </Typography>
            <Form btntext='Request callback' />
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </>
  )
}

export default RequestCall
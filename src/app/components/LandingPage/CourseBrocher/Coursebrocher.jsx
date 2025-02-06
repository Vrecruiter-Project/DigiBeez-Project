import React from 'react';
import Grid from '@mui/material/Grid2'
import { Box, Button, Container, Typography } from '@mui/material';
import PlacementSwiper from '../CoursesSwiper/PlacementSwiper';
// import flagImg from "../../../../assets/herosection/flag.png";
import video from '../../../../assets/Brochurepdf/videoeditingcoursesyllabus.pdf'
const Coursebrocher = () => {
  const buttonContent = [
    { label: "Download Web Development brochure", file: '' },
    { label: "Download Web Designing brochure", file: "/brochures/web-designing.pdf" },
    { label: "Download Graphic Designing brochure", file: "/brochures/graphic-designing.pdf" },
    { label: "Download Video Editing brochure", file: video },
    { label: "Download Digital Marketing brochure", file: "/brochures/digital-marketing.pdf" },
    { label: "Download UI/UX Designing brochure", file: "/brochures/ui-ux-designing.pdf" }
  ];

  const placementItems = [
    {
      image: "https://media.istockphoto.com/id/597958694/photo/young-adult-male-student-in-the-lobby-of-a-university.jpg?s=612x612&w=0&k=20&c=QaNEzmcKrLJzmwOcu2lgwm1B7rm3Ouq2McYYdmoMGpU=",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "53% hike"
    },
    {
      image: "data:image/jpeg;base64,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",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "42% hike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Qv5s5REahX2Vcj11jPnU1ibiEUfTc-VMAQ&s",
      compimage: "https://static.vecteezy.com/system/resources/thumbnails/023/261/679/small_2x/modern-marketing-business-logo-template-digital-marketing-direction-start-up-design-concept-vector.jpg",
      details: "62% hike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6mAon9YfRG_BLRnGPLeq4ECf1qrS1gsdfw&s",
      compimage: "https://cdn3.vectorstock.com/i/1000x1000/91/22/digital-marketing-logo-for-company-vector-24599122.jpg",
      details: "78% hike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rCFA8I6w_adX3lzUTmYjf75gvFmrvoKBMg&s",
      compimage: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/05/attachment_114762604-e1588691373869.png?auto=format&q=60&fit=max&w=930",
      details: "55% hike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhfNZTuKqQVBMKQPkHabC9NI0bzHFkaMCAg&s",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "98% hike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwiruafD-4A_k3Pq1s0qLoLzRP5LENJ8qFA&s",
      compimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0rPvOs5dptZHt2nn5lQy0XOePGgmIHGb_A&s",
      details: "83% hike"
    },
    {
      image: "https://files.codingninjas.com/screenshot_2024-02-08_153909-removebg-preview-1707388361.webp",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "65% hike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAukRfiY4AAOeXYd8XV2ZJ6-otx1jIWstrA&s",
      compimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHpd-z_CNZ4F-VFyEKoYimOPcBBCPaOJwmg&s",
      details: "75% hike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05HsoaVK2suSyWvDs-LuTTs6ljv00L52geQ&s",
      compimage: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/digital-marketing-agency-logo-design-template-3ca7ae0f227b067d2ac5266cc295ad49_screen.jpg?ts=1685468529",
      details: "56% hike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTOKnpuow_kaQX1MxCBGg7iagkyYcAJ9w1w&s",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "46% hike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfILAg_K9dxmt7sX2jWvJ2mY61GU10OeA7A&s",
      compimage: "https://files.codingninjas.com/axa-v2-1707477934.webp",
      details: "88% hike"
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
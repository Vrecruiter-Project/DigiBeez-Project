// src/FAQ.js
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";

const faqData = [
  {
    question: "What is the Search Engine Optimization (SEO)?",
    answer: "This involves improving a website so it appears higher in search results, making it easier for people to find.",
  },
  {
    question: "What is the Pay-per-Click (PPC)",
    answer: "This is a way to advertise where businesses pay each time someone clicks on their ad, usually shown on search engines.",
  },
  {
    question: "What is the Social Media Marketing",
    answer: " This focuses on promoting products or services through platforms like Facebook, Instagram, and Twitter to engage with customers.",
  },
  {
    question: "What is the Content Marketing?",
    answer: " This is about creating valuable and relevant content, like blog posts or videos, to attract and inform customers.",
  },
  {
    question: "What is the Email Marketing?",
    answer: " This includes sending newsletters or promotional messages directly to people's inboxes to keep them informed and encourage purchases.",
  }, {
    question: "What is the Affiliate Marketing?",
    answer: "This involves partnering with others who promote a company’s products and earn a commission for every sale they help generate.",
  }, {
    question: "What is the  Influencer Marketing",
    answer: "This strategy uses popular social media figures to promote a brand, tapping into their follower base for greater reach.",
  }
  //, {
//     question: "Where will the classes take place?",
//     answer: "Details about the program duration.",
//   }, {
//     question: "How many domain expert sessions and mock interviews will I have?",
//     answer: "Details about the program duration.",
//   }, {
//     question: "How will I benefit from industry mentors?",
//     answer: "Details about the program duration.",
//   },
];

const FAQ = ({ onButtonClick }) => {
  return (
    <div className="mt-7">
      <Container>
        <h1 className="text-2xl font-bold mb-4  text-center">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: "bold" }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Grid container spacing={2} justifyContent="center">
          {/* <Button  variant="contained" sx={{ mt: 4, bgcolor: "white", border: "1px solid #FCC41B", color: "#000" }}>
            Request Callback
          </Button> */}
          <Button onClick={onButtonClick} variant="contained" sx={{ mt: 4, bgcolor: "#FCC41B", color: "#000" }}>
            Book a Free Demo
          </Button>

        </Grid>
      </Container>
    </div>
  );
};

export default FAQ;

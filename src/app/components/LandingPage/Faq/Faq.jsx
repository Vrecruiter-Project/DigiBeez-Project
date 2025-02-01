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
    question: "What is the job Bookcamp program?",
    answer: "Details about the job Bookcamp program.",
  },
  {
    question: "What is the refund policy for the program?",
    answer: "Details about the refund policy.",
  },
  {
    question: "Who is eligible for the program?",
    answer: "Details about eligibility.",
  },
  {
    question: "What is the duration of the program?",
    answer: "Details about the program duration.",
  },
  {
    question: "How good is the placement record?",
    answer: "Details about the program duration.",
  },{
    question: "Which roles will I be eligible for?",
    answer: "Details about the program duration.",
  },{
    question: "How do I get my doubts resolved?",
    answer: "Details about the program duration.",
  },{
    question: "Where will the classes take place?",
    answer: "Details about the program duration.",
  },{
    question: "How many domain expert sessions and mock interviews will I have?",
    answer: "Details about the program duration.",
  },{
    question: "How will I benefit from industry mentors?",
    answer: "Details about the program duration.",
  },
];

const FAQ = () => {
  return (
    <div>
      <Container>
        <h1 className="text-2xl font-bold mb-4  text-center">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <Accordion key={index} sx={{mb: 2}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{fontWeight: "bold"}}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Grid container spacing={2} justifyContent="center">
        <Button variant="contained" sx={{ mt: 4, bgcolor: "white", border: "1px solid #FCC41B", color: "#000" }}>
                Request Callback
            </Button>
            <Button variant="contained" sx={{ mt: 4, bgcolor: "#FCC41B", color: "#000" }}>
                Book a Free Demo
            </Button>
            </Grid>
      </Container>
    </div>
  );
};

export default FAQ;

import { Stack, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

import { pxToRem, responsiveFontSizes } from "src/theme/typography";
import Iconify from "src/components/iconify";

// Local FAQs data
const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and modern web technologies. I have extensive experience building B2B platforms and full-stack applications."
  },
  {
    question: "How many years of experience do you have?",
    answer: "I have 2.5+ years of professional experience as a Full Stack Developer, with a track record of being promoted from SDE-1 to SDE-2 to Lead based on delivery, reliability, and code quality."
  },
  {
    question: "What types of projects have you worked on?",
    answer: "I've worked on B2B travel platforms including flight/hotel/package booking systems, agent platforms, visa applications, employee reimbursement systems, and monitoring dashboards."
  },
  {
    question: "Do you work with cloud services?",
    answer: "Yes, I have experience with Vercel, Netlify, Cloudflare R2/CDN, and various cloud services for deployment, storage, and content delivery."
  },
  {
    question: "What's your approach to project management?",
    answer: "I use tools like ClickUp and Jira for project management, and I focus on delivering reliable, scalable solutions with proper monitoring and analytics integration."
  }
];

export default function Home2Faqs() {
  return (
    <Container>
      <Stack sx={{ py: 10 }} spacing={4}>
        <Typography
           sx={{
            fontFamily: "Denton",
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: "center",
            background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: pxToRem(45),
            ...responsiveFontSizes({ sm: 40, md: 50, lg: 55 }),
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Stack spacing={2}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ boxShadow: 1 }}>
              <AccordionSummary
                expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                  },
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

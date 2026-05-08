import { Stack, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

import { pxToRem, responsiveFontSizes } from "src/theme/typography";
import Iconify from "src/components/iconify";

// Local FAQs data
const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Redis, Firestore, and Firebase Realtime Database. I have extensive experience building B2B and B2C platforms using TypeScript, Material UI, and Tailwind CSS."
  },
  {
    question: "How many years of experience do you have?",
    answer: "I have 3 years of professional experience as a Full Stack Developer at Flyzy, promoted from SDE-1 to SDE-2 based on delivery, reliability, and code quality."
  },
  {
    question: "What types of projects have you worked on?",
    answer: "I've worked on B2B corporate travel dashboards (Flyzy), B2B travel agent portals (DirectOne), and a B2C visa booking platform (TryVisa). I've also built ops automation workflows, internal Retool dashboards, and payment integrations."
  },
  {
    question: "Do you work with cloud services?",
    answer: "Yes — Firebase Hosting/Functions/Scheduler, Cloudflare R2/CDN, and GitHub Actions. I also have hands-on experience with payment gateways (Razorpay, PhonePe) and observability tools (Grafana, Prometheus, Loki)."
  },
  {
    question: "What's your approach to project management?",
    answer: "I use ClickUp and Jira for project management, and I focus on delivering reliable, scalable solutions with proper monitoring, analytics, and automation built in from the start."
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

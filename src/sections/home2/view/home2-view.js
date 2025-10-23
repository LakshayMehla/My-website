"use client";

import { useScroll } from "framer-motion";

import { Stack } from "@mui/material";

import MainLayout from "src/layouts/main";

import ScrollProgress from "src/components/scroll-progress";

import Home2Hero from "../home2-hero";
import Home2Faqs from "../home2-faqs";
import Home2Team from "../home2-team";
import Home2Features from "../home2-features";
import Home2SeoContent from "../home2-seo-content";
import Home2StillHaveQuestions from "../home2-still-have-questions";

// ----------------------------------------------------------------------

export default function Home2View() {
  const { scrollYProgress } = useScroll();
  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Stack>
        <Home2Hero />

        <Home2SeoContent />

        <Home2Features />

        <Home2Team />

        <Home2Faqs />

        <Home2StillHaveQuestions />
      </Stack>
    </MainLayout>
  );
}

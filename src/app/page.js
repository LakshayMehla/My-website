"use client";

import { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";

import { HiddenH1 } from "src/components/hidden-h1";

// Import with no SSR to avoid document reference errors
const HomeContent = dynamic(() => import("../sections/home2/view/home2-view"), {
  ssr: false,
});

export default function HomePage() {
  useEffect(() => {
    // Check if there's a hash to scroll to after page load
    const scrollToHash = sessionStorage.getItem('scrollToHash');
    if (scrollToHash) {
      // Clear the stored hash
      sessionStorage.removeItem('scrollToHash');
      
      // Wait for the page to fully load, then scroll to the element
      const scrollToElement = () => {
        const element = document.getElementById(scrollToHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      // Use setTimeout to ensure the page is fully rendered
      setTimeout(scrollToElement, 100);
    }
  }, []);

  return (
    <>
      {/* Main Content */}
      <HiddenH1 text='Lakshay Mehla - Full Stack Developer Portfolio | React, Next.js, Node.js Developer' />
      <Suspense fallback={<div>Loading...</div>}>
        <HomeContent />
      </Suspense>
    </>
  );
}

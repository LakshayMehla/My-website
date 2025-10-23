'use client';

import MainLayout from 'src/layouts/main';
import ProjectPage from 'src/components/project-page';

export default function DirectOneProjectPage() {
  return (
    <MainLayout>
      <ProjectPage
        title="DirectOne Travel Platform"
        description="B2B travel platform with flight, hotel, package, and cab booking systems. Sole frontend owner with React/Next.js and Material UI"
        longDescription="DirectOne is a comprehensive B2B travel platform that I built and owned as the sole frontend developer. The platform handles multiple travel services including flights, hotels, packages, and cab bookings. I implemented a responsive, accessible UI using React/Next.js and Material UI, along with a shared component library for consistency across all modules.

The platform features advanced booking management with multiple states (BOOKING_SUCCESS, PARTIALLY_BOOKED, TICKETING_SUCCESS, cancelled, failed) with clear alerts and conditional actions. I integrated Google Analytics and OpenReplay session replay to diagnose UX issues and improve conversion funnels, correlating sessions with Grafana/Prometheus metrics to reduce MTTR.

Key technical implementations include direct checkout integration with Razorpay, reducing payment processing time by ~60% with idempotent flows and robust retries. I optimized MongoDB queries and adopted Cloudflare R2 for image storage, improving page load times by ~35% on booking flows. The platform also includes automated workflows and alerts with n8n and Make.com, cutting manual operational effort by ~80% across support and finance."
        technologies={[
          "React",
          "Next.js", 
          "Material UI",
          "Razorpay",
          "MongoDB",
          "Google Analytics",
          "OpenReplay",
          "Grafana",
          "Prometheus",
          "Cloudflare R2",
          "n8n",
          "Make.com"
        ]}
        achievements="Reduced payment processing time by ~60%, improved page load times by ~35%, cut manual operational effort by ~80%"
        screenshots={[
          "/assets/images/projects/directone/homepage.png",
          "/assets/images/projects/directone/search.png",
          "/assets/images/projects/directone/booking.png",
          "/assets/images/projects/directone/payment.png",
          "/assets/images/projects/directone/confirmation.png",
        ]}
        liveUrl="https://godirect.one/"
      />
    </MainLayout>
  );
}

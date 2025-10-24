'use client';

import MainLayout from 'src/layouts/main';
import ProjectPage from 'src/components/project-page';

export default function DirectOneProjectPage() {
  return (
    <MainLayout>
      <ProjectPage
        title="DirectOne Travel Platform"
        description="B2B travel platform with flight, hotel, package, and cab booking. Features company policy management, booking limits, request system, and reimbursement workflows"
        longDescription="DirectOne is a comprehensive B2B travel platform that I built and owned as the sole frontend developer. The platform handles multiple travel services including flights, hotels, packages, and cab bookings. I implemented a responsive, accessible UI using React/Next.js and Material UI, along with a shared component library for consistency across all modules.

The platform features advanced company policy management where administrators can control booking permissions and set individual booking limits for employees. I built a sophisticated request system where users can request to book higher amounts than their assigned limits, with approval workflows for admin, manager, and employee levels. This ensures proper financial controls while maintaining operational flexibility.

A key feature is the comprehensive reimbursement system where employees can submit reimbursement requests for travel expenses. The system includes multi-level approval workflows where admins and managers can approve or reject requests based on company policies. This feature is available across all user levels (admin, manager, employee) with appropriate permission controls.

The platform features advanced booking management with multiple states (BOOKING_SUCCESS, PARTIALLY_BOOKED, TICKETING_SUCCESS, cancelled, failed) with clear alerts and conditional actions. I integrated Google Analytics and OpenReplay session replay to diagnose UX issues and improve conversion funnels, correlating sessions with Grafana/Prometheus metrics to reduce MTTR.

Key technical implementations include direct checkout integration with Razorpay, reducing payment processing time by ~60% with idempotent flows and robust retries. I optimized MongoDB queries and adopted Cloudflare R2 for image storage, improving page load times by ~35% on booking flows. The platform also includes automated workflows and alerts with n8n and Make.com, cutting manual operational effort by ~80% across support and finance."
        technologies={[
          "React",
          "Material UI",
          "Razorpay",
          "MongoDB",
          "Google Analytics",
          "OpenReplay",
          "Grafana",
          "Prometheus",
         "Firebase",
         "Express",
          "n8n",
          "Make.com"
        ]}
        achievements="Implemented company policy management with booking limits and approval workflows, built comprehensive reimbursement system with multi-level approvals, reduced payment processing time by ~60%, improved page load times by ~35%"
        screenshots={[
          "/assets/images/projects/directone/6.png",
          "/assets/images/projects/directone/7.png",
          "/assets/images/projects/directone/8.png",
          "/assets/images/projects/directone/9.png",
          "/assets/images/projects/directone/10.png",
        ]}
        liveUrl="https://godirect.one/"
      />
    </MainLayout>
  );
}

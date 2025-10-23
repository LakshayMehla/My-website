'use client';

import MainLayout from 'src/layouts/main';
import ProjectPage from 'src/components/project-page';

export default function TryVisaProjectPage() {
  return (
    <MainLayout>
      <ProjectPage
        title="TryVisa Application"
        description="Visa application platform with streamlined checkout process. Sole developer who rebuilt entire application experience"
        longDescription="TryVisa is a comprehensive visa application platform that I rebuilt entirely as the sole developer. The platform streamlines the complex visa application process, making it more user-friendly and efficient for applicants.

I completely redesigned the application experience, focusing on reducing friction in the checkout process. Through step reduction, improved validation, and telemetry-driven performance iterations, I successfully reduced checkout time from ~3 minutes to under 1 minute. This dramatic improvement significantly enhanced user experience and conversion rates.

The platform features a modern, intuitive interface built with React and Node.js, with MongoDB for data storage. I implemented real-time features using WebSockets and Cloudflare for optimal performance and security. The application includes comprehensive form validation, document upload capabilities, and real-time status tracking.

Key features include automated workflow management, multi-step form processing with progress indicators, secure document handling, and integration with payment gateways. The platform also includes admin dashboards for managing applications and providing customer support."
        technologies={[
          "React",
          "Node.js",
          "MongoDB",
          "WebSockets",
          "Cloudflare",
          "Express",
          "Material UI",
          "Payment Gateway Integration"
        ]}
        achievements="Reduced checkout time from ~3 minutes to under 1 minute through step reduction, improved validation, and telemetry-driven performance iterations"
        screenshots={[
          "/assets/images/projects/tryvisa/landing.png",
          "/assets/images/projects/tryvisa/application-form.png",
          "/assets/images/projects/tryvisa/checkout.png",
          "/assets/images/projects/tryvisa/status-tracking.png",
          "/assets/images/projects/tryvisa/dashboard.png",
        ]}
        liveUrl="https://tryvisa.com/"
      />
    </MainLayout>
  );
}

'use client';

import MainLayout from 'src/layouts/main';
import ProjectPage from 'src/components/project-page';

export default function FlyzyProjectPage() {
  return (
    <MainLayout>
      <ProjectPage
        title="Flyzy Agent Platform"
        description="Agent platform with flight, hotel, and package booking. Features whitelabeling, markup customization, and comprehensive booking management"
        longDescription="Flyzy is a comprehensive agent platform that I developed as the sole frontend developer. The platform provides agents with powerful tools for flight, hotel, and package booking services, along with complete ticketing and account management capabilities.

I built status-aware components and accessible forms using Material UI, ensuring a consistent and user-friendly experience. The platform features role-based dashboards that adapt to different user permissions and requirements. A key highlight is the whitelabeling functionality, enabling agents to customize tickets and vouchers by adding their own markup amounts, branding, and logos - allowing them to maintain their brand identity while using the platform.

The package booking feature extends beyond traditional flight and hotel services, providing agents with comprehensive travel package options. I implemented advanced markup management where agents can set custom pricing and profit margins on all bookings, with transparent reporting and commission tracking.

On the backend, I expanded Node/Express APIs for booking, ticketing, and reporting functionalities. I integrated MongoDB/PostgreSQL with export pipelines used for finance-ready Excel/CSV generation. The platform includes Cloudflare routing/SEO improvements and optimized hosting to reduce redirect chains and improve crawlability.

I also built Retool dashboards for operations (bookings, users, system health) to speed investigation and reduce support cycles. The platform supports transparent claim management across all departments with multi-level approvals and compliance checks."
        technologies={[
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Material UI",
          "Firebase",
          "Retool",
          "Excel/CSV Export"
        ]}
        achievements="Implemented whitelabeling features with custom markup management, built comprehensive role-based dashboards, and integrated package booking functionality"
        screenshots={[
          "/assets/images/projects/flyzy/1.png",
          "/assets/images/projects/flyzy/6.jpeg",
          "/assets/images/projects/flyzy/3.png",
          "/assets/images/projects/flyzy/2.png",
          "/assets/images/projects/flyzy/4.png",
          "/assets/images/projects/flyzy/5.png",
        ]}
        liveUrl="https://flyzygo.com/"
      />
    </MainLayout>
  );
}

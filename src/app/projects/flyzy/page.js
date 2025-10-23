'use client';

import MainLayout from 'src/layouts/main';
import ProjectPage from 'src/components/project-page';

export default function FlyzyProjectPage() {
  return (
    <MainLayout>
      <ProjectPage
        title="Flyzy Agent Platform"
        description="Agent platform with search, booking, ticketing, and account management. Built role-based dashboards and whitelabel customization"
        longDescription="Flyzy is a comprehensive agent platform that I developed as the sole frontend developer. The platform provides agents with powerful tools for search, booking, ticketing, and account management across multiple travel services.

I built status-aware components and accessible forms using Material UI, ensuring a consistent and user-friendly experience. The platform features role-based dashboards that adapt to different user permissions and requirements. I implemented whitelabeling features, enabling agents to customize tickets and vouchers by adding their own markup amounts, branding, and logos.

On the backend, I expanded Node/Express APIs for booking, ticketing, and reporting functionalities. I integrated MongoDB/PostgreSQL with export pipelines used for finance-ready Excel/CSV generation. The platform includes Cloudflare routing/SEO improvements and optimized hosting to reduce redirect chains and improve crawlability.

I also built Retool dashboards for operations (bookings, users, system health) to speed investigation and reduce support cycles. The platform supports transparent claim management across all departments with multi-level approvals and compliance checks."
        technologies={[
          "React",
          "Node.js",
          "Express",
          "PostgreSQL",
          "MongoDB",
          "Material UI",
          "Vercel",
          "Cloudflare",
          "Retool",
          "Excel/CSV Export"
        ]}
        achievements="Implemented whitelabeling features and Excel exports for partner agencies, built comprehensive role-based dashboards"
        screenshots={[
          "/assets/images/projects/flyzy/dashboard.png",
          "/assets/images/projects/flyzy/booking.png",
          "/assets/images/projects/flyzy/agent-portal.png",
          "/assets/images/projects/flyzy/whitelabel.png",
          "/assets/images/projects/flyzy/reports.png",
        ]}
        liveUrl="https://flyzygo.com/"
      />
    </MainLayout>
  );
}

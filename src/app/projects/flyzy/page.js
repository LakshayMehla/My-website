'use client';

import MainLayout from 'src/layouts/main';
import ProjectPage from 'src/components/project-page';

export default function FlyzyProjectPage() {
  return (
    <MainLayout>
      <ProjectPage
        title="Flyzy Corporate Dashboard"
        description="B2B corporate travel platform handling flights, hotels, and packages. Features hierarchical team management, real-time booking analytics, and a dynamic travel policy engine with multi-level approval workflows."
        longDescription="Flyzy Corporate Dashboard is a comprehensive B2B travel platform for corporate clients that I own as the primary frontend developer and full stack contributor. The platform handles flights, hotels, and packages using React/Next.js and Material UI on the frontend with Node.js/Express APIs on the backend.

A core feature I engineered is the hierarchical team management module with real-time booking analytics — giving corporate admins complete visibility into their team's travel activity. Alongside this, I designed a dynamic travel policy engine allowing admins to set automated booking limits, manage compliance thresholds, and process limit-increase requests through multi-level approval workflows (admin, manager, employee levels).

On the performance and infrastructure side, I optimized MongoDB queries, migrated asset storage to Cloudflare R2, and integrated direct Razorpay checkout with idempotent payment handling — reducing transaction failures and accelerating page load times on booking flows.

I also built Retool dashboards for operations teams to monitor bookings, system health, and user behavior, significantly improving incident response times. The platform supports comprehensive ops workflows and alert systems via n8n and Make.com, cutting manual support intervention by ~80%."
        technologies={[
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "Material UI",
          "Razorpay",
          "Cloudflare R2",
          "Retool",
          "n8n",
          "Make.com",
          "Firebase"
        ]}
        achievements="Engineered team analytics & travel policy engine with multi-level approvals; integrated idempotent Razorpay checkout; optimized MongoDB + Cloudflare R2 for faster load times"
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

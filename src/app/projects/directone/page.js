'use client';

import MainLayout from 'src/layouts/main';
import ProjectPage from 'src/components/project-page';

export default function DirectOneProjectPage() {
  return (
    <MainLayout>
      <ProjectPage
        title="DirectOne – B2B Travel Agent Portal"
        description="B2B travel agent portal covering search, booking, and account management. Features a whitelabeling utility for branded tickets and a dynamic pricing engine for agent markup/margin management."
        longDescription="DirectOne is a specialized B2B travel agent portal that I led end-to-end as the primary frontend developer. The platform covers search, booking, ticketing, and account management for travel agents using React and Material UI — built with accessible forms and a consistent component library across all modules.

The flagship feature I developed is a robust whitelabeling utility that empowers travel agents to generate fully branded tickets and customized invoices. Agents can add their logo, contact details, and branding to every customer-facing document — maintaining their professional brand identity while operating through the platform.

Alongside whitelabeling, I implemented a dynamic pricing/margin engine that allows agents to seamlessly add and track custom markups on all bookings (flights, hotels, packages) prior to client delivery. This gives agents complete control over their profit margins with transparent per-booking reporting.

I integrated Google Analytics and OpenReplay session replay to diagnose UX issues and improve conversion funnels. Grafana and Prometheus metrics were correlated with session data to reduce MTTR. I also built automated ops workflows using n8n and Make.com, cutting manual support intervention by ~80%."
        technologies={[
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "Material UI",
          "Google Analytics",
          "OpenReplay",
          "Grafana",
          "Prometheus",
          "Firebase",
          "n8n",
          "Make.com"
        ]}
        achievements="Built whitelabeling engine for branded tickets and dynamic markup/margin management; automated ops workflows cutting manual effort by ~80%"
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

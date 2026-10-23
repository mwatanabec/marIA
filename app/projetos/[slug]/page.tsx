import { notFound } from "next/navigation";
import { projectProposals } from "@/content/projects";
import { ProjectDetail } from "@/components/projetos/ProjectPortfolio";
import { SiteShell } from "@/components/institutional/SiteShell";
import { pageMetadata } from "@/components/institutional/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectProposals.map(project => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectProposals.find(item => item.slug === params.slug);
  if (!project) notFound();
  return pageMetadata(project.title, `Demonstração planejada: ${project.description}`, `/projetos/${project.slug}`);
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectProposals.find(item => item.slug === params.slug);
  if (!project) notFound();
  return <SiteShell><ProjectDetail project={project}/></SiteShell>;
}

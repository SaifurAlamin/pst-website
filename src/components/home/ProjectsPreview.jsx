
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/projects";

export default async function ProjectsPreview() {
    const t = await getTranslations("HomePage");

    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="bg-white py-20 md:py-28">
            <Container>
                <Reveal>
                    <SectionHeading
                        eyebrow={t("projectsEyebrow")}
                        title={t("projectsTitle")}
                        description={t("projectsDescription")}
                    />
                </Reveal>

                <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project, index) => (
                        <Reveal key={project.slug} delay={index * 0.08}>
                            <ProjectCard
                                project={project}
                            />
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <div className="mt-12 text-center">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-3 rounded-lg bg-pstc-blue px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-pstc-navy"
                        >
                            {t("projectsButton")}
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}

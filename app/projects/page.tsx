import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected side projects, experiments, and showcase work from Jordan Page.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects",
    description:
      "Selected side projects, experiments, and showcase work from Jordan Page.",
    url: "/projects",
  },
  twitter: {
    title: "Projects",
    description:
      "Selected side projects, experiments, and showcase work from Jordan Page.",
  },
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto min-h-screen w-full max-w-6xl border-x border-(--border-subtle) px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-(--accent)">
        <span className="size-2 bg-(--accent)" aria-hidden="true" />
        Archive / Work
      </p>

      <h1 className="mt-8 max-w-4xl text-[clamp(4rem,12vw,9rem)] font-semibold uppercase leading-[0.8] tracking-[-0.075em] text-(--text-primary)">
        Projects
      </h1>

      <p className="mt-12 max-w-2xl border-l-4 border-(--accent) pl-5 text-lg leading-relaxed text-(--text-secondary)">
        This page will be updated with my latest projects and experiments.
      </p>
    </section>
  );
}

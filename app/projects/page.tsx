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
    <section className="mx-auto min-h-screen w-full max-w-6xl px-5 pb-28 pt-28 sm:px-8 sm:pb-36 sm:pt-32 lg:px-12">
      <p className="flex items-center gap-3 border-y border-(--border-strong) py-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-(--accent) motion-safe:animate-rise">
        <span
          className="size-1.5 rounded-full bg-(--accent)"
          aria-hidden="true"
        />
        Archive / Work
      </p>

      <h1 className="mt-10 font-serif text-[clamp(5.5rem,20vw,14rem)] leading-[0.85] tracking-[-0.035em] text-(--text-primary) motion-safe:animate-rise motion-safe:[animation-delay:100ms]">
        Projects
      </h1>

      <p className="mt-12 max-w-2xl text-lg leading-relaxed text-(--text-secondary) motion-safe:animate-rise motion-safe:[animation-delay:250ms] sm:text-xl">
        This page will be updated with my latest projects and experiments.
      </p>
    </section>
  );
}

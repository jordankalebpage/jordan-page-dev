import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Jordan Page is currently learning, exploring, and working on.",
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    title: "Now",
    description:
      "What Jordan Page is currently learning, exploring, and working on.",
    url: "/now",
  },
  twitter: {
    title: "Now",
    description:
      "What Jordan Page is currently learning, exploring, and working on.",
  },
};

export default function NowPage() {
  return (
    <section className="mx-auto w-full max-w-6xl border-x border-(--border-subtle) px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-(--accent)">
        <span className="size-2 bg-(--accent)" aria-hidden="true" />
        Field Notes / Current
      </p>

      <h1 className="mt-8 text-[clamp(4rem,12vw,9rem)] font-semibold uppercase leading-[0.8] tracking-[-0.075em] text-(--text-primary)">
        Now
      </h1>

      <p className="mt-12 max-w-2xl border-l-4 border-(--accent) pl-5 text-lg leading-relaxed text-(--text-secondary)">
        This page is meant to show what I&apos;m currently working on/learning
        about. As of now, I&apos;m following along with the &quot;PyTorch for
        Deep Learning & Machine Learning - Full Course&quot; course on YouTube
        (25 hours of content!)
      </p>

      <div className="mt-12 border border-(--border-strong) bg-(--surface-card) p-2 transition-colors hover:border-(--accent)">
        <div className="aspect-video w-full">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/V_xro1bcAuA?si=p0Sc6iFTw-pQu1Ud"
            title="PyTorch for Deep Learning & Machine Learning Full Course"
          />
        </div>
      </div>
    </section>
  );
}

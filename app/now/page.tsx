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
    <section className="mx-auto w-full max-w-6xl px-5 pb-28 pt-28 sm:px-8 sm:pb-36 sm:pt-32 lg:px-12">
      <p className="flex items-center gap-3 border-y border-(--border-strong) py-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-(--accent) motion-safe:animate-rise">
        <span
          className="size-1.5 rounded-full bg-(--accent)"
          aria-hidden="true"
        />
        Field Notes / Current
      </p>

      <h1 className="mt-10 font-serif text-[clamp(5.5rem,20vw,14rem)] leading-[0.85] tracking-[-0.035em] text-(--text-primary) motion-safe:animate-rise motion-safe:[animation-delay:100ms]">
        Now
      </h1>

      <p className="mt-12 max-w-2xl text-lg leading-relaxed text-(--text-secondary) motion-safe:animate-rise motion-safe:[animation-delay:250ms] sm:text-xl">
        This page is meant to show what I&apos;m currently working on/learning
        about. As of now, I&apos;m following along with the &quot;PyTorch for
        Deep Learning & Machine Learning - Full Course&quot; course on YouTube
        (25 hours of content!)
      </p>

      <div className="mt-12 border border-(--border-strong) bg-(--surface-card) p-2 transition-colors hover:border-(--accent) motion-safe:animate-rise motion-safe:[animation-delay:400ms]">
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

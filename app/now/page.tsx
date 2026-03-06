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
    <section className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="rounded-3xl border border-(--border-subtle) bg-(--surface-card) p-8 shadow-sm backdrop-blur-sm sm:p-12 transition-all">
        <h1 className="text-4xl font-extrabold tracking-tight text-(--text-primary) sm:text-5xl">
          Now
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--text-secondary)">
          This page is meant to show what I&apos;m currently working on/learning
          about. As of now, I&apos;m following along with the &quot;PyTorch for
          Deep Learning & Machine Learning - Full Course&quot; course on YouTube
          (25 hours of content!)
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--surface-header) shadow-lg transition-all hover:border-(--accent-border) hover:shadow-(--accent-hover-bg)">
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
      </div>
    </section>
  );
}

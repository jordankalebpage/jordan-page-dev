import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "What I am currently learning and working on.",
};

export default function NowPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-(--text-primary)">
        Now
      </h1>

      <p className="mt-4 max-w-2xl text-(--text-secondary)">
        This page is meant to show what I&apos;m currently working on/learning
        about. As of now, I&apos;m following along with the &quot;PyTorch for
        Deep Learning & Machine Learning - Full Course&quot; course on YouTube.
      </p>

      <div className="mt-6 overflow-hidden rounded-xl border border-(--border-subtle) bg-(--surface-card)">
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

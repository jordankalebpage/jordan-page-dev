type SocialImageProps = {
  eyebrow: string;
  title: string;
  description: string;
  footer: string;
};

export function SocialImage({
  eyebrow,
  title,
  description,
  footer,
}: SocialImageProps) {
  return (
    <div tw="flex h-full w-full bg-gradient-to-br from-zinc-950 via-slate-900 to-sky-950 p-14 text-zinc-100">
      <div tw="flex h-full w-full flex-col justify-between rounded-3xl border border-white/10 bg-black/45 p-12">
        <div tw="flex text-2xl uppercase tracking-widest text-zinc-400">
          {eyebrow}
        </div>

        <div tw="flex max-w-[860px] flex-col gap-5">
          <div tw="flex text-8xl font-bold leading-none">{title}</div>

          <div tw="flex text-3xl leading-normal text-zinc-300">
            {description}
          </div>
        </div>

        <div tw="flex w-full items-center justify-between">
          <div tw="flex text-2xl text-sky-300">{footer}</div>

          <div tw="flex h-4 w-4 rounded-full bg-sky-300 shadow-[0_0_32px_rgba(125,211,252,0.8)]" />
        </div>
      </div>
    </div>
  );
}

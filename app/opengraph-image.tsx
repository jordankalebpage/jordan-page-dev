import { ImageResponse } from "next/og";
import { SocialImage } from "./SocialImage";

export const runtime = "edge";

export const alt = "Jordan Page personal website";

export const contentType = "image/png";

export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <SocialImage
        eyebrow="Full Stack Developer"
        title="Jordan Page"
        description="Building polished React, Next.js, and .NET applications with a focus on accessibility, performance, and practical software."
        footer="jordanpage.dev"
      />
    ),
    size,
  );
}

import Image from "next/image";
import type { ReactNode } from "react";

export default function TidHero({
  children,
  image,
  variant = "page",
  imagePosition = "center 42%",
}: {
  children: ReactNode;
  image: string | undefined;
  variant?: "home" | "page";
  imagePosition?: string;
}) {
  return (
    <section
      className={`tid-image-hero ${variant === "home" ? "tid-hero" : "tid-page-intro"}`}
    >
      {image && <div className="tid-hero-background" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          unoptimized={!image.startsWith("/")}
          style={{
            objectFit: "cover",
            objectPosition: `var(--tid-hero-image-position, ${imagePosition})`,
          }}
        />
      </div>}
      <div className="tid-hero-shade" aria-hidden="true" />
      {children}
    </section>
  );
}

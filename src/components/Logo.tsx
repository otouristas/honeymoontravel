import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

type LogoProps = {
  variant?: "wordmark" | "icon" | "footer";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "wordmark",
  className = "",
  priority = false,
}: LogoProps) {
  if (variant === "icon") {
    return (
      <Link href="/" className={`inline-block shrink-0 ${className}`} aria-label={site.name}>
        <Image
          src={site.assets.icon}
          alt=""
          width={72}
          height={72}
          priority={priority}
          className="h-12 w-12 object-contain md:h-16 md:w-16"
        />
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link href="/" className={`inline-block ${className}`} aria-label={site.name}>
        <Image
          src={site.assets.footerLogo}
          alt={site.name}
          width={280}
          height={185}
          className="mx-auto h-auto w-48 object-contain md:w-56"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-block ${className}`} aria-label={site.name}>
      <Image
        src={site.assets.wordmark}
        alt={site.name}
        width={280}
        height={74}
        priority={priority}
        className="mx-auto h-auto w-[min(100%,220px)] object-contain md:w-[260px]"
      />
    </Link>
  );
}

export function Diamond({
  className = "",
  align = "center",
}: {
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <Image
      src={site.assets.diamond}
      alt=""
      width={56}
      height={56}
      className={`${align === "center" ? "mx-auto" : "mr-auto"} h-10 w-10 object-contain opacity-90 ${className}`}
    />
  );
}

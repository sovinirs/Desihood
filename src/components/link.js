import Link from "next/link";

import { cn } from "@/lib/utils";

export const PrimaryLink = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`text-[hsl(var(--primary-hsl))] font-bold ${className}`}
    >
      {children}
    </Link>
  );
};

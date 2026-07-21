import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "./fadeup";

interface CollectionCardProps {
  title: string;
  subtitle: string;
  image: string;
  large?: boolean;
  delay?: number;
}

export default function CollectionCard({
  title,
  subtitle,
  image,
  large = false,
  delay = 0,
}: CollectionCardProps) {
  return (
  <FadeUp
  delay={delay}
  className={large ? "h-[520px]" : "h-[420px]"}
>
    <Link
      href="/collection"
      className="group relative block h-full overflow-hidden rounded-[32px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="
object-cover
transition-all
duration-700
group-hover:scale-105
group-hover:brightness-110
"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/80" />

      {/* Content */}

      <div className="absolute bottom-0 left-0 w-full p-8 text-white">

        <p className="text-sm uppercase tracking-[0.3em] text-white/80">
          Collection
        </p>

        <h3 className="mt-2 font-serif text-4xl">
          {title}
        </h3>

        <p className="mt-3 max-w-sm text-white/80">
          {subtitle}
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm uppercase tracking-[0.2em]">

          Explore

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />

        </div>

      </div>
    </Link>
    </FadeUp>
  );
}
import {
  Activity,
  BarChart3,
  ClipboardCheck,
  Grid3x3,
  House,
  MessageCircle,
  ShoppingCart,
  Tag,
  Trophy,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type IconPlacement = {
  icon: LucideIcon;
  className: string;
};

type CoverTheme = {
  gradient: string;
  icons: IconPlacement[];
};

const covers: Record<string, CoverTheme> = {
  adar: {
    gradient: "from-orange-400 via-amber-300 to-teal-400",
    icons: [
      { icon: House, className: "top-[18%] left-[12%] size-14 -rotate-6" },
      { icon: Wrench, className: "bottom-[16%] right-[16%] size-11 rotate-12" },
      { icon: ClipboardCheck, className: "top-[22%] right-[20%] size-9 rotate-6" },
    ],
  },
  messenger: {
    gradient: "from-blue-500 via-indigo-400 to-purple-500",
    icons: [
      { icon: MessageCircle, className: "top-[20%] left-[16%] size-14 -rotate-6" },
      { icon: Activity, className: "bottom-[18%] right-[18%] size-11 rotate-3" },
      { icon: MessageCircle, className: "bottom-[22%] left-[26%] size-8 rotate-12 opacity-60" },
    ],
  },
  clickshop: {
    gradient: "from-emerald-400 via-green-400 to-pink-400",
    icons: [
      { icon: ShoppingCart, className: "top-[20%] left-[14%] size-14 -rotate-6" },
      { icon: Tag, className: "bottom-[18%] right-[18%] size-11 rotate-12" },
      { icon: Tag, className: "top-[24%] right-[22%] size-7 -rotate-12 opacity-60" },
    ],
  },
  "campaign-management": {
    gradient: "from-indigo-500 via-blue-400 to-cyan-400",
    icons: [
      { icon: Grid3x3, className: "top-[20%] left-[14%] size-14 -rotate-6" },
      { icon: Wallet, className: "bottom-[18%] right-[18%] size-11 rotate-6" },
    ],
  },
  "fantasy-sports-admin": {
    gradient: "from-slate-900 via-blue-950 to-amber-500",
    icons: [
      { icon: Trophy, className: "top-[18%] left-[14%] size-14 -rotate-6" },
      { icon: BarChart3, className: "bottom-[16%] right-[16%] size-11 rotate-3" },
      { icon: Activity, className: "top-[24%] right-[24%] size-8 rotate-12 opacity-60" },
    ],
  },
};

const fallback: CoverTheme = {
  gradient: "from-accent-a/70 via-accent-b/60 to-accent-c/50",
  icons: [],
};

export function ProjectCover({ slug, className }: { slug: string; className?: string }) {
  const theme = covers[slug] ?? fallback;

  return (
    <div className={className}>
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
      {theme.icons.map(({ icon: Icon, className: iconClassName }, i) => (
        <Icon
          key={i}
          aria-hidden
          strokeWidth={1.5}
          className={`absolute text-white/70 drop-shadow-sm ${iconClassName}`}
        />
      ))}
    </div>
  );
}

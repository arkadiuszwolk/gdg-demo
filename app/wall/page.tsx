"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  GraduationCap,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { CircularBadge } from "@/components/circural-badge";
import CorgiShadow from "@/components/corgi-shadow";
import SideText from "@/components/side-text";
import { motion } from "framer-motion";

const boxClass =
  "profile-box rounded-2xl bg-muted/60 p-3 backdrop-blur-md transition-colors hover:cursor-pointer hover:bg-muted/85";

const badges = [
  { label: "Frontend", filled: 8, total: 10 },
  { label: "Teamwork", filled: 9, total: 10 },
  { label: "UI Design", filled: 7, total: 10 },
  { label: "Leadership", filled: 6, total: 10 },
  { label: "Udział w wydarzeniach", filled: 8, total: 10 },
  { label: "Twórca produktu", filled: 1, total: 1 },
  { label: "Organizator spotkania", filled: 1, total: 1 },
  { label: "Współorganizacja wydarzenia", filled: 2, total: 3 },
];

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const tileClass =
  "rounded-2xl border border-black/5 bg-black/[0.04] p-3 backdrop-blur-md transition-colors hover:bg-black/[0.08] dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]";

function Tile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      variants={tileVariants}
      className={`${tileClass} ${className}`}
    >
      {children}
    </motion.article>
  );
}

export default function Page() {
  return (
    <>
      <CorgiShadow
        className="pointer-events-none fixed -bottom-20 left-1/2 -z-10 h-[95dvh] w-auto
                   -translate-x-1/2 -ml-[32vw]
                   text-neutral-500 dark:text-slate-800"
      />
      <main className="min-h-screen overflow-hidden px-4 py-5 text-foreground sm:px-8 sm:py-8 mt-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <section className="grid auto-rows-[minmax(190px,auto)] grid-cols-1 gap-3 md:grid-cols-12">
            {/* 1. Zdjęcie (Lewa strona, 5 kolumn, 2 wiersze) */}
            <article className={`${boxClass} md:col-span-5 md:row-span-2`}>
              <div className="relative flex h-full min-h-[390px] flex-col justify-between overflow-hidden rounded-xl bg-muted">
                <img
                  src="/profile-portrait.png"
                  alt="Portret Aleksandra Nowaka"
                  className="absolute inset-0 size-full object-cover object-center grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/75" />
                <div className="relative flex items-center justify-between p-4 text-white">
                  <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-emerald-300" />{" "}
                    Kandydat
                  </span>
                </div>
                <div className="relative p-5 text-white">
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/65">
                    Development
                  </p>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Aleksander Nowak
                  </h1>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                    <MapPin className="size-3.5" /> Kraków, PL
                  </p>
                </div>
              </div>
            </article>

            {/* 2. O mnie (Prawa strona - Góra, 7 kolumn) */}
            <Tile
              className={`${boxClass} flex flex-col justify-between md:col-span-7`}
            >
              <div className="flex items-start justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl bg-background/70">
                  <Sparkles className="size-4 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">o mnie</span>
              </div>
              <div>
                <p className="max-w-xl text-lg leading-snug tracking-tight sm:text-xl">
                  Buduję cyfrowe doświadczenia, które są proste, użyteczne i
                  mają swój charakter. Łączę intuicyjną funkcjonalność z
                  przemyślanym designem, dzięki czemu każdy projekt nie tylko
                  działa bez zarzutu, ale też zostaje w pamięci użytkowników.
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Zawsze szukam dobrych pytań, ciekawych zespołów i okazji do
                  nauczenia się czegoś nowego. Zależy mi na pracy przy
                  projektach z wizją, gdzie dociekanie „dlaczego” przynosi
                  realną wartość, a ciągły rozwój jest naturalną częścią
                  codzienności.
                </p>
              </div>
            </Tile>

            {/* 3. Edukacja (Prawa strona - Dół, 3 kolumny) */}
            <article className={`${boxClass} md:col-span-4`}>
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Edukacja
                </span>
                <GraduationCap className="size-4 text-muted-foreground" />
              </div>
              <p className="text-lg font-medium tracking-tight">
                Informatyka stosowana
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Wydział Elektryczny
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                2023 — obecnie
              </p>
            </article>

            {/* 5. Znajdź mnie (Prawa strona - Dół, 2 kolumny) */}
            <article
              className={`${boxClass} md:col-span-3 flex flex-col justify-between`}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Znajdź mnie
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-1.5">
                <a
                  href="#facebook"
                  className="group flex items-center justify-between rounded-lg bg-background/55 px-2.5 py-1.5 text-xs transition-colors hover:bg-background/90"
                >
                  <span className="font-medium">Facebook</span>
                  <span className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
                <a
                  href="#discord"
                  className="group flex items-center justify-between rounded-lg bg-background/55 px-2.5 py-1.5 text-xs transition-colors hover:bg-background/90"
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <MessageCircle className="size-3" /> Discord
                  </span>
                  <span className="text-muted-foreground">↗</span>
                </a>
                <a
                  href="#linkedin"
                  className="group flex items-center justify-between rounded-lg bg-background/55 px-2.5 py-1.5 text-xs transition-colors hover:bg-background/90"
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="text-[10px] font-semibold">in</span>{" "}
                    LinkedIn
                  </span>
                  <span className="text-muted-foreground">↗</span>
                </a>
              </div>
            </article>

            {/* 6. Odznaki (Pełna szerokość pod spodem - 12 kolumn) */}
            <article className={`${boxClass} md:col-span-12`}>
              <div className="mb-3 flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Odznaki
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Małe kroki, które składają się na większy progres.
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  04 kolekcje
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {badges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex min-h-44 flex-col items-center justify-center rounded-xl bg-background/45 py-4"
                  >
                    <CircularBadge
                      totalSegments={badge.total}
                      filledSegments={badge.filled}
                      size={112}
                      label={badge.label}
                    />
                    <p className="mt-2 text-sm font-medium">{badge.label}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}

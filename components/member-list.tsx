"use client";

import { motion, Variant } from "framer-motion";
import { cn } from "@/lib/utils";
import { CircularBadge } from "./circural-badge";
import Link from "next/link";

export type MemberStatus = "Przewodniczący" | "Członek" | "Kandydat";

export type Member = {
  id: string;
  name: string;
  status: MemberStatus | string;
  avatar?: string;
};

type MemberListProps = {
  members: Member[];
  className?: string;
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variant = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function MemberList({ members, className }: MemberListProps) {
  if (!members.length) return null;

  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className={cn("flex w-300 flex-col gap-2", className)}
      aria-label="Lista członków"
    >
      {members.map((member) => (
        <Link href="/wall">
          <motion.li
            key={member.id}
            variants={itemVariants}
            className="flex w-full items-center gap-3 rounded-2xl bg-muted/60 p-3 hover:bg-muted/85 hover:cursor-pointer backdrop-blur-md"
          >
            <div className="w-44 flex items-center gap-3">
              <div
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background text-sm font-semibold text-foreground shadow-sm"
                aria-hidden={member.avatar ? undefined : true}
              >
                {member.avatar ?? getInitials(member.name)}
              </div>
              <div className="flex min-w-0 shrink-0 flex-col">
                <span className="truncate text-sm font-medium text-foreground">
                  {member.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {member.status}
                </span>
              </div>
            </div>
            <div
              className="min-h-11 min-w-0 flex-1 rounded-xl flex items-center gap-2 justify-end"
              aria-hidden="true"
            >
              <CircularBadge totalSegments={4} filledSegments={3} size={60} />
              <CircularBadge totalSegments={8} filledSegments={5} size={60} />
              <CircularBadge totalSegments={6} filledSegments={2} size={60} />
              <CircularBadge totalSegments={2} filledSegments={1} size={60} />
              <CircularBadge totalSegments={12} filledSegments={8} size={60} />
              <div className="w-12 aspect-square rounded-full bg-neutral-400 text-neutral-50 flex justify-center items-center">
                +2
              </div>
            </div>
          </motion.li>
        </Link>
      ))}
    </motion.ul>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

"use client";

import { motion } from "framer-motion";

type CircularBadgeProps = {
  totalSegments: number;
  filledSegments: number;
  size?: number;
  label?: string;
};

export function CircularBadge({
  totalSegments,
  filledSegments,
  size = 156,
  label = "Programming",
}: CircularBadgeProps) {
  const safeTotalSegments = Math.max(1, Math.floor(totalSegments));
  const safeFilledSegments = Math.min(
    safeTotalSegments,
    Math.max(0, Math.floor(filledSegments)),
  );
  const segmentAngle = 360 / safeTotalSegments;
  const gapAngle = Math.min(8, segmentAngle * 0.24);
  const ringRadius = 45;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const segmentLength = ringCircumference * ((segmentAngle - gapAngle) / 360);

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${label}: ${safeFilledSegments} z ${safeTotalSegments} segmentów`}
    >
      <div className="absolute inset-[15%] overflow-hidden rounded-full bg-muted shadow-inner">
        <svg
          aria-hidden="true"
          className="h-full w-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="49"
            fill="currentColor"
            className="text-foreground"
          />
          <path
            d="M38 31 27 50l11 19M62 31l11 19-11 19M56 26 44 74"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-background"
          />
        </svg>
      </div>

      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        fill="none"
      >
        {Array.from({ length: safeTotalSegments }, (_, index) => {
          const isFilled = index < safeFilledSegments;
          const rotation = index * segmentAngle - 90;

          return (
            <motion.circle
              key={index}
              cx="50"
              cy="50"
              r={ringRadius}
              stroke={
                isFilled
                  ? "var(--foreground)"
                  : "color-mix(in oklch, var(--muted-foreground) 28%, transparent)"
              }
              strokeWidth="4"
              strokeLinecap="butt"
              strokeDasharray={`${segmentLength} ${ringCircumference}`}
              transform={`rotate(${rotation} 50 50)`}
              initial={{ opacity: 0, strokeDashoffset: segmentLength }}
              animate={{ opacity: isFilled ? 1 : 0.22, strokeDashoffset: 0 }}
              transition={{
                opacity: { duration: 1, delay: index * 0.045 },
                strokeDashoffset: {
                  duration: 0.45,
                  delay: index * 0.045,
                  ease: "easeOut",
                },
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

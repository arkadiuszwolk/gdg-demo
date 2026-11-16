"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SlidingTab = {
  value: string;
  label: string;
};

type SlidingTabsProps = {
  items: SlidingTab[];
  onValueChange: (value: string) => void;
  defaultValue?: string;
  value?: string;
  className?: string;
};

export function SlidingTabs({
  items,
  onValueChange,
  defaultValue,
  value: controlledValue,
  className,
}: SlidingTabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? items[0]?.value,
  );
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const selectedValue = controlledValue ?? uncontrolledValue;

  useEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      const tab = selectedValue ? tabRefs.current[selectedValue] : null;

      if (!container || !tab) return;

      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      setIndicator({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    };

    updateIndicator();
    const resizeObserver = new ResizeObserver(updateIndicator);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [selectedValue, items]);

  if (!items.length) return null;

  const handleSelect = (value: string) => {
    setUncontrolledValue(value);
    onValueChange(value);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-flex max-w-full rounded-full bg-muted p-1",
        className,
      )}
      role="tablist"
      aria-label="Zakładki"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-1 rounded-full bg-background shadow-sm transition-[left,width] duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />
      {items.map((item) => {
        const isSelected = item.value === selectedValue;

        return (
          <button
            key={item.value}
            ref={(element) => {
              tabRefs.current[item.value] = element;
            }}
            type="button"
            role="tab"
            aria-selected={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => handleSelect(item.value)}
            className={cn(
              "relative z-10 min-w-0 shrink-0 rounded-full px-5 py-2 text-sm font-medium text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isSelected && "text-foreground",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

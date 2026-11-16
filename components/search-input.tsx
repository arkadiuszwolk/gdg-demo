"use client";

import { FormEvent, useEffect, useState } from "react";

export type SearchInputProps = {
  onSearch?: (value: string) => void;
  words?: string[];
  placeholderPrefix?: string;
};

const defaultWords = ["ludzi", "odznaki", "oceny"];

export function SearchInput({
  onSearch,
  words = defaultWords,
  placeholderPrefix = "Wyszukaj ",
}: SearchInputProps) {
  const [value, setValue] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeWord = words[wordIndex] ?? "";
  const displayedWord = activeWord.slice(0, visibleCharacters);

  useEffect(() => {
    if (value || !words.length) return;

    const isWordComplete = visibleCharacters === activeWord.length;
    const isWordEmpty = visibleCharacters === 0;
    const delay = isWordComplete
      ? 1500
      : isWordEmpty && isDeleting
        ? 350
        : isDeleting
          ? 70
          : 115;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && !isWordComplete) {
        setVisibleCharacters((characters) => characters + 1);
      } else if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
      } else if (isDeleting && !isWordEmpty) {
        setVisibleCharacters((characters) => characters - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [activeWord, isDeleting, value, visibleCharacters, words]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedValue = value.trim();
    if (trimmedValue) onSearch?.(trimmedValue);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-12 w-70 md:w-140 items-center gap-3 rounded-full border border-border/70 bg-muted/60 px-5 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-ring/20"
    >
      <svg
        aria-hidden="true"
        className="size-5 shrink-0 text-muted-foreground"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" strokeLinecap="round" />
      </svg>

      <div className="relative min-w-0 flex-1 text-base">
        {!value && (
          <span
            className="pointer-events-none text-muted-foreground"
            aria-hidden="true"
          >
            {placeholderPrefix}
            <span className="text-foreground/70">{displayedWord}</span>
            <span className="ml-0.5 inline-block h-5 w-px translate-y-0.5 animate-pulse bg-foreground/50" />
          </span>
        )}
        <label htmlFor="search-input" className="sr-only">
          Wyszukaj
        </label>
        <input
          id="search-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="absolute inset-0 w-full bg-transparent text-foreground outline-none placeholder:text-transparent"
          autoComplete="off"
        />
      </div>

      {value.trim() && (
        <button
          type="submit"
          aria-label="Wyszukaj"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <svg
            aria-hidden="true"
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h13" strokeLinecap="round" />
            <path
              d="m13 6 6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </form>
  );
}

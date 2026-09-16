"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/now", label: "Now" },
  { href: "/projects", label: "Projects" },
];

const themeStorageKey = "jp-theme";

type Theme = "dark" | "light";

const getSystemTheme = (): Theme => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
};

const getStoredTheme = (): Theme | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return null;
};

const getInitialTheme = (): Theme => {
  if (typeof document !== "undefined") {
    const documentTheme = document.documentElement.dataset.theme;

    if (documentTheme === "dark" || documentTheme === "light") {
      return documentTheme;
    }
  }

  const storedTheme = getStoredTheme();

  if (storedTheme) {
    return storedTheme;
  }

  return getSystemTheme();
};

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" fill="currentColor" r="4" />
      <path
        d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23L5.46 5.46"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 14.31A8.5 8.5 0 1 1 9.69 4c-.06.46-.09.93-.09 1.41A8.5 8.5 0 0 0 18.09 14c.48 0 .95-.03 1.41-.09Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      const storedTheme = getStoredTheme();

      if (storedTheme) {
        return;
      }

      setTheme(mediaQuery.matches ? "dark" : "light");
    };

    handleSystemThemeChange();

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      window.localStorage.setItem(themeStorageKey, nextTheme);

      return nextTheme;
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border-subtle) bg-(--surface-header) backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-stretch justify-between border-x border-(--border-subtle)">
        <Link
          aria-label="Jordan Page home"
          className="flex items-center border-r border-(--border-subtle) px-5 font-mono text-xs font-semibold tracking-[0.18em] text-(--text-primary) transition-colors hover:bg-(--surface-hover) hover:text-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--focus-ring) sm:px-8"
          href="/"
        >
          JP
        </Link>

        <nav aria-label="Primary" className="flex items-stretch">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex items-center px-3 py-5 font-mono text-[0.65rem] font-medium uppercase tracking-wider transition-colors sm:px-5 ${
                  isActive
                    ? "bg-(--surface-active) text-(--accent) after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-(--accent) sm:after:inset-x-5"
                    : "text-(--text-secondary) hover:bg-(--surface-hover) hover:text-(--text-primary)"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--focus-ring)`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}

          <button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="group relative flex w-12 cursor-pointer items-center justify-center border-l border-(--border-subtle) bg-(--surface-active) text-(--text-secondary) transition-colors hover:bg-(--accent) hover:text-(--accent-contrast) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--focus-ring) sm:w-16"
            onClick={toggleTheme}
            type="button"
          >
            <span className="sr-only">
              {theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"}
            </span>
            <span
              className={`absolute transition-all duration-300 ${
                theme === "light"
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 -rotate-45 opacity-0"
              }`}
            >
              <SunIcon />
            </span>
            <span
              className={`absolute transition-all duration-300 ${
                theme === "dark"
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 rotate-45 opacity-0"
              }`}
            >
              <MoonIcon />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}

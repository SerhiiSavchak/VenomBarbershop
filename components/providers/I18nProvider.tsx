"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLang,
  messages,
  STORAGE_KEY,
  type Lang,
  type Messages,
} from "@/lib/i18n";
import { PageIntroProvider } from "@/components/providers/PageIntroProvider";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const LOCALE_SWITCH_MS = 160;

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(defaultLang);
  const [ready, setReady] = useState(false);
  const [localeSwitching, setLocaleSwitching] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "uk") {
        setLangState(stored);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const setLang = useCallback((next: Lang) => {
    if (next === lang) return;

    setLocaleSwitching(true);
    window.setTimeout(() => {
      setLangState(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      window.requestAnimationFrame(() => {
        setLocaleSwitching(false);
      });
    }, LOCALE_SWITCH_MS);
  }, [lang]);

  const t = useMemo(() => messages[lang], [lang]);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang === "uk" ? "uk" : "en";
    document.title = t.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.meta.description);
  }, [lang, ready, t.meta.description, t.meta.title]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <I18nContext.Provider value={value}>
      <PageIntroProvider>
        <div
          className="min-h-screen transition-[opacity,transform] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none"
          style={{
            opacity: localeSwitching ? 0.84 : 1,
            transform: localeSwitching ? "translateY(3px)" : "translateY(0)",
          }}
        >
          {children}
        </div>
      </PageIntroProvider>
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

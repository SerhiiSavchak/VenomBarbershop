"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PageLoader } from "@/components/PageLoader";

type PageIntroContextValue = {
  /** true после завершения exit-анимации PageLoader */
  introDone: boolean;
};

const PageIntroContext = createContext<PageIntroContextValue | null>(null);

export function PageIntroProvider({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  const value = useMemo(() => ({ introDone }), [introDone]);

  useEffect(() => {
    if (introDone) return;
    const id = window.setTimeout(() => setIntroDone(true), 8000);
    return () => window.clearTimeout(id);
  }, [introDone]);

  return (
    <PageIntroContext.Provider value={value}>
      <PageLoader onIntroComplete={() => setIntroDone(true)} />
      {children}
    </PageIntroContext.Provider>
  );
}

export function usePageIntro(): PageIntroContextValue {
  const ctx = useContext(PageIntroContext);
  if (!ctx) {
    throw new Error("usePageIntro must be used within PageIntroProvider");
  }
  return ctx;
}

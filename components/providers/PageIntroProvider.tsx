"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PageLoader } from "@/components/PageLoader";

type PageIntroContextValue = {
  /** true коли лоадер починає зникати — Hero стартує під оверлеєм */
  introDone: boolean;
};

const PageIntroContext = createContext<PageIntroContextValue | null>(null);

export function PageIntroProvider({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  const value = useMemo(() => ({ introDone }), [introDone]);

  useEffect(() => {
    if (introDone) return;
    const id = window.setTimeout(() => setIntroDone(true), 4500);
    return () => window.clearTimeout(id);
  }, [introDone]);

  return (
    <PageIntroContext.Provider value={value}>
      <PageLoader onIntroReady={() => setIntroDone(true)} />
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

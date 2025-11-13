"use client";

import { useEffect, useState } from "react";
import type { Lang } from "./i18n";

const STORAGE_KEY = "sms-lang";

export function usePreferredLanguage(defaultLang: Lang = "en") {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "bs") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (value: Lang) => {
    setLangState(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
  };

  const toggle = () => {
    setLang(lang === "en" ? "bs" : "en");
  };

  return { lang, setLang, toggle };
}

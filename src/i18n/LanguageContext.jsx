import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { dictionary } from "./dictionary"

const LanguageContext = createContext(null)

const readInitialLang = () => {
  if (typeof window === "undefined") return "en"
  const saved = window.localStorage.getItem("lang")
  if (saved === "en" || saved === "es") return saved
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en"
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(readInitialLang)

  const setLang = (next) => {
    if (next !== "en" && next !== "es") return
    setLangState(next)
    window.localStorage.setItem("lang", next)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    const copy = dictionary[lang].meta
    document.title = copy.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute("content", copy.description)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: dictionary[lang],
    }),
    [lang],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export const useI18n = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider")
  return ctx
}

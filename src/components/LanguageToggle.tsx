import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1.5 rounded-full text-xs font-bold border border-gold/40 bg-gold/10 text-gold hover:bg-gold/20 transition-colors"
      aria-label="Toggle language"
    >
      {lang === "en" ? "हिंदी" : "EN"}
    </button>
  );
};

export default LanguageToggle;

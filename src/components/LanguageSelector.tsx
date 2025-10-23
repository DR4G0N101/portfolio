import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="lang" className="text-sm font-medium">🌐 Language:</label>
      <select
        id="lang"
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-transparent border border-current rounded px-2 py-1 text-sm focus:outline-none"
      >
        <option value="en">🇬🇧 English</option>
        <option value="no">🇳🇴 Norsk</option>
        <option value="jp">🇯🇵 日本語</option>
        <option value="pl">🇵🇱 Polski</option>
      </select>
    </div>
  );
}

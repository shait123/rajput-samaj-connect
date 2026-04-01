import { Award, Calendar, Megaphone, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  const { t } = useLanguage();

  const categories = [
    { key: "all", labelKey: "cat.all", icon: LayoutGrid },
    { key: "achievements", labelKey: "cat.achievements", icon: Award },
    { key: "events", labelKey: "cat.events", icon: Calendar },
    { key: "announcements", labelKey: "cat.announcements", icon: Megaphone },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.key}
            onClick={() => onChange(cat.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              active === cat.key
                ? "royal-gradient text-primary-foreground royal-shadow"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Icon size={16} />
            {t(cat.labelKey)}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;

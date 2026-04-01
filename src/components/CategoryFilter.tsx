import { Award, Calendar, Megaphone, LayoutGrid } from "lucide-react";

const categories = [
  { key: "all", label: "All Posts", icon: LayoutGrid },
  { key: "achievements", label: "Achievements", icon: Award },
  { key: "events", label: "Events", icon: Calendar },
  { key: "announcements", label: "Announcements", icon: Megaphone },
];

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
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
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;

import { Calendar, Award, Megaphone } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export interface Post {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  category: "achievements" | "events" | "announcements";
  image?: string;
  author: string;
  authorHi: string;
  date: string;
  dateHi: string;
}

const categoryConfig = {
  achievements: { labelKey: "badge.achievements", icon: Award, color: "bg-gold text-accent-foreground" },
  events: { labelKey: "badge.events", icon: Calendar, color: "bg-primary text-primary-foreground" },
  announcements: { labelKey: "badge.announcements", icon: Megaphone, color: "bg-secondary text-secondary-foreground" },
};

const PostCard = ({ post }: { post: Post }) => {
  const { lang, t } = useLanguage();
  const cat = categoryConfig[post.category];
  const Icon = cat.icon;

  const title = lang === "hi" ? post.titleHi : post.title;
  const description = lang === "hi" ? post.descriptionHi : post.description;
  const author = lang === "hi" ? post.authorHi : post.author;
  const date = lang === "hi" ? post.dateHi : post.date;

  return (
    <Card className="overflow-hidden card-shadow hover:royal-shadow transition-shadow duration-300 animate-fade-in border-border">
      {post.image && (
        <div className="aspect-video overflow-hidden">
          <img src={post.image} alt={title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Badge className={cat.color}>
            <Icon size={12} className="mr-1" />
            {t(cat.labelKey)}
          </Badge>
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground leading-tight">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground justify-between">
        <span>{author}</span>
        <span>{date}</span>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

import { Calendar, Award, Megaphone } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Post {
  id: string;
  title: string;
  description: string;
  category: "achievements" | "events" | "announcements";
  image?: string;
  author: string;
  date: string;
}

const categoryConfig = {
  achievements: { label: "Achievement", icon: Award, color: "bg-gold text-accent-foreground" },
  events: { label: "Event", icon: Calendar, color: "bg-primary text-primary-foreground" },
  announcements: { label: "Announcement", icon: Megaphone, color: "bg-secondary text-secondary-foreground" },
};

const PostCard = ({ post }: { post: Post }) => {
  const cat = categoryConfig[post.category];
  const Icon = cat.icon;

  return (
    <Card className="overflow-hidden card-shadow hover:royal-shadow transition-shadow duration-300 animate-fade-in border-border">
      {post.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Badge className={cat.color}>
            <Icon size={12} className="mr-1" />
            {cat.label}
          </Badge>
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground leading-tight">
          {post.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm line-clamp-3">{post.description}</p>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground justify-between">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

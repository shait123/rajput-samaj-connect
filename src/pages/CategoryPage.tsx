import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { samplePosts } from "@/data/samplePosts";
import { useLanguage } from "@/contexts/LanguageContext";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const categoryKey = `cat.${slug}` as string;
  const title = t(categoryKey);
  const posts = useMemo(() => samplePosts.filter((p) => p.category === slug), [slug]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-1">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground mb-8">{t("catPage.browseAll")} {title.toLowerCase()} {t("catPage.fromCommunity")}</p>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-16">{t("catPage.noPosts")}</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;

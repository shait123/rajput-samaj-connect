import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { samplePosts } from "@/data/samplePosts";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return samplePosts.filter((post) => {
      const matchCategory = category === "all" || post.category === category;
      const matchSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [category, search]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={heroBanner}
          alt="Rajput Fort"
          width={1920}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/70 via-maroon/50 to-background" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
            Rajput Samaj
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 font-light">
            Celebrating heritage, honoring achievements, building community
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/submit">
              <Button className="royal-gradient text-primary-foreground font-semibold px-6 py-3 gold-border hover:opacity-90">
                Submit a Post
              </Button>
            </Link>
            <a href="#posts">
              <Button variant="outline" className="border-gold/50 text-primary-foreground bg-gold/10 hover:bg-gold/20 px-6 py-3">
                Browse Posts <ChevronRight size={16} className="ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <main id="posts" className="container mx-auto px-4 py-12 flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Latest Posts
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Community updates, achievements & events
            </p>
          </div>
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="mb-8">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <div key={post.id} style={{ animationDelay: `${i * 100}ms` }}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;

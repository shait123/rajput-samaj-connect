import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const SubmitPost = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [form, setForm] = useState({ title: "", description: "", category: "", image: null as File | null });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.category) {
      toast({ title: t("submit.fillFields"), variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: t("submit.success"), description: t("submit.successDesc") });
      setForm({ title: "", description: "", category: "", image: null });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-2xl mx-auto">
          <Card className="card-shadow border-border">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-foreground">{t("submit.title")}</CardTitle>
              <CardDescription>{t("submit.desc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">{t("submit.postTitle")}</Label>
                  <Input id="title" placeholder={t("submit.postTitlePlaceholder")} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">{t("submit.category")}</Label>
                  <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                    <SelectTrigger><SelectValue placeholder={t("submit.selectCategory")} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="achievements">{t("badge.achievements")}</SelectItem>
                      <SelectItem value="events">{t("badge.events")}</SelectItem>
                      <SelectItem value="announcements">{t("badge.announcements")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">{t("submit.description")}</Label>
                  <Textarea id="description" placeholder={t("submit.descPlaceholder")} rows={6} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">{t("submit.image")}</Label>
                  <Input id="image" type="file" accept="image/*" onChange={(e) => setForm({ ...form, image: e.target.files?.[0] || null })} />
                </div>

                <Button type="submit" disabled={submitting} className="w-full royal-gradient text-primary-foreground font-semibold gold-border hover:opacity-90">
                  {submitting ? t("submit.submitting") : t("submit.submitBtn")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmitPost;

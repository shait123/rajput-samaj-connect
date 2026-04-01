import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t("contact.sent"), description: t("contact.sentDesc") });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-1">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-2">{t("contact.title")}</h1>
        <p className="text-muted-foreground text-center mb-12">{t("contact.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="card-shadow border-border">
            <CardHeader>
              <CardTitle className="font-heading text-xl">{t("contact.sendMessage")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input id="name" placeholder={t("contact.namePlaceholder")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="msg">{t("contact.message")}</Label>
                  <Textarea id="msg" placeholder={t("contact.messagePlaceholder")} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <Button type="submit" className="w-full royal-gradient text-primary-foreground font-semibold gold-border hover:opacity-90">
                  {t("contact.sendBtn")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {[
              { icon: Mail, label: t("contact.emailLabel"), value: "info@rajputsamaj.org" },
              { icon: Phone, label: t("contact.phoneLabel"), value: "+91 98765 43210" },
              { icon: MapPin, label: t("contact.addressLabel"), value: "Rajput Bhawan, Jaipur, Rajasthan, India" },
            ].map((item) => (
              <Card key={item.label} className="card-shadow border-border">
                <CardContent className="flex items-center gap-4 py-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

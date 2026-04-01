import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", hi: "होम" },
  "nav.achievements": { en: "Achievements", hi: "उपलब्धियाँ" },
  "nav.events": { en: "Events", hi: "कार्यक्रम" },
  "nav.announcements": { en: "Announcements", hi: "सूचनाएँ" },
  "nav.submitPost": { en: "Submit Post", hi: "पोस्ट भेजें" },
  "nav.contact": { en: "Contact", hi: "संपर्क" },

  // Hero
  "hero.title": { en: "Rajput Samaj", hi: "राजपूत समाज" },
  "hero.subtitle": { en: "Celebrating heritage, honoring achievements, building community", hi: "विरासत का उत्सव, उपलब्धियों का सम्मान, समुदाय का निर्माण" },
  "hero.submit": { en: "Submit a Post", hi: "पोस्ट भेजें" },
  "hero.browse": { en: "Browse Posts", hi: "पोस्ट देखें" },

  // Posts section
  "posts.latest": { en: "Latest Posts", hi: "नवीनतम पोस्ट" },
  "posts.subtitle": { en: "Community updates, achievements & events", hi: "समुदाय अपडेट, उपलब्धियाँ और कार्यक्रम" },
  "posts.noResults": { en: "No posts found matching your criteria.", hi: "आपके मानदंडों से मेल खाने वाली कोई पोस्ट नहीं मिली।" },

  // Categories
  "cat.all": { en: "All Posts", hi: "सभी पोस्ट" },
  "cat.achievements": { en: "Achievements", hi: "उपलब्धियाँ" },
  "cat.events": { en: "Events", hi: "कार्यक्रम" },
  "cat.announcements": { en: "Announcements", hi: "सूचनाएँ" },

  // Badge labels
  "badge.achievements": { en: "Achievement", hi: "उपलब्धि" },
  "badge.events": { en: "Event", hi: "कार्यक्रम" },
  "badge.announcements": { en: "Announcement", hi: "सूचना" },

  // Search
  "search.placeholder": { en: "Search posts...", hi: "पोस्ट खोजें..." },

  // Submit Post page
  "submit.title": { en: "Submit a Post", hi: "पोस्ट भेजें" },
  "submit.desc": { en: "Share achievements, events, or announcements with the community. Posts require admin approval.", hi: "समुदाय के साथ उपलब्धियाँ, कार्यक्रम या सूचनाएँ साझा करें। पोस्ट को व्यवस्थापक की स्वीकृति आवश्यक है।" },
  "submit.postTitle": { en: "Title *", hi: "शीर्षक *" },
  "submit.postTitlePlaceholder": { en: "Enter post title", hi: "पोस्ट शीर्षक दर्ज करें" },
  "submit.category": { en: "Category *", hi: "श्रेणी *" },
  "submit.selectCategory": { en: "Select category", hi: "श्रेणी चुनें" },
  "submit.description": { en: "Description *", hi: "विवरण *" },
  "submit.descPlaceholder": { en: "Write your post details...", hi: "अपनी पोस्ट का विवरण लिखें..." },
  "submit.image": { en: "Image (optional)", hi: "छवि (वैकल्पिक)" },
  "submit.submitting": { en: "Submitting...", hi: "भेजा जा रहा है..." },
  "submit.submitBtn": { en: "Submit for Approval", hi: "स्वीकृति के लिए भेजें" },
  "submit.fillFields": { en: "Please fill all required fields", hi: "कृपया सभी आवश्यक फ़ील्ड भरें" },
  "submit.success": { en: "Post submitted!", hi: "पोस्ट भेज दी गई!" },
  "submit.successDesc": { en: "Your post will be visible after admin approval.", hi: "आपकी पोस्ट व्यवस्थापक की स्वीकृति के बाद दिखाई देगी।" },

  // Contact page
  "contact.title": { en: "Contact Us", hi: "संपर्क करें" },
  "contact.subtitle": { en: "Get in touch with the Rajput Samaj team", hi: "राजपूत समाज टीम से संपर्क करें" },
  "contact.sendMessage": { en: "Send a Message", hi: "संदेश भेजें" },
  "contact.name": { en: "Name", hi: "नाम" },
  "contact.namePlaceholder": { en: "Your name", hi: "आपका नाम" },
  "contact.email": { en: "Email", hi: "ईमेल" },
  "contact.message": { en: "Message", hi: "संदेश" },
  "contact.messagePlaceholder": { en: "Your message...", hi: "आपका संदेश..." },
  "contact.sendBtn": { en: "Send Message", hi: "संदेश भेजें" },
  "contact.sent": { en: "Message sent!", hi: "संदेश भेज दिया गया!" },
  "contact.sentDesc": { en: "We'll get back to you soon.", hi: "हम जल्द ही आपसे संपर्क करेंगे।" },
  "contact.emailLabel": { en: "Email", hi: "ईमेल" },
  "contact.phoneLabel": { en: "Phone", hi: "फ़ोन" },
  "contact.addressLabel": { en: "Address", hi: "पता" },

  // Footer
  "footer.description": { en: "A community platform celebrating the pride, heritage, and achievements of the Rajput community. United in tradition, growing with progress.", hi: "राजपूत समुदाय के गौरव, विरासत और उपलब्धियों का जश्न मनाने वाला एक सामुदायिक मंच। परंपरा में एकजुट, प्रगति के साथ आगे बढ़ रहे हैं।" },
  "footer.quickLinks": { en: "Quick Links", hi: "त्वरित लिंक" },
  "footer.contactUs": { en: "Contact Us", hi: "संपर्क करें" },
  "footer.rights": { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },

  // Category page
  "catPage.browseAll": { en: "Browse all", hi: "सभी देखें" },
  "catPage.fromCommunity": { en: "from the community", hi: "समुदाय से" },
  "catPage.noPosts": { en: "No posts in this category yet.", hi: "इस श्रेणी में अभी कोई पोस्ट नहीं है।" },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "hi" : "en"));

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

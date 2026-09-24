import {
  Cross, Users2, Heart, Sparkles, BookOpen, HeartHandshake, Mail, Send, CalendarDays, Smile, Megaphone,
} from "lucide-react";

const ICONS = {
  Cross, Users2, Heart, Sparkles, BookOpen, HeartHandshake, Mail, Send, CalendarDays, Smile, Megaphone,
};

export function CampaignIcon({ name, className }) {
  const Icon = ICONS[name] ?? Mail;
  return <Icon className={className} />;
}

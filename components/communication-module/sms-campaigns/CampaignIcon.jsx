import {
  Cross, Gift, MessageCircle, Megaphone, BookOpen, CalendarDays, Smile, Send,
} from "lucide-react";

const ICONS = {
  Cross, Gift, MessageCircle, Megaphone, BookOpen, CalendarDays, Smile, Send,
};

export function CampaignIcon({ name, className }) {
  const Icon = ICONS[name] ?? MessageCircle;
  return <Icon className={className} />;
}

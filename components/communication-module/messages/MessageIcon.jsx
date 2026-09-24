import { Mail, MessageSquareText, Bell, Inbox, Send, Clock, FileText, Archive, Users2 } from "lucide-react";

const ICONS = {
  Mail, MessageSquareText, Bell, Inbox, Send, Clock, FileText, Archive, Users2,
};

export function MessageIcon({ name, className }) {
  const Icon = ICONS[name] ?? Mail;
  return <Icon className={className} />;
}

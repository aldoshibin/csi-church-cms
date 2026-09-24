import { Mail, MessageSquare } from "lucide-react";

export function TemplateIcon({ type, className }) {
  const Icon = type === "SMS" ? MessageSquare : Mail;
  return <Icon className={className} />;
}

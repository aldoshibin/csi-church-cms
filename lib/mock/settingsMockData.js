// Settings — a new top-level module's landing page (route: /settings).
// A static grid of 16 setting categories, each linking out to its own
// (not-yet-mocked) settings sub-page. Hrefs point at plausible future
// routes under /settings/<slug>, matching how other modules' nav links
// and quick actions have pointed at routes ahead of their pages existing.

export const SETTINGS_CATEGORIES_MOCK = [
  { key: "general", icon: "Settings", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "General Settings", description: "Manage basic system settings like church details, address, contact information and timezone.", href: "/settings/general" },
  { key: "users", icon: "Users2", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", title: "User Management", description: "Manage administrators, staff access, roles and permissions for system users.", href: "/settings/users" },
  { key: "roles", icon: "ShieldCheck", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", title: "Roles & Permissions", description: "Create roles and manage permissions for different modules and features.", href: "/settings/roles-permissions" },
  { key: "preferences", icon: "SlidersHorizontal", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", title: "System Preferences", description: "Configure system preferences including date format, language and other preferences.", href: "/settings/preferences" },
  { key: "notifications", icon: "Bell", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", title: "Notification Settings", description: "Configure email, SMS and in-app notification preferences and reminders.", href: "/settings/notifications" },
  { key: "email", icon: "Mail", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "Email Settings", description: "Configure outgoing email settings, SMTP configuration and email templates.", href: "/settings/email" },
  { key: "sms", icon: "MessageSquare", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", title: "SMS Settings", description: "Configure SMS gateway, sender ID and SMS template settings.", href: "/settings/sms" },
  { key: "payment", icon: "CreditCard", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", title: "Payment Settings", description: "Manage payment gateways, currency settings and transaction preferences.", href: "/settings/payment" },
  { key: "backup", icon: "CloudUpload", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "Backup & Restore", description: "Backup system data and restore from previous backups.", href: "/settings/backup-restore" },
  { key: "security", icon: "Shield", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", title: "Security Settings", description: "Manage password policies, two-factor authentication and login security settings.", href: "/settings/security" },
  { key: "data-import", icon: "Upload", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", title: "Data Import", description: "Import members, donations, and other data from CSV/Excel files.", href: "/settings/data-import" },
  { key: "data-export", icon: "Download", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", title: "Data Export", description: "Export members, reports and other data in CSV/Excel/PDF formats.", href: "/settings/data-export" },
  { key: "integrations", icon: "Puzzle", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", title: "Integration Settings", description: "Manage third-party integrations such as payment gateways, email services and more.", href: "/settings/integrations" },
  { key: "audit-logs", icon: "FileText", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", title: "Audit Logs", description: "View system activity logs and changes made by users.", href: "/settings/audit-logs" },
  { key: "billing", icon: "CreditCard", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", title: "Subscription & Billing", description: "Manage subscription plan, billing details and payment history.", href: "/settings/billing" },
  { key: "about", icon: "Info", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", title: "About System", description: "View system information, version details and license information.", href: "/settings/about" },
];

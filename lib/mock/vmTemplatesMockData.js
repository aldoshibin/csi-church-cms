export const TEMPLATE_TYPE_OPTIONS = ["Email Template", "SMS Template"];

export const TEMPLATE_CATEGORY_OPTIONS = [
  "Invitation", "Reminder", "Welcome", "Announcement", "Greetings", "Prayer", "Update", "Thank You", "Alert", "Appreciation",
];

export const TEMPLATE_CATEGORY_VARIANT = {
  Invitation: "success",
  Reminder: "info",
  Welcome: "accent",
  Announcement: "warning",
  Greetings: "danger",
  Prayer: "default",
  Update: "info",
  "Thank You": "success",
  Alert: "danger",
  Appreciation: "warning",
};

export const TEMPLATE_STATUS_OPTIONS = ["Active", "Inactive"];

export const TEMPLATE_VARIABLE_TOKENS = [
  { token: "{First Name}", label: "Recipient's first name" },
  { token: "{Last Name}", label: "Recipient's last name" },
  { token: "{Church Name}", label: "Church name" },
  { token: "{Event Name}", label: "Event name" },
  { token: "{Date}", label: "Event date" },
  { token: "{Time}", label: "Event time" },
  { token: "{Location}", label: "Custom location" },
];

export const TEMPLATE_CATEGORIES_SIDEBAR_MOCK = [
  { label: "Invitation", count: 10 },
  { label: "Reminder", count: 8 },
  { label: "Welcome", count: 6 },
  { label: "Announcement", count: 6 },
  { label: "Greetings", count: 7 },
];

const TEMPLATES_SEED = [
  {
    id: "TPL-001", title: "Sunday Service Invitation", type: "Email", category: "Invitation",
    content: "Dear {First Name}, You are warmly invited to join us for our Sunday Service on {Service Date}...",
    status: "Active", updatedOn: "2026-05-24",
  },
  {
    id: "TPL-002", title: "Event Reminder", type: "SMS", category: "Reminder",
    content: "Hi {First Name}, This is a reminder about {Event Name} on {Date} at {Time}...",
    status: "Active", updatedOn: "2026-05-23",
  },
  {
    id: "TPL-003", title: "New Member Welcome", type: "Email", category: "Welcome",
    content: "Welcome to St. John's Church, {First Name}! We are so glad to have you with us in our church family...",
    status: "Active", updatedOn: "2026-05-22",
  },
  {
    id: "TPL-004", title: "General Announcement", type: "SMS", category: "Announcement",
    content: "Dear {First Name}, We have an important announcement for all members. Please check...",
    status: "Active", updatedOn: "2026-05-21",
  },
  {
    id: "TPL-005", title: "Birthday Wishes", type: "SMS", category: "Greetings",
    content: "Happy Birthday {First Name}! May God bless you with good health, joy and peace on your special day.",
    status: "Active", updatedOn: "2026-05-20",
  },
  {
    id: "TPL-006", title: "Prayer Request", type: "Email", category: "Prayer",
    content: "Dear {First Name}, We invite you to join us in prayer for {Prayer Request}. Your prayers...",
    status: "Active", updatedOn: "2026-05-19",
  },
  {
    id: "TPL-007", title: "Bible Study Invite", type: "SMS", category: "Invitation",
    content: "Hi {First Name}, You are invited to our Bible Study on {Date} at {Time}. Let's grow together...",
    status: "Active", updatedOn: "2026-05-18",
  },
  {
    id: "TPL-008", title: "Ministry Update", type: "Email", category: "Update",
    content: "Dear {First Name}, Here's the latest update from our {Ministry Name} ministry...",
    status: "Active", updatedOn: "2026-05-17",
  },
  {
    id: "TPL-009", title: "Thank You Message", type: "Email", category: "Thank You",
    content: "Thank you, {First Name}, for your generous support and contribution to our church. God bless you!",
    status: "Active", updatedOn: "2026-05-16",
  },
  {
    id: "TPL-010", title: "Service Cancelled Alert", type: "SMS", category: "Alert",
    content: "Hi {First Name}, Please note that {Service Name} on {Date} has been cancelled. Sorry...",
    status: "Active", updatedOn: "2026-05-15",
  },
  {
    id: "TPL-011", title: "Anniversary Greetings", type: "SMS", category: "Greetings",
    content: "Happy Anniversary {First Name}! Wishing you a blessed and joyful anniversary. God bless your journey.",
    status: "Active", updatedOn: "2026-05-14",
  },
  {
    id: "TPL-012", title: "Volunteer Appreciation", type: "Email", category: "Appreciation",
    content: "Dear {First Name}, Thank you for your dedicated service as a volunteer. Your contribution...",
    status: "Active", updatedOn: "2026-05-13",
  },
];

/** Pad the seed list out to 48 entries to match "Showing 1 to 12 of 48 templates". */
export const TEMPLATES_LIST_MOCK = Array.from({ length: 48 }, (_, i) => {
  const seed = TEMPLATES_SEED[i % TEMPLATES_SEED.length];
  if (i < TEMPLATES_SEED.length) return seed;
  return { ...seed, id: `TPL-${String(i + 1).padStart(3, "0")}` };
});

export const NEW_TEMPLATE_DEFAULTS = {
  templateName: "",
  templateType: "email",
  category: "",
  purpose: "",
  description: "",
  variables: TEMPLATE_VARIABLE_TOKENS.map((v) => v.token),
  subject: "",
  content: "",
  status: "active",
  shareWith: "onlyMe",
};

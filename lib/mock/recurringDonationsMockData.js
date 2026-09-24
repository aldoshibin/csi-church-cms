export const RD_STATUS_OPTIONS = ["Active", "Paused", "Cancelled"];
export const RD_FUND_OPTIONS = [
  "General Fund", "Building Fund", "Mission Fund", "Youth Ministry", "Thanksgiving",
  "Women's Fellowship", "Children's Ministry", "Medical Aid",
];
export const RD_FREQUENCY_OPTIONS = ["Monthly", "Quarterly", "Yearly"];
export const RD_PAYMENT_METHOD_OPTIONS = ["Card", "UPI", "Net Banking"];

export const RD_STATUS_VARIANT = {
  Active: "success",
  Paused: "warning",
  Cancelled: "danger",
};

const SUBSCRIPTIONS_SEED = [
  { id: "SUB-000124", donor: "John Samuel", email: "john.samuel@gmail.com", phone: "+91 98765 43210", initials: "JS", fund: "Sunday Offering", purpose: "General Fund", amount: 1200, frequency: "Monthly", nextPayment: "2025-06-18", status: "Active", startDate: "2025-05-18", lastPayment: "2025-05-18", totalPayments: 1, totalCollected: 1200, paymentMethod: "VISA", cardLast4: "4242", billingAddress: "12, New Street, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "" },
  { id: "SUB-000125", donor: "Anita Joseph", email: "anita.joseph@gmail.com", phone: "+91 98765 43211", initials: "AJ", fund: "Building Fund", purpose: "Building Fund", amount: 2000, frequency: "Monthly", nextPayment: "2025-06-18", status: "Active", startDate: "2025-01-18", lastPayment: "2025-05-18", totalPayments: 5, totalCollected: 10000, paymentMethod: "MasterCard", cardLast4: "5588", billingAddress: "45, Church Road, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "" },
  { id: "SUB-000126", donor: "Peter Thomas", email: "peter.thomas@gmail.com", phone: "+91 98765 43212", initials: "PT", fund: "Mission Fund", purpose: "Mission Fund", amount: 500, frequency: "Monthly", nextPayment: "2025-06-18", status: "Active", startDate: "2025-02-18", lastPayment: "2025-05-18", totalPayments: 4, totalCollected: 2000, paymentMethod: "UPI", cardLast4: "", billingAddress: "8, Lake View, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "" },
  { id: "SUB-000127", donor: "Sharon Matthew", email: "sharon.m@gmail.com", phone: "+91 98765 43213", initials: "SM", fund: "Youth Ministry", purpose: "Youth Ministry", amount: 750, frequency: "Monthly", nextPayment: "2025-06-17", status: "Paused", startDate: "2025-04-17", lastPayment: "2025-05-17", totalPayments: 2, totalCollected: 1500, paymentMethod: "VISA", cardLast4: "1122", billingAddress: "22, Hill Street, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "Paused by donor request." },
  { id: "SUB-000128", donor: "David Arul", email: "david.arul@gmail.com", phone: "+91 98765 43214", initials: "DA", fund: "Children's Ministry", purpose: "Children's Ministry", amount: 1000, frequency: "Monthly", nextPayment: "2025-06-17", status: "Active", startDate: "2025-03-17", lastPayment: "2025-05-17", totalPayments: 3, totalCollected: 3000, paymentMethod: "Net Banking", cardLast4: "", billingAddress: "3, Market Street, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "" },
  { id: "SUB-000129", donor: "Rachel Lewis", email: "rachel.l@gmail.com", phone: "+91 98765 43215", initials: "RL", fund: "Women's Fellowship", purpose: "Women's Fellowship", amount: 600, frequency: "Monthly", nextPayment: "2025-06-16", status: "Active", startDate: "2025-04-16", lastPayment: "2025-05-16", totalPayments: 2, totalCollected: 1200, paymentMethod: "UPI", cardLast4: "", billingAddress: "9, Garden Road, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "" },
  { id: "SUB-000130", donor: "Kevin Babu", email: "kevin.babu@gmail.com", phone: "+91 98765 43216", initials: "KB", fund: "General Fund", purpose: "General Fund", amount: 2500, frequency: "Monthly", nextPayment: "2025-06-16", status: "Cancelled", startDate: "2025-01-16", lastPayment: "2025-04-16", totalPayments: 4, totalCollected: 10000, paymentMethod: "MasterCard", cardLast4: "7788", billingAddress: "17, Temple Street, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "Cancelled - moving to a different parish." },
  { id: "SUB-000131", donor: "Neha Mathew", email: "neha.mathew@gmail.com", phone: "+91 98765 43217", initials: "NM", fund: "Thanksgiving", purpose: "General Fund", amount: 1800, frequency: "Monthly", nextPayment: "2025-06-15", status: "Active", startDate: "2025-03-15", lastPayment: "2025-05-15", totalPayments: 3, totalCollected: 5400, paymentMethod: "VISA", cardLast4: "3344", billingAddress: "31, Beach Road, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "" },
  { id: "SUB-000132", donor: "Grace Paul", email: "grace.paul@gmail.com", phone: "+91 98765 43218", initials: "GP", fund: "Medical Aid Fund", purpose: "Medical Aid", amount: 300, frequency: "Monthly", nextPayment: "2025-06-15", status: "Paused", startDate: "2025-05-15", lastPayment: "2025-05-15", totalPayments: 1, totalCollected: 300, paymentMethod: "UPI", cardLast4: "", billingAddress: "5, Station Road, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "Paused - temporary financial hardship." },
  { id: "SUB-000133", donor: "Rev. Michael", email: "michael.priest@gmail.com", phone: "+91 98765 43219", initials: "RM", fund: "General Fund", purpose: "General Fund", amount: 5000, frequency: "Monthly", nextPayment: "2025-06-14", status: "Active", startDate: "2024-12-14", lastPayment: "2025-05-14", totalPayments: 6, totalCollected: 30000, paymentMethod: "VISA", cardLast4: "9012", billingAddress: "1, Church Compound, Nagercoil, Kanyakumari - 629001, Tamil Nadu, India", notes: "" },
];

/** Pad the seed list out to 67 entries to match "Showing 1 to 10 of 67 subscriptions". */
export const SUBSCRIPTIONS_MOCK = Array.from({ length: 67 }, (_, i) => {
  const seed = SUBSCRIPTIONS_SEED[i % SUBSCRIPTIONS_SEED.length];
  if (i < SUBSCRIPTIONS_SEED.length) return seed;
  return { ...seed, id: `SUB-${String(124 + i).padStart(6, "0")}` };
});

export const RD_SUMMARY_MOCK = {
  totalRecurringAmount: 379850,
  totalCollected: 312450,
  totalFailedPayments: 12600,
  successRate: 92.26,
};

export const RD_STATUS_BREAKDOWN_MOCK = [
  { label: "Active", count: 59, pct: 88.1, color: "#16A34A" },
  { label: "Paused", count: 5, pct: 7.5, color: "#F59E0B" },
  { label: "Cancelled", count: 3, pct: 4.5, color: "#DC2626" },
];

export const RD_FREQUENCY_BREAKDOWN_MOCK = [
  { label: "Monthly", count: 52, pct: 77.6 },
  { label: "Quarterly", count: 10, pct: 14.9 },
  { label: "Yearly", count: 5, pct: 7.5 },
];

export const NEW_SUBSCRIPTION_DEFAULTS = {
  donor: "",
  email: "",
  countryCode: "+91",
  phone: "",
  fundAccount: "",
  purpose: "",
  amount: "",
  frequency: "",
  startingFrom: "",
  paymentMethod: "Card",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  nameOnCard: "",
  saveCard: false,
  notes: "",
};

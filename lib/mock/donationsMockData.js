export const DONATION_PAYMENT_METHOD_OPTIONS = ["UPI", "Credit Card", "Debit Card", "Net Banking"];
export const DONATION_FUND_OPTIONS = ["Sunday Offering", "Building Fund", "Mission Fund", "General Fund", "Thanksgiving", "Youth Ministry"];
export const DONATION_STATUS_OPTIONS = ["Successful", "Pending", "Refunded"];

export const DONATION_STATUS_VARIANT = {
  Successful: "success",
  Pending: "warning",
  Refunded: "danger",
};

export const DONATION_PAYMENT_METHOD_STYLE = {
  "UPI": { bg: "bg-success-50", color: "text-success-600" },
  "Credit Card": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Net Banking": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Debit Card": { bg: "bg-warning-50", color: "text-warning-600" },
};

const DONATIONS_SEED = [
  {
    id: "DON-0001", date: "2025-05-18", time: "10:30 AM", donor: "John Samuel", email: "john.samuel@gmail.com", phone: "+91 98765 43210", initials: "JS",
    fund: "Sunday Offering", paymentMethod: "UPI", amount: 1200, status: "Successful",
    transactionId: "UPI-512345678901", referenceId: "REF-000123", enteredBy: "John Samuel",
    remarks: "Online offering through UPI", fundAccount: "General Fund", category: "Offerings",
    paymentLink: "Sunday Offering Link", ipAddress: "192.168.1.10", device: "Windows 11 / Chrome 124.0.0.0",
  },
  {
    id: "DON-0002", date: "2025-05-18", time: "09:45 AM", donor: "Anita Joseph", email: "anita.joseph@gmail.com", phone: "+91 98765 43211", initials: "AJ",
    fund: "Building Fund", paymentMethod: "Credit Card", amount: 5000, status: "Successful",
    transactionId: "CC-778812345602", referenceId: "REF-000124", enteredBy: "Anita Joseph",
    remarks: "Contribution towards new building fund", fundAccount: "Building Fund", category: "Capital Fund",
    paymentLink: "Building Fund Link", ipAddress: "192.168.1.12", device: "macOS / Safari 17.4",
  },
  {
    id: "DON-0003", date: "2025-05-18", time: "09:20 AM", donor: "Peter Thomas", email: "peter.thomas@gmail.com", phone: "+91 98765 43212", initials: "PT",
    fund: "Mission Fund", paymentMethod: "Net Banking", amount: 2500, status: "Successful",
    transactionId: "NB-556677889900", referenceId: "REF-000125", enteredBy: "Peter Thomas",
    remarks: "Support for mission trip", fundAccount: "Mission Fund", category: "Missions",
    paymentLink: "Mission Fund Link", ipAddress: "192.168.1.14", device: "Windows 10 / Edge 124.0.0.0",
  },
  {
    id: "DON-0004", date: "2025-05-17", time: "08:15 PM", donor: "Rev. Michael", email: "michael.priest@gmail.com", phone: "+91 98765 43213", initials: "RM",
    fund: "General Fund", paymentMethod: "UPI", amount: 750, status: "Successful",
    transactionId: "UPI-512345678902", referenceId: "REF-000126", enteredBy: "Rev. Michael",
    remarks: "General fund contribution", fundAccount: "General Fund", category: "General",
    paymentLink: "General Fund Link", ipAddress: "192.168.1.10", device: "Android 14 / Chrome Mobile",
  },
  {
    id: "DON-0005", date: "2025-05-17", time: "06:40 PM", donor: "Sharon Matthew", email: "sharon.m@gmail.com", phone: "+91 98765 43214", initials: "SM",
    fund: "Thanksgiving", paymentMethod: "Debit Card", amount: 1800, status: "Successful",
    transactionId: "DC-445566778899", referenceId: "REF-000127", enteredBy: "Sharon Matthew",
    remarks: "Thanksgiving offering", fundAccount: "Thanksgiving Fund", category: "Offerings",
    paymentLink: "Thanksgiving Link", ipAddress: "192.168.1.18", device: "iOS 17 / Safari",
  },
  {
    id: "DON-0006", date: "2025-05-17", time: "05:10 PM", donor: "David Arul", email: "david.arul@gmail.com", phone: "+91 98765 43215", initials: "DA",
    fund: "Youth Ministry", paymentMethod: "Net Banking", amount: 1000, status: "Pending",
    transactionId: "NB-556677889901", referenceId: "REF-000128", enteredBy: "David Arul",
    remarks: "Youth camp contribution - awaiting bank confirmation", fundAccount: "Youth Ministry Fund", category: "Ministry",
    paymentLink: "Youth Ministry Link", ipAddress: "192.168.1.20", device: "Windows 11 / Firefox 126.0",
  },
  {
    id: "DON-0007", date: "2025-05-17", time: "08:50 AM", donor: "Rachel Lewis", email: "rachel.l@gmail.com", phone: "+91 98765 43216", initials: "RL",
    fund: "Sunday Offering", paymentMethod: "UPI", amount: 500, status: "Successful",
    transactionId: "UPI-512345678903", referenceId: "REF-000129", enteredBy: "Rachel Lewis",
    remarks: "Sunday offering", fundAccount: "General Fund", category: "Offerings",
    paymentLink: "Sunday Offering Link", ipAddress: "192.168.1.22", device: "Android 13 / Chrome Mobile",
  },
  {
    id: "DON-0008", date: "2025-05-16", time: "07:30 PM", donor: "Kevin Babu", email: "kevin.babu@gmail.com", phone: "+91 98765 43217", initials: "KB",
    fund: "Building Fund", paymentMethod: "Credit Card", amount: 10000, status: "Successful",
    transactionId: "CC-778812345603", referenceId: "REF-000130", enteredBy: "Kevin Babu",
    remarks: "Major gift towards building fund", fundAccount: "Building Fund", category: "Capital Fund",
    paymentLink: "Building Fund Link", ipAddress: "192.168.1.24", device: "macOS / Chrome 124.0.0.0",
  },
  {
    id: "DON-0009", date: "2025-05-16", time: "06:05 PM", donor: "Neha Mathew", email: "neha.mathew@gmail.com", phone: "+91 98765 43218", initials: "NM",
    fund: "Mission Fund", paymentMethod: "UPI", amount: 2000, status: "Refunded",
    transactionId: "UPI-512345678904", referenceId: "REF-000131", enteredBy: "Neha Mathew",
    remarks: "Refunded due to duplicate transaction", fundAccount: "Mission Fund", category: "Missions",
    paymentLink: "Mission Fund Link", ipAddress: "192.168.1.26", device: "iOS 17 / Safari",
  },
  {
    id: "DON-0010", date: "2025-05-15", time: "09:00 AM", donor: "Grace Paul", email: "grace.paul@gmail.com", phone: "+91 98765 43219", initials: "GP",
    fund: "General Fund", paymentMethod: "Net Banking", amount: 1250, status: "Successful",
    transactionId: "NB-556677889902", referenceId: "REF-000132", enteredBy: "Grace Paul",
    remarks: "General fund contribution", fundAccount: "General Fund", category: "General",
    paymentLink: "General Fund Link", ipAddress: "192.168.1.28", device: "Windows 11 / Chrome 124.0.0.0",
  },
];

/** Pad the seed list out to 326 entries to match "Showing 1 to 10 of 326 transactions". */
export const DONATIONS_MOCK = Array.from({ length: 326 }, (_, i) => {
  const seed = DONATIONS_SEED[i % DONATIONS_SEED.length];
  if (i < DONATIONS_SEED.length) return seed;
  const suffix = String(i + 1).padStart(4, "0");
  return { ...seed, id: `DON-${suffix}` };
});

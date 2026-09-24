export const PAYMENT_LINK_STATUS_OPTIONS = ["Active", "Expired", "Inactive"];
export const PAYMENT_LINK_FUND_OPTIONS = [
  "General Fund", "Building Fund", "Mission Fund", "Youth Ministry", "Thanksgiving",
  "Women's Fellowship", "Children's Ministry", "Medical Aid",
];

export const PAYMENT_LINK_STATUS_VARIANT = {
  Active: "success",
  Expired: "danger",
  Inactive: "default",
};

export const PAYMENT_LINKS_STATS_MOCK = {
  totalPaymentLinks: { value: 32, delta: "14.3%", trendUp: true },
  activeLinks: { value: 28, delta: "12.5%", trendUp: true },
  totalClicks: { value: 1256, delta: "18.6%", trendUp: true },
  totalAmountRaised: { value: 842650, delta: "16.8%", trendUp: true },
  conversionRate: { value: 28.6, delta: "3.2%", trendUp: true },
};

const PAYMENT_LINKS_SEED = [
  { id: 1, linkName: "Sunday Offering", fund: "General Fund", linkUrl: "pay.stjohnschurch.org/sunday-offering", shortLink: "pay.stjohnschurch.org/s/abc123", description: "This link is for general Sunday offering donations.", clicks: 356, amountRaised: 295927.5, status: "Active", createdOn: "2025-05-18", createdTime: "10:30 AM", createdBy: "John Samuel", lastUpdated: "2025-05-18, 10:30 AM", uniqueDonors: 185, conversionRate: 28.6 },
  { id: 2, linkName: "Building Fund", fund: "Building Fund", linkUrl: "pay.stjohnschurch.org/building-fund", shortLink: "pay.stjohnschurch.org/s/bld456", description: "Contributions towards the new building fund.", clicks: 245, amountRaised: 210662.5, status: "Active", createdOn: "2025-05-18", createdTime: "09:45 AM", createdBy: "Anita Joseph", lastUpdated: "2025-05-18, 09:45 AM", uniqueDonors: 132, conversionRate: 26.4 },
  { id: 3, linkName: "Mission Fund", fund: "Mission Fund", linkUrl: "pay.stjohnschurch.org/mission-fund", shortLink: "pay.stjohnschurch.org/s/msn789", description: "Support for ongoing mission trips and outreach.", clicks: 186, amountRaised: 126397.5, status: "Active", createdOn: "2025-05-18", createdTime: "09:20 AM", createdBy: "Peter Thomas", lastUpdated: "2025-05-18, 09:20 AM", uniqueDonors: 98, conversionRate: 25.3 },
  { id: 4, linkName: "Youth Ministry", fund: "Youth Ministry", linkUrl: "pay.stjohnschurch.org/youth-ministry", shortLink: "pay.stjohnschurch.org/s/yth321", description: "Fundraiser for the annual youth camp.", clicks: 98, amountRaised: 67412.5, status: "Active", createdOn: "2025-05-17", createdTime: "08:50 PM", createdBy: "David Arul", lastUpdated: "2025-05-17, 08:50 PM", uniqueDonors: 54, conversionRate: 22.1 },
  { id: 5, linkName: "Thanksgiving", fund: "Thanksgiving", linkUrl: "pay.stjohnschurch.org/thanksgiving", shortLink: "pay.stjohnschurch.org/s/tks654", description: "Thanksgiving offering collection link.", clicks: 132, amountRaised: 58985, status: "Active", createdOn: "2025-05-17", createdTime: "06:40 PM", createdBy: "Sharon Matthew", lastUpdated: "2025-05-17, 06:40 PM", uniqueDonors: 71, conversionRate: 24.8 },
  { id: 6, linkName: "Women's Fellowship", fund: "Women's Fellowship", linkUrl: "pay.stjohnschurch.org/womens-fellowship", shortLink: "pay.stjohnschurch.org/s/wmn987", description: "Fundraiser for the Women's Fellowship retreat.", clicks: 74, amountRaised: 42132.5, status: "Active", createdOn: "2025-05-16", createdTime: "03:15 PM", createdBy: "Rachel Lewis", lastUpdated: "2025-05-16, 03:15 PM", uniqueDonors: 40, conversionRate: 21.6 },
  { id: 7, linkName: "Children's Ministry", fund: "Children's Ministry", linkUrl: "pay.stjohnschurch.org/children-ministry", shortLink: "pay.stjohnschurch.org/s/chd147", description: "Support for Sunday school materials and events.", clicks: 53, amountRaised: 25650, status: "Active", createdOn: "2025-05-16", createdTime: "01:30 PM", createdBy: "Kevin Babu", lastUpdated: "2025-05-16, 01:30 PM", uniqueDonors: 29, conversionRate: 20.8 },
  { id: 8, linkName: "Easter Offering", fund: "General Fund", linkUrl: "pay.stjohnschurch.org/easter-offering", shortLink: "pay.stjohnschurch.org/s/est258", description: "Special Easter Sunday offering.", clicks: 64, amountRaised: 15820, status: "Expired", createdOn: "2025-04-05", createdTime: "09:00 AM", createdBy: "Rev. Michael", lastUpdated: "2025-04-05, 09:00 AM", uniqueDonors: 35, conversionRate: 18.4 },
  { id: 9, linkName: "Christmas Offering", fund: "General Fund", linkUrl: "pay.stjohnschurch.org/christmas-offering", shortLink: "pay.stjohnschurch.org/s/xms369", description: "Christmas season special offering.", clicks: 77, amountRaised: 18500, status: "Expired", createdOn: "2024-12-20", createdTime: "11:20 AM", createdBy: "John Samuel", lastUpdated: "2024-12-20, 11:20 AM", uniqueDonors: 42, conversionRate: 19.2 },
  { id: 10, linkName: "Medical Aid Fund", fund: "Medical Aid", linkUrl: "pay.stjohnschurch.org/medical-aid", shortLink: "pay.stjohnschurch.org/s/med741", description: "Emergency medical aid support fund.", clicks: 31, amountRaised: 11000, status: "Inactive", createdOn: "2025-05-10", createdTime: "04:10 PM", createdBy: "Neha Mathew", lastUpdated: "2025-05-10, 04:10 PM", uniqueDonors: 18, conversionRate: 16.1 },
];

/** Pad the seed list out to 32 entries to match "Showing 1 to 10 of 32 links". */
export const PAYMENT_LINKS_MOCK = Array.from({ length: 32 }, (_, i) => {
  const seed = PAYMENT_LINKS_SEED[i % PAYMENT_LINKS_SEED.length];
  if (i < PAYMENT_LINKS_SEED.length) return seed;
  return { ...seed, id: i + 1, linkName: `${seed.linkName} #${Math.floor(i / PAYMENT_LINKS_SEED.length) + 1}` };
});

export const CLICKS_AMOUNT_OVERVIEW_MOCK = [
  { label: "01 May", clicks: 120, amount: 25000 }, { label: "03 May", clicks: 180, amount: 38000 },
  { label: "05 May", clicks: 240, amount: 52000 }, { label: "07 May", clicks: 210, amount: 46000 },
  { label: "09 May", clicks: 320, amount: 68000 }, { label: "11 May", clicks: 280, amount: 60000 },
  { label: "13 May", clicks: 390, amount: 78000 }, { label: "15 May", clicks: 460, amount: 92000 },
  { label: "16 May", clicks: 520, amount: 71000 }, { label: "18 May", clicks: 600, amount: 84000 },
];

export const LINK_SUMMARY_MOCK = {
  activeLinks: 28,
  expiredLinks: 2,
  inactiveLinks: 2,
  totalLinksCreated: 32,
};

export const RECENT_LINK_ACTIVITY_MOCK = [
  { type: "created", label: "New link created", detail: "Youth Ministry", date: "18 May 2025, 10:15 AM" },
  { type: "expired", label: "Link expired", detail: "Easter Offering", date: "05 Apr 2025, 09:00 AM" },
  { type: "deactivated", label: "Link deactivated", detail: "Medical Aid Fund", date: "10 May 2025, 04:10 PM" },
  { type: "updated", label: "Link updated", detail: "Building Fund", date: "17 May 2025, 08:45 PM" },
];

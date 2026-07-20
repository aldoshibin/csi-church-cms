
export const BIRTHDAYS_ANNIVERSARIES_MOCK = {
  cards: {
    upcomingBirthdays: { value: 24, sublabel: "In Next 30 Days" },
    upcomingAnniversaries: { value: 11, sublabel: "In Next 30 Days" },
    totalBirthdaysThisYear: { value: 152, sublabel: "Till Date" },
    totalAnniversariesThisYear: { value: 73, sublabel: "Till Date" },
  },

  filters: {
    dateRange: "Upcoming 30 Days",
    location: "All Locations",
    ageGroup: "All",
    view: "Upcoming 30 Days",
  },

  todaysDate: "14 May 2025",

  // TODO(backend): members.Member already has date_of_birth — this list
  // is a narrower version of the Dashboard's birthdaysForMonth action,
  // filtered to "next 30 days" instead of "this calendar month", plus
  // age/gender/location/contact columns already present on Member.
  birthdays: [
    {
      id: 1, day: "15", month: "MAY", weekday: "THU", name: "Daniel Thomas", relation: "Son of Thomas",
      age: 65, gender: "Male", location: "Main Church", contact: "98765 43210", remarks: "—",
    },
    {
      id: 2, day: "16", month: "MAY", weekday: "FRI", name: "Aaron Joseph", relation: "Son of Joseph",
      age: 13, gender: "Male", location: "Main Church", contact: "91234 56789", remarks: "—",
    },
    {
      id: 3, day: "18", month: "MAY", weekday: "SUN", name: "Anna Grace", relation: "Daughter of Grace",
      age: 10, gender: "Female", location: "St. Peter's Chapel", contact: "99887 66554", remarks: "—",
    },
    {
      id: 4, day: "20", month: "MAY", weekday: "TUE", name: "George Samuel", relation: "Son of Samuel",
      age: 69, gender: "Male", location: "St. Peter's Chapel", contact: "93456 77890", remarks: "—",
    },
    {
      id: 5, day: "22", month: "MAY", weekday: "THU", name: "Sophia Mary", relation: "Daughter of Biju",
      age: 67, gender: "Female", location: "Main Church", contact: "95678 90123", remarks: "—",
    },

    {
      id: 6, day: "24", month: "MAY", weekday: "SAT", name: "Ruth Mathew", relation: "Daughter of Mathew",
      age: 34, gender: "Female", location: "St. Mary's Mission", contact: "97123 45678", remarks: "—",
    },
    {
      id: 7, day: "27", month: "MAY", weekday: "TUE", name: "Joseph Varghese", relation: "Son of Varghese",
      age: 41, gender: "Male", location: "Hill View Branch", contact: "96234 56789", remarks: "—",
    },
    {
      id: 8, day: "30", month: "MAY", weekday: "FRI", name: "Grace Abraham", relation: "Daughter of Abraham",
      age: 28, gender: "Female", location: "Main Church", contact: "94345 67890", remarks: "—",
    },
  ],


  anniversaries: [
    {
      id: 1, day: "20", month: "MAY", weekday: "TUE", names: "John & Mary Samuel",
      yearsMarried: 12, location: "Main Church", contact: "98765 12340", remarks: "—",
    },
    {
      id: 2, day: "22", month: "MAY", weekday: "THU", names: "David & Ruth Samuel",
      yearsMarried: 8, location: "St. Peter's Chapel", contact: "91234 09876", remarks: "—",
    },
    {
      id: 3, day: "24", month: "MAY", weekday: "SAT", names: "Daniel & Anna Samuel",
      yearsMarried: 5, location: "Main Church", contact: "99887 11223", remarks: "—",
    },
  ],
};

const GENDER_BADGE_CLASS = {
  Male: "bg-[#e4efff] text-[#2563eb]",
  Female: "bg-[#ffe4ef] text-[#f0447b]",
};

export function genderBadgeClass(gender) {
  return GENDER_BADGE_CLASS[gender] ?? "bg-surface-muted text-ink-muted";
}



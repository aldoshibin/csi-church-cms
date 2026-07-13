
export const BRANCH_CHURCH_OVERVIEW_MOCK = {
  dataAsOf: "23 May 2025",

  cards: {
    totalBranchChurches: { value: 12, sublabel: "Active Branches" },
    totalMembers: { value: 1248, sublabel: "Across all branches" },
    worshipServices: { value: 18, sublabel: "This Week (All Branches)" },
    ministriesGroups: { value: 32, sublabel: "Across all branches" },
    totalOfferings: { value: 345680, sublabel: "Across all branches" },
  },

  branchesByRegion: [
    { label: "North Region", count: 4, color: "#0E5C4E" },
    { label: "South Region", count: 3, color: "#3B5BDB" },
    { label: "East Region", count: 3, color: "#062B25" },
    { label: "West Region", count: 2, color: "#E8983A" },
  ],
  regionTotal: 12,


  mapPins: [
    { id: 1, top: "38%", left: "15%" },
    { id: 2, top: "20%", left: "44%" },
    { id: 3, top: "44%", left: "47%" },
    { id: 4, top: "60%", left: "25%" },
    { id: 5, top: "33%", left: "62%" },
    { id: 6, top: "30%", left: "75%" },
  ],

  membershipTrend: [
    { month: "Jun", members: 975 },
    { month: "Jul", members: 998 },
    { month: "Aug", members: 1042 },
    { month: "Sep", members: 1078 },
    { month: "Oct", members: 1105 },
    { month: "Nov", members: 1142 },
    { month: "Dec", members: 1168 },
    { month: "Jan", members: 1188 },
    { month: "Feb", members: 1205 },
    { month: "Mar", members: 1222 },
    { month: "Apr", members: 1238 },
    { month: "May", members: 1248 },
  ],

  branchSummary: [
    { label: "Active Branches", value: 12, icon: "church" },
    { label: "Inactive Branches", value: 0, icon: "x-circle" },
    { label: "Total Pastors", value: 9, icon: "user" },
    { label: "Total Catechists", value: 14, icon: "users" },
    { label: "Sunday Schools", value: 11, icon: "graduation-cap" },
  ],

  quickActions: ["Add New Branch Church", "Manage Branch Churches", "View Branch Reports", "Update Branch Details"],

  
  branches: [
    { id: 1, name: "St. Peter's Church", location: "Nagercoil", members: 142, worshipServices: 2, ministries: 5, offerings: 48250, status: "Active" },
    { id: 2, name: "Holy Trinity Church", location: "Maruthankuzhi", members: 118, worshipServices: 1, ministries: 4, offerings: 36800, status: "Active" },
    { id: 3, name: "Good Shepherd Church", location: "Kanyakumari", members: 312, worshipServices: 2, ministries: 6, offerings: 62400, status: "Active" },
    { id: 4, name: "CSI Bethel Church", location: "Marungoor", members: 198, worshipServices: 1, ministries: 3, offerings: 28900, status: "Active" },
    { id: 5, name: "Emmanuel Church", location: "Thovalai", members: 265, worshipServices: 2, ministries: 4, offerings: 41200, status: "Active" },
    { id: 6, name: "St. Andrew's Church", location: "Colachel", members: 96, worshipServices: 1, ministries: 2, offerings: 19500, status: "Active" },
    { id: 7, name: "Grace Memorial Church", location: "Eraniel", members: 87, worshipServices: 1, ministries: 3, offerings: 17200, status: "Active" },
    { id: 8, name: "St. Thomas Church", location: "Kuzhithurai", members: 154, worshipServices: 2, ministries: 4, offerings: 30100, status: "Active" },
    { id: 9, name: "Bethlehem Church", location: "Thuckalay", members: 73, worshipServices: 1, ministries: 2, offerings: 14800, status: "Active" },
    { id: 10, name: "CSI Zion Church", location: "Boothapandi", members: 61, worshipServices: 1, ministries: 2, offerings: 11900, status: "Active" },
    { id: 11, name: "St. John's Mission", location: "Thiruvattar", members: 44, worshipServices: 1, ministries: 1, offerings: 8600, status: "Active" },
    { id: 12, name: "Hill View Branch Church", location: "Painkulam", members: 28, worshipServices: 1, ministries: 1, offerings: 5400, status: "Active" },
  ],
};

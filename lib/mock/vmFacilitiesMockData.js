export const FACILITY_STATUS_OPTIONS = ["Active", "Under Maintenance", "Inactive"];
export const FACILITY_STATUS_VARIANT = { Active: "success", "Under Maintenance": "warning", Inactive: "default" };
export const FACILITY_LOCATION_OPTIONS = [
  "Church Campus, Ground Floor", "Church Campus, First Floor", "Church Campus, Outdoor",
  "Education Block, Ground Floor", "Education Block, Second Floor",
  "Worship Block, First Floor", "Service Block, Ground Floor",
];
export const FACILITY_CATEGORY_OPTIONS = ["Hall", "Room", "Outdoor Space", "Service Area"];
export const FACILITY_TYPE_OPTIONS = ["Main Hall", "Conference Room", "Open Ground", "Classroom", "Utility Room", "Parking"];
export const CANCELLATION_POLICY_OPTIONS = ["24 Hours Before Booking", "48 Hours Before Booking", "No Cancellation", "Custom"];

export const AMENITY_OPTIONS = [
  { key: "AC", icon: "Fan" },
  { key: "Sound System", icon: "Volume2" },
  { key: "Projector", icon: "MonitorPlay" },
  { key: "Podium", icon: "Mic2" },
  { key: "Chairs", icon: "Armchair" },
  { key: "Tables", icon: "Table2" },
  { key: "Whiteboard", icon: "PenSquare" },
  { key: "Stage", icon: "LayoutTemplate" },
  { key: "Lighting", icon: "Lightbulb" },
  { key: "Parking", icon: "ParkingCircle" },
  { key: "Kitchen Access", icon: "UtensilsCrossed" },
  { key: "Restroom", icon: "Bath" },
  { key: "Wi-Fi", icon: "Wifi" },
  { key: "Music Stand", icon: "Music2" },
  { key: "Bookshelves", icon: "Library" },
  { key: "Others", icon: "MoreHorizontal" },
];

export const FACILITY_STATUS_OVERVIEW_DONUT_MOCK = {
  total: 8,
  breakdown: [
    { label: "Active", count: 7, pct: 87.5, color: "#16A34A" },
    { label: "Under Maintenance", count: 1, pct: 12.5, color: "#F97316" },
    { label: "Inactive", count: 0, pct: 0, color: "#DC2626" },
  ],
};

const FACILITIES_SEED = [
  {
    id: "FAC-001", name: "Main Hall", location: "Church Campus, Ground Floor", capacityLabel: "300 People", capacityNumber: 300,
    amenities: ["AC", "Sound System", "Chairs", "Tables", "Projector"], status: "Active",
    category: "Hall", facilityType: "Main Hall", setupType: "Banquet",
    numberOfDoors: 2, numberOfWindows: 8, totalArea: "3,000 sq ft",
    maxBookingHours: "12 Hours", advanceBookingDays: "180 Days", cancellationPolicy: "24 Hours Before Booking",
    description: "The Main Hall is a spacious and well-equipped hall suitable for weddings, receptions, conferences, seminars, and other large gatherings.\nIt is located on the ground floor with easy access and parking.",
    fullAmenities: ["AC", "Sound System", "Chairs", "Tables", "Projector", "Podium", "Stage", "Lighting"],
    addedOn: "2024-05-10", updatedOn: "2026-05-20",
    managedBy: "Parish Office", contactPerson: "Mr. Daniel Abraham", contactPhone: "+91 98765 43210", contactEmail: "daniel.abraham@gmail.com",
    maintenanceStatus: "Up to Date", lastMaintenance: "2026-05-05", nextMaintenance: "2026-11-05", maintenanceRemarks: "Regular cleaning and AC servicing.",
  },
  {
    id: "FAC-002", name: "Conference Room", location: "Church Campus, First Floor", capacityLabel: "50 People", capacityNumber: 50,
    amenities: ["AC", "Projector", "Whiteboard", "Chairs"], status: "Active",
    category: "Room", facilityType: "Conference Room", setupType: "Theatre",
    numberOfDoors: 1, numberOfWindows: 4, totalArea: "600 sq ft",
    maxBookingHours: "8 Hours", advanceBookingDays: "90 Days", cancellationPolicy: "24 Hours Before Booking",
    description: "A well-equipped conference room ideal for committee meetings, planning sessions and small gatherings.",
    fullAmenities: ["AC", "Projector", "Whiteboard", "Chairs", "Tables", "Wi-Fi"],
    addedOn: "2024-05-10", updatedOn: "2026-05-18",
    managedBy: "Parish Office", contactPerson: "Mrs. Mary Elizabeth", contactPhone: "+91 91234 56789", contactEmail: "mary.elizabeth@gmail.com",
    maintenanceStatus: "Up to Date", lastMaintenance: "2026-04-20", nextMaintenance: "2026-10-20", maintenanceRemarks: "AC filter cleaned.",
  },
  {
    id: "FAC-003", name: "Church Grounds", location: "Church Campus, Outdoor", capacityLabel: "500 People", capacityNumber: 500,
    amenities: ["Open Space", "Parking", "Stage", "Lighting"], status: "Active",
    category: "Outdoor Space", facilityType: "Open Ground", setupType: "Open Floor",
    numberOfDoors: 0, numberOfWindows: 0, totalArea: "12,000 sq ft",
    maxBookingHours: "24 Hours", advanceBookingDays: "180 Days", cancellationPolicy: "48 Hours Before Booking",
    description: "Open church grounds suitable for large community events, camps and outdoor gatherings.",
    fullAmenities: ["Parking", "Stage", "Lighting"],
    addedOn: "2024-05-10", updatedOn: "2026-05-15",
    managedBy: "Parish Office", contactPerson: "Scouts & Guides", contactPhone: "+91 94433 22110", contactEmail: "scouts.guides@gmail.com",
    maintenanceStatus: "Up to Date", lastMaintenance: "2026-05-01", nextMaintenance: "2026-08-01", maintenanceRemarks: "Grounds mowed and lighting checked.",
  },
  {
    id: "FAC-004", name: "Sunday School Room", location: "Education Block, Ground Floor", capacityLabel: "80 People", capacityNumber: 80,
    amenities: ["AC", "Whiteboard", "Chairs", "Kids Tables"], status: "Active",
    category: "Room", facilityType: "Classroom", setupType: "Classroom",
    numberOfDoors: 1, numberOfWindows: 3, totalArea: "800 sq ft",
    maxBookingHours: "6 Hours", advanceBookingDays: "60 Days", cancellationPolicy: "24 Hours Before Booking",
    description: "A bright classroom used for Sunday School and children's ministry activities.",
    fullAmenities: ["AC", "Whiteboard", "Chairs", "Bookshelves"],
    addedOn: "2024-06-01", updatedOn: "2026-05-10",
    managedBy: "Sunday School Dept.", contactPerson: "Sunday School Dept.", contactPhone: "+91 90000 11122", contactEmail: "sundayschool@stjohns.church",
    maintenanceStatus: "Up to Date", lastMaintenance: "2026-04-15", nextMaintenance: "2026-10-15", maintenanceRemarks: "Furniture inspected.",
  },
  {
    id: "FAC-005", name: "Choir Room", location: "Worship Block, First Floor", capacityLabel: "30 People", capacityNumber: 30,
    amenities: ["Sound System", "Chairs", "Music Stand"], status: "Active",
    category: "Room", facilityType: "Classroom", setupType: "Open Floor",
    numberOfDoors: 1, numberOfWindows: 2, totalArea: "400 sq ft",
    maxBookingHours: "6 Hours", advanceBookingDays: "60 Days", cancellationPolicy: "24 Hours Before Booking",
    description: "A dedicated rehearsal room for the choir and worship team.",
    fullAmenities: ["Sound System", "Chairs", "Music Stand"],
    addedOn: "2024-06-01", updatedOn: "2026-05-06",
    managedBy: "Choir & Worship Team", contactPerson: "Choir & Worship Team", contactPhone: "+91 98888 22334", contactEmail: "choir@stjohns.church",
    maintenanceStatus: "Up to Date", lastMaintenance: "2026-03-20", nextMaintenance: "2026-09-20", maintenanceRemarks: "Sound system tested.",
  },
  {
    id: "FAC-006", name: "Library", location: "Education Block, Second Floor", capacityLabel: "20 People", capacityNumber: 20,
    amenities: ["Bookshelves", "Tables", "AC"], status: "Active",
    category: "Room", facilityType: "Classroom", setupType: "Classroom",
    numberOfDoors: 1, numberOfWindows: 2, totalArea: "350 sq ft",
    maxBookingHours: "6 Hours", advanceBookingDays: "30 Days", cancellationPolicy: "24 Hours Before Booking",
    description: "A quiet study space with reference books for members and study groups.",
    fullAmenities: ["Bookshelves", "Tables", "AC", "Wi-Fi"],
    addedOn: "2024-07-15", updatedOn: "2026-04-28",
    managedBy: "Parish Office", contactPerson: "Parish Office", contactPhone: "+91 94411 22333", contactEmail: "office@stjohns.church",
    maintenanceStatus: "Up to Date", lastMaintenance: "2026-03-10", nextMaintenance: "2026-09-10", maintenanceRemarks: "Shelving reorganized.",
  },
  {
    id: "FAC-007", name: "Kitchen", location: "Service Block, Ground Floor", capacityLabel: "-", capacityNumber: null,
    amenities: ["Refrigerator", "Cooking Range", "Utensils"], status: "Under Maintenance",
    category: "Service Area", facilityType: "Utility Room", setupType: "Open Floor",
    numberOfDoors: 1, numberOfWindows: 1, totalArea: "250 sq ft",
    maxBookingHours: "8 Hours", advanceBookingDays: "30 Days", cancellationPolicy: "48 Hours Before Booking",
    description: "The church kitchen used for preparing food during fellowship and community events.",
    fullAmenities: ["Kitchen Access", "Restroom"],
    addedOn: "2024-08-01", updatedOn: "2026-05-19",
    managedBy: "Parish Office", contactPerson: "Women's Fellowship", contactPhone: "+91 98888 22334", contactEmail: "fellowship@stjohns.church",
    maintenanceStatus: "In Progress", lastMaintenance: "2026-05-19", nextMaintenance: "2026-06-19", maintenanceRemarks: "Plumbing repair in progress.",
  },
  {
    id: "FAC-008", name: "Parking Area", location: "Church Campus, Outdoor", capacityLabel: "50 Vehicles", capacityNumber: 50,
    amenities: ["Parking Space", "Security Camera"], status: "Active",
    category: "Outdoor Space", facilityType: "Parking", setupType: "Open Floor",
    numberOfDoors: 0, numberOfWindows: 0, totalArea: "5,000 sq ft",
    maxBookingHours: "24 Hours", advanceBookingDays: "180 Days", cancellationPolicy: "No Cancellation",
    description: "Dedicated parking area for members and visitors attending church events.",
    fullAmenities: ["Parking", "Lighting"],
    addedOn: "2024-05-10", updatedOn: "2026-05-02",
    managedBy: "Parish Office", contactPerson: "Parish Office", contactPhone: "+91 94411 22333", contactEmail: "office@stjohns.church",
    maintenanceStatus: "Up to Date", lastMaintenance: "2026-04-01", nextMaintenance: "2026-10-01", maintenanceRemarks: "Surface markings repainted.",
  },
];

export const FACILITIES_LIST_MOCK = FACILITIES_SEED;

export function buildFacilityDetailMock(id) {
  return FACILITIES_SEED.find((f) => f.id === id) ?? FACILITIES_SEED[0];
}

export const NEW_FACILITY_DEFAULTS = {
  name: "", location: "", category: "", capacity: "", facilityType: "", status: "",
  shortCode: "", description: "", amenities: [],
  numberOfDoors: "", numberOfWindows: "", totalArea: "", maxBookingHours: "", advanceBookingDays: "", cancellationPolicy: "",
};

export const FACILITY_SELECT_MOCK = FACILITIES_SEED.map((f) => ({
  name: f.name, location: f.location, capacityLabel: f.capacityLabel, amenities: f.amenities,
}));

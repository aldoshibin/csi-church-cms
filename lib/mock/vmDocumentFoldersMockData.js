export const FOLDER_CREATED_BY_FILTER_OPTIONS = ["Thomas Cherian", "Sarah Mathew", "David Christopher", "Anita Rajan", "John Baptiste", "Parish Office"];
export const FOLDER_TYPE_OPTIONS = ["Custom Folder", "System Folder", "Shared Folder", "Archive Folder"];
export const FOLDER_TYPE_FILTER_OPTIONS = ["Custom Folder", "System Folder", "Shared Folder", "Archive Folder"];
export const FOLDER_ACCESS_LEVEL_OPTIONS = ["View Only", "View & Upload", "View & Download", "Full Access"];
export const FOLDER_ALLOWED_FOR_OPTIONS = ["All Users", "Parish Office", "Facility Booking Team", "Clergy Only", "All Staff"];

export const FOLDER_STATS_MOCK = {
  totalFolders: 38,
  totalDocuments: 196,
  totalSizeLabel: "4.82 GB",
  recentlyAdded: 6,
};

export const FOLDERS_STORAGE_MOCK = {
  totalLabel: "20 GB",
  breakdown: [
    { label: "Used", valueLabel: "4.82 GB", value: 4.82, pct: 24.1, color: "#16A34A" },
    { label: "Available", valueLabel: "15.18 GB", value: 15.18, pct: 75.9, color: "#E5E7EB" },
  ],
};

export const FOLDERS_QUICK_ACTIONS = [
  { key: "new-folder", label: "New Folder", description: "Create a new folder", icon: "FolderPlus", href: "/document-management/folders/add" },
  { key: "upload", label: "Upload Document", description: "Upload files to a folder", icon: "UploadCloud", href: "/document-management/upload" },
  { key: "trash", label: "View Trash", description: "View deleted folders", icon: "Trash2", href: "/document-management/trash" },
];

const FOLDERS_SEED = [
  {
    id: "FLD-1001", folderName: "Facility Booking", description: "Documents related to church facility bookings",
    documentsCount: 24, sizeLabel: "512 MB", createdOn: "2026-05-28T10:30:00",
    createdByName: "Thomas Cherian", createdByRole: "Administrator",
    detail: {
      folderType: "Custom Folder", lastModified: "2026-05-28T14:45:00", subFolders: 3,
      accessLevel: "View & Upload", allowedFor: "All Users", permissions: "View, Upload, Download", status: "Active",
    },
  },
  {
    id: "FLD-1002", folderName: "Sacramental Records", description: "Baptism, Confirmation, Marriage & Burial records",
    documentsCount: 45, sizeLabel: "1.12 GB", createdOn: "2026-05-27T15:15:00",
    createdByName: "Sarah Mathew", createdByRole: "Parish Secretary",
    detail: {
      folderType: "Custom Folder", lastModified: "2026-05-27T16:20:00", subFolders: 4,
      accessLevel: "View Only", allowedFor: "Parish Office", permissions: "View", status: "Active",
    },
  },
  {
    id: "FLD-1003", folderName: "Finance & Accounting", description: "Financial reports, statements and accounts",
    documentsCount: 32, sizeLabel: "892 MB", createdOn: "2026-05-26T11:45:00",
    createdByName: "David Christopher", createdByRole: "Finance Manager",
    detail: {
      folderType: "Custom Folder", lastModified: "2026-05-26T12:10:00", subFolders: 2,
      accessLevel: "View Only", allowedFor: "Parish Office", permissions: "View", status: "Active",
    },
  },
  {
    id: "FLD-1004", folderName: "Member Management", description: "Member details and related documents",
    documentsCount: 18, sizeLabel: "256 MB", createdOn: "2026-05-25T09:20:00",
    createdByName: "Anita Rajan", createdByRole: "Administrator",
    detail: {
      folderType: "Custom Folder", lastModified: "2026-05-25T09:50:00", subFolders: 1,
      accessLevel: "View & Upload", allowedFor: "All Staff", permissions: "View, Upload", status: "Active",
    },
  },
  {
    id: "FLD-1005", folderName: "Communication", description: "Circulars, announcements and letters",
    documentsCount: 21, sizeLabel: "378 MB", createdOn: "2026-05-24T14:10:00",
    createdByName: "John Baptiste", createdByRole: "Communication Head",
    detail: {
      folderType: "Custom Folder", lastModified: "2026-05-24T15:30:00", subFolders: 2,
      accessLevel: "View & Download", allowedFor: "All Users", permissions: "View, Download", status: "Active",
    },
  },
  {
    id: "FLD-1006", folderName: "Volunteer Management", description: "Volunteer forms and documents",
    documentsCount: 14, sizeLabel: "189 MB", createdOn: "2026-05-24T10:05:00",
    createdByName: "Parish Office", createdByRole: "Administrator",
    detail: {
      folderType: "Custom Folder", lastModified: "2026-05-24T10:40:00", subFolders: 0,
      accessLevel: "View & Upload", allowedFor: "All Staff", permissions: "View, Upload", status: "Active",
    },
  },
  {
    id: "FLD-1007", folderName: "Sunday School", description: "Sunday school materials and records",
    documentsCount: 12, sizeLabel: "145 MB", createdOn: "2026-05-23T16:40:00",
    createdByName: "Thomas Cherian", createdByRole: "Volunteer Coordinator",
    detail: {
      folderType: "Custom Folder", lastModified: "2026-05-23T17:05:00", subFolders: 1,
      accessLevel: "View & Download", allowedFor: "All Staff", permissions: "View, Download", status: "Active",
    },
  },
  {
    id: "FLD-1008", folderName: "Events & Programs", description: "Event documents and programs",
    documentsCount: 10, sizeLabel: "134 MB", createdOn: "2026-05-22T11:30:00",
    createdByName: "Sarah Mathew", createdByRole: "Parish Secretary",
    detail: {
      folderType: "Custom Folder", lastModified: "2026-05-22T12:00:00", subFolders: 0,
      accessLevel: "View & Download", allowedFor: "All Users", permissions: "View, Download", status: "Active",
    },
  },
];

export const FOLDERS_LIST_MOCK = Array.from({ length: 38 }, (_, i) => {
  const seed = FOLDERS_SEED[i % FOLDERS_SEED.length];
  if (i < FOLDERS_SEED.length) return seed;
  return { ...seed, id: `FLD-${String(1009 + i).padStart(4, "0")}` };
});

export function buildFolderDetailMock(id) {
  const found = FOLDERS_SEED.find((f) => f.id === id) || FOLDERS_SEED[0];
  return { ...found, id: id || found.id };
}

export const NEW_FOLDER_DEFAULTS = {
  folderName: "", description: "", parentFolder: "", folderType: "",
  accessLevel: "", allowedFor: "", isPrivate: false, enableNotifications: false, autoOrganize: false,
};

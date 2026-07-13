/**
 * App-wide constants that aren't role-related (see types/roles.js for
 * those). Kept separate from lib/ since lib/ holds *behavior* (axios
 * client, cn helper, validation schemas) while utils/ holds plain data.
 */
export const PAGE_SIZE_DEFAULT = 20;

export const MEMBERSHIP_STATUS_OPTIONS = [
  { value: "ACTIVE", label: "Active" },
  { value: "INACTIVE", label: "Inactive" },
  { value: "TRANSFERRED_OUT", label: "Transferred Out" },
  { value: "DECEASED", label: "Deceased" },
  { value: "SUSPENDED", label: "Suspended" },
];

export const GENDER_OPTIONS = [
  { value: "MALE", label: "Male" },
  { value: "FEMALE", label: "Female" },
  { value: "OTHER", label: "Other" },
];

export const MARITAL_STATUS_OPTIONS = [
  { value: "SINGLE", label: "Single" },
  { value: "MARRIED", label: "Married" },
  { value: "WIDOWED", label: "Widowed" },
  { value: "DIVORCED", label: "Divorced" },
];

export const EVENT_TYPE_OPTIONS = [
  { value: "SERVICE", label: "Service" },
  { value: "CONFERENCE", label: "Conference" },
  { value: "RETREAT", label: "Retreat" },
  { value: "FELLOWSHIP", label: "Fellowship" },
  { value: "FUNDRAISER", label: "Fundraiser" },
  { value: "OTHER", label: "Other" },
];

/**
 * Minimal country-code list for the phone number field's prefix selector.
 * Kept short and explicit rather than pulling in a full ISO country list —
 * extend as needed. `dialCode` is combined with the user's locally-entered
 * digits to build a proper E.164 number (e.g. "+91" + "9876543210") before
 * the value is sent to the backend, since accounts.models.User.phone_number
 * is a PhoneNumberField that requires full E.164 format.
 */
export const COUNTRY_CODES = [
  { value: "IN", dialCode: "+91", label: "IN +91" },
  { value: "US", dialCode: "+1", label: "US +1" },
  { value: "GB", dialCode: "+44", label: "GB +44" },
  { value: "AU", dialCode: "+61", label: "AU +61" },
  { value: "AE", dialCode: "+971", label: "AE +971" },
];

/**
 * Options below this line support Individual Member Registration
 * (app/(dashboard)/members/individual-registration). BLOOD_GROUP_OPTIONS,
 * NATIONALITY_OPTIONS, MEMBER_CATEGORY_OPTIONS, EDUCATION_OPTIONS, and
 * BAPTIZED_OPTIONS aren't backed by a real backend enum anywhere else in
 * this codebase — they're a reasonable default set, not confirmed against
 * members/models.py. INDIAN_STATES is plain reference data (real, not a
 * guess). BRANCH_CHURCH_OPTIONS is a placeholder — same situation as
 * lib/mock/branchChurchOverviewMockData.js: no branch-listing endpoint
 * exists in services/ yet.
 */
export const BLOOD_GROUP_OPTIONS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const NATIONALITY_OPTIONS = ["Indian", "Other"];


export const MEMBER_CATEGORY_OPTIONS = [
  { value: "FAMILY_HEAD", label: "Family Head" },
  { value: "SPOUSE", label: "Spouse" },
  { value: "CHILD", label: "Child" },
  { value: "INDIVIDUAL", label: "Individual" },
];

export const EDUCATION_OPTIONS = [
  "Below 10th",
  "10th Pass",
  "12th Pass",
  "Diploma",
  "Graduate",
  "Post Graduate",
  "Doctorate",
  "Other",
];

export const BAPTIZED_OPTIONS = [
  { value: "YES", label: "Yes" },
  { value: "NO", label: "No" },
];

// TODO: replace with a real church/branch list once a branch service exists.
export const BRANCH_CHURCH_OPTIONS = [
  "St. John's Cathedral",
  "St. Mark's Church",
  "Emmanuel Church",
  "Holy Trinity Church",
  "Christ Church",
];

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh",
];


export const DISTRICTS = [
  "Chennai", "Coimbatore", "Kanyakumari", "Madurai", "Salem", "Tiruchirappalli",
  "Bangalore Urban", "Mysuru", "Ernakulam", "Thiruvananthapuram", "Other",
];


export const TITLE_OPTIONS = ["Mr.", "Mrs.", "Ms.", "Dr.", "Rev."];

export const REFERRED_BY_OPTIONS = ["Parish Website", "Pastor", "Church Member", "Family Member", "Friend", "Other"];

export const SOURCE_OF_INFORMATION_OPTIONS = ["Website", "Friend / Family", "Social Media", "Walk-in", "Church Event", "Other"];

export const REASON_FOR_JOINING_OPTIONS = ["Faith & Fellowship", "Relocated to Area", "Family Tradition", "Marriage", "Other"];

export const MEMBERSHIP_TYPE_OPTIONS = ["Regular Member", "Associate Member", "Visiting Member"];

export const WORSHIP_SERVICE_PREFERENCE_OPTIONS = ["Early Morning Service", "Main Service", "Evening Service", "Tamil Service", "English Service"];

export const CONFIRMATION_STATUS_OPTIONS = [
  { value: "CONFIRMED", label: "Confirmed" },
  { value: "NOT_CONFIRMED", label: "Not Confirmed" },
  { value: "YET_TO_BE_CONFIRMED", label: "Yet to be Confirmed" },
];

export const COMMUNION_STATUS_OPTIONS = [
  { value: "RECEIVED", label: "Received" },
  { value: "NOT_RECEIVED", label: "Not Received" },
  { value: "NOT_YET", label: "Not Yet" },
];

export const MINISTRY_INTEREST_OPTIONS = [
  "Choir", "Sunday School", "Youth Ministry", "Women's Fellowship", "Men's Fellowship",
  "Ushering", "Altar Guild", "Children's Ministry", "Outreach", "Other",
];

export const RESIDENTIAL_STATUS_OPTIONS = [
  { value: "RESIDENT", label: "Resident" },
  { value: "NON_RESIDENT", label: "Non-Resident" },
  { value: "TEMPORARY", label: "Temporary" },
];

export const FAMILY_RELATIONSHIP_OPTIONS = ["Self", "Spouse", "Son", "Daughter", "Father", "Mother", "Brother", "Sister", "Other"];

// Previously duplicated inline in FamilyDetailsForm.jsx and
// PersonalInformationForm.jsx — consolidated here since a third form
// (New Member Enrollment) needs the same list.
export const PREFERRED_LANGUAGE_OPTIONS = ["English", "Tamil", "Malayalam", "Hindi", "Telugu", "Kannada"];

/**
 * Options below this line support Visitor Management
 * (app/(dashboard)/visitors). No visitor endpoint exists anywhere yet —
 * see services/visitorService.js's header comment for the full
 * confirmed/best-guess breakdown.
 */
export const VISITOR_SOURCE_OPTIONS = ["Walk-in", "Website", "Friend Invitation", "Social Media", "Church Event", "Other"];

// "Purpose / Source" on the Add New Visitor page — distinct from "How did
// you hear about us?" above (which maps to VISITOR_SOURCE_OPTIONS). Not
// confirmed against a backend enum.
export const VISITOR_PURPOSE_OPTIONS = ["Sunday Service", "Special Event", "Wedding", "Funeral", "Baptism", "General Visit", "Prayer Request", "Other"];

/**
 * Options below this line support Member Transfer In
 * (app/(dashboard)/members/transfer-in). Unlike most other new-page
 * deliveries, the underlying endpoint IS confirmed real —
 * memberService.transferIn() already existed in this codebase before
 * this page did (POST /members/transfer-in/). Only the payload's field
 * names and these option lists are best-guess.
 */
export const REQUESTED_BY_OPTIONS = ["Member", "Family Head", "Pastor", "Church Secretary", "Other"];

export const REQUEST_TYPE_OPTIONS = ["Inter Parish Transfer", "Inter Diocese Transfer", "International Transfer", "Other"];

export const TRANSFER_REASON_SUGGESTIONS = [
  "Relocation", "Marriage", "Employment", "Family Reasons", "Closer to Residence", "Other",
];

export const TRANSFER_STATUS_OPTIONS = ["Unknown", "Baptized", "Not Baptized"]; // Baptism Status
export const TRANSFER_CONFIRMATION_OPTIONS = ["Unknown", "Confirmed", "Not Confirmed"]; // Confirmation Status

export const MEMBER_SEARCH_BY_OPTIONS = [
  { value: "name", label: "Name" },
  { value: "phone_number", label: "Phone Number" },
  { value: "email", label: "Email" },
  { value: "membership_number", label: "Membership No." },
];

/**
 * Options below this line support Member Transfer Out
 * (app/(dashboard)/members/transfer-out). Like Transfer In, the endpoint
 * (memberService.transferOut()) is confirmed real. These option lists and
 * the payload's field names are still best-guess.
 */
export const TRANSFER_OUT_REQUEST_TYPE_OPTIONS = ["Individual Transfer", "Family Transfer", "Temporary Transfer", "Permanent Transfer", "Other"];

export const REASON_CATEGORY_OPTIONS = ["Relocation", "Employment", "Marriage", "Family Reasons", "Health", "Education", "Other"];

export const CERTIFICATE_TYPE_OPTIONS = ["Transfer Certificate", "Baptism Certificate", "Confirmation Certificate", "Marriage Certificate", "Other"];

export const PRIORITY_OPTIONS = ["Low", "Normal", "High", "Urgent"];

export const CERTIFICATE_DELIVERY_OPTIONS = ["Email", "Post", "Courier", "In Person"];

export const TRANSFER_SCOPE_OPTIONS = ["Individual Only", "Entire Family"];

/**
 * Options below this line support Inactive Member Tracking
 * (app/(dashboard)/members/inactive-tracking). The base member list
 * reuses the real, confirmed memberService.list() with
 * membership_status=INACTIVE — everything else (duration buckets,
 * ministry/group, the write actions in the modals) is best-guess, see
 * services/memberActivityService.js.
 */
export const INACTIVE_DURATION_OPTIONS = [
  { value: "3", label: "3+ Months" },
  { value: "6", label: "6+ Months" },
  { value: "12", label: "12+ Months" },
];

export const MINISTRY_GROUP_OPTIONS = ["Choir", "Women's Fellowship", "Men's Fellowship", "Sunday School", "Youth Ministry", "Ushering", "Others"];

/**
 * Options below this line support Migrated Member Tracking
 * (app/(dashboard)/members/migrated-tracking). Like Inactive Member
 * Tracking, the base list reuses the real memberService.list() filtered
 * to membership_status=TRANSFERRED_OUT (a confirmed real enum value,
 * see components/ui/Badge.jsx's STATUS_VARIANT_MAP). Everything else
 * (migration reason, migration status, receiving church) is best-guess
 * — see services/migrationService.js.
 */
export const MIGRATION_REASON_OPTIONS = ["Transfer", "Relocation", "Job Transfer", "Marriage", "Family", "Other"];

export const MIGRATION_STATUS_OPTIONS = [
  { value: "COMPLETED", label: "Completed" },
  { value: "PENDING_CONFIRMATION", label: "Pending Confirmation" },
  { value: "AWAITING_DETAILS", label: "Awaiting Details" },
];

/**
 * Options below this line support the Senior Citizen Registry
 * (app/(dashboard)/members/senior-citizens). The base list reuses the
 * real memberService.list() with a best-guess age_min=60 param (no
 * confirmed "senior" enum/flag exists on Member, unlike Inactive/
 * Migrated Tracking's real membership_status values) — see
 * hooks/useSeniorMembers.js and lib/mock/seniorMembersListMock.js.
 */
export const AGE_BRACKET_OPTIONS = ["60 to 69", "70 to 79", "80 & above"];

export const SENIOR_MINISTRY_OPTIONS = [
  "Women's Fellowship", "Men's Fellowship", "Choir", "Sunday School", "Ushering", "Maintenance Team", "Others",
];

/**
 * Options below this line support the Widow/Widower Registry
 * (app/(dashboard)/members/widow-widower). Unlike Senior Citizen
 * Registry's age_min guess, this page's base filter is confirmed real:
 * marital_status: "WIDOWED" is already a used enum value in
 * memberSchema/MARITAL_STATUS_OPTIONS. "Widow" vs "Widower" is derived
 * client-side from gender, not a separate backend field.
 */
export const REGISTRY_AGE_GROUP_OPTIONS = ["60 - 69 Years", "70 - 79 Years", "80+ Years"];

/**
 * Options below this line support Member Photo Management
 * (app/(dashboard)/members/photo-management). Photo upload/removal uses
 * the REAL, confirmed memberService.uploadPhoto() — the strongest real
 * anchor of any tracking-style page so far. Photo Status/Image Source
 * filters and the aggregate widgets are best-guess/mock — see
 * lib/mock/photoManagementMockData.js.
 */
export const PHOTO_STATUS_OPTIONS = [
  { value: "WITH_PHOTO", label: "With Photo" },
  { value: "WITHOUT_PHOTO", label: "Without Photo" },
];

export const IMAGE_SOURCE_OPTIONS = ["Uploaded by Parish", "Bulk Upload", "Imported", "Other"];

/**
 * Options below this line support the Widow/Widower Registry
 * (app/(dashboard)/members/widow-widower). Same situation as Senior
 * Citizen Registry: no confirmed "widow/widower" enum/flag exists on
 * Member — the base list uses a best-guess filter param. Membership
 * Status here reuses the same real ACTIVE/INACTIVE values from
 * MEMBERSHIP_STATUS_OPTIONS (confirmed real), just a 2-option subset for
 * this simpler filter dropdown.
 */
export const WIDOW_WIDOWER_GENDER_OPTIONS = [
  { value: "WIDOW", label: "Widow" },
  { value: "WIDOWER", label: "Widower" },
];

export const VISITOR_STATUS_OPTIONS = [
  { value: "NEW_VISITOR", label: "New Visitor" },
  { value: "RETURNING_VISITOR", label: "Returning Visitor" },
];

export const FOLLOW_UP_STATUS_OPTIONS = [
  { value: "PENDING", label: "Pending" },
  { value: "CONTACTED", label: "Contacted" },
  { value: "INVITED", label: "Invited" },
  { value: "MEMBER", label: "Member" },
];

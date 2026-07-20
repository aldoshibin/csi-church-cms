import { z } from "zod";

/**
 * Zod schemas used with @hookform/resolvers/zod across every auth and
 * member-management form. Keeping them here means the validation rules
 * for "what is a valid email/password" are defined exactly once.
 */
export const loginSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
  password: z.string().min(1, "Password is required."),
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required."),
    email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
    // PhoneInput emits a complete E.164 string (e.g. "+919876543210");
    // validate the shape it actually produces rather than raw local digits.
    phoneNumber: z
      .string()
      .min(1, "Phone number is required.")
      .regex(/^\+[0-9]{7,15}$/, "Enter a valid phone number."),
    password: z
      .string()
      .min(8, "Minimum 8 characters with letters and numbers.")
      .regex(/[A-Za-z]/, "Minimum 8 characters with letters and numbers.")
      .regex(/[0-9]/, "Minimum 8 characters with letters and numbers."),
    passwordConfirm: z.string().min(1, "Please confirm your password."),
    dateOfBirth: z.string().optional(),
    signupType: z.enum(["MEMBER", "VOLUNTEER", "STAFF", "PRIEST_PASTOR"], {
      errorMap: () => ({ message: "Please select how you're signing up." }),
    }),
    parishBranchId: z.string().min(1, "Please select your parish or branch."),
    agreeToTerms: z.literal(true, {
      errorMap: () => ({ message: "You must agree to the Terms of Service and Privacy Policy." }),
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match.",
    path: ["passwordConfirm"],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
});

export const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, "Password must be at least 8 characters."),
    newPasswordConfirm: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    message: "Passwords do not match.",
    path: ["newPasswordConfirm"],
  });

export const memberSchema = z.object({
  first_name: z.string().min(1, "First name is required."),
  last_name: z.string().min(1, "Last name is required."),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Select a gender." }) }),
  date_of_birth: z.string().optional().nullable(),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  phone_number: z.string().optional(),
  marital_status: z.enum(["SINGLE", "MARRIED", "WIDOWED", "DIVORCED"]).optional(),
  church_id: z.union([z.string(), z.number()]).refine((v) => v !== "" && v != null, "Church is required."),
  family_id: z.union([z.string(), z.number(), z.null()]).optional(),
  joined_date: z.string().min(1, "Joined date is required."),
});

/**
 * Add New Family page (Family Registration). Two schemas because the page
 * writes to two different endpoints: familyService.create() for the family
 * record itself, and memberService.create() once per row for new members
 * (see hooks/useFamilyRegistrationForm.js).
 *
 * Fields marked CONFIRMED mirror FamilyForm.jsx / memberSchema exactly —
 * verified against the live Family/Member ViewSets. Fields marked
 * BEST-GUESS come from the Add New Family design but aren't in any
 * existing form in this codebase; confirm the field names with the
 * Family Management backend app (families/serializers.py) before
 * treating them as load-bearing.
 */
export const familyDetailsSchema = z.object({
  // CONFIRMED — same as FamilyForm.jsx
  family_type: z.enum(["NUCLEAR", "JOINT", "SINGLE", "OTHER"]),
  address_line1: z.string().min(1, "Address is required."),
  city: z.string().optional(),
  church_id: z.union([z.string(), z.number()]).refine((v) => v !== "" && v != null, "Branch / Church is required."),

  // BEST-GUESS — sent to familyService.create() but not verified against
  // the backend serializer. If the API rejects the request, start by
  // removing these and re-adding one at a time.
  registration_date: z.string().optional(),
  preferred_language: z.string().optional(),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  phone_number: z.string().optional(),
  alternate_phone: z.string().optional(),
  marital_status: z.enum(["SINGLE", "MARRIED", "WIDOWED", "DIVORCED", "SEPARATED"]).optional(),
  pincode: z.string().optional(),
  family_category: z.string().optional(),
  date_of_marriage: z.string().optional().or(z.literal("")),
  notes: z.string().optional(),

  // Head of family is an existing Member, attached via
  // memberService.update(headId, { family_id }) after the family is
  // created — not part of the family payload itself.
  head_of_family: z
    .object({ id: z.union([z.string(), z.number()]), name: z.string() })
    .nullable()
    .refine((v) => v !== null, "Head of the family is required."),
  relationship_of_head: z.string().min(1, "Relationship is required."),
});

/** One row in the Add Family Members table. Subset of memberSchema — the
 * page fills in church_id/family_id/joined_date itself before submitting. */
export const familyMemberRowSchema = z.object({
  first_name: z.string().min(1, "Required"),
  last_name: z.string().optional(),
  relationship: z.string().min(1, "Required"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Required" }) }),
  date_of_birth: z.string().min(1, "Required"),
  occupation: z.string().optional(),
});

/**
 * Individual Member Registration (full page — distinct from the quick-add
 * MemberForm.jsx modal, which deliberately keeps a smaller field set).
 * CONFIRMED fields match memberSchema exactly. BEST-GUESS fields aren't in
 * any existing form; sent to memberService.create() optimistically — drop
 * whichever the API 400s on. See README for the full breakdown.
 */
export const individualMemberSchema = z.object({
  // CONFIRMED
  first_name: z.string().min(1, "First name is required."),
  last_name: z.string().min(1, "Last name is required."),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Select a gender." }) }),
  date_of_birth: z.string().min(1, "Date of birth is required."),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  phone_number: z.string().min(1, "Mobile number is required."),
  marital_status: z.enum(["SINGLE", "MARRIED", "WIDOWED", "DIVORCED"], {
    errorMap: () => ({ message: "Select a marital status." }),
  }),
  church_id: z.union([z.string(), z.number()]).refine((v) => v !== "" && v != null, "Branch / Church is required."),
  joined_date: z.string().min(1, "Date of joining is required."),

  // BEST-GUESS
  middle_name: z.string().optional(),
  blood_group: z.string().optional(),
  alternate_phone_number: z.string().optional(),
  nationality: z.string().optional(),
  baptized: z.enum(["YES", "NO"]).optional().or(z.literal("")),
  baptism_date: z.string().optional().or(z.literal("")),
  member_category: z.string().optional(),
  occupation: z.string().optional(),
  address_line1: z.string().min(1, "Address line 1 is required."),
  address_line2: z.string().optional(),
  country: z.string().optional(),
  state: z.string().min(1, "State is required."),
  district: z.string().min(1, "District is required."),
  city: z.string().min(1, "City is required."),
  pincode: z.string().min(1, "Pincode is required."),
  education: z.string().optional(),
  workplace_or_school: z.string().optional(),
  skills_talents: z.string().optional(),
  notes: z.string().optional(),
});

/**
 * New Member Enrollment — 5-step wizard (Enrollment Details, Personal
 * Information, Church Information, Family Information, Documents &
 * Review). One big schema; each step's "Save & Continue" only validates
 * that step's own field names via form.trigger([...]), so fields required
 * by a later step are allowed to stay empty until the user reaches it.
 *
 * CONFIRMED fields match memberSchema/familyDetailsSchema exactly.
 * Everything else is BEST-GUESS — see the Individual Member Registration
 * and Family Registration READMEs for the same caveat; this form has
 * many more of them since none of these screens exist elsewhere yet
 * (title, spouse_name, anniversary_date, aadhaar/PAN/passport numbers,
 * baptism/confirmation/communion detail, ministry interests, and the
 * whole family-info block).
 */
export const newMemberEnrollmentSchema = z.object({
  // Step 1 — Enrollment Details
  enrollment_date: z.string().min(1, "Enrollment date is required."),
  referred_by: z.string().optional(),
  source_of_information: z.string().min(1, "Source of information is required."),
  reason_for_joining: z.string().min(1, "Reason for joining is required."),
  membership_type: z.string().min(1, "Membership type is required."),
  preferred_language: z.string().optional(),
  enrollment_notes: z.string().optional(),

  // Step 2 — Personal Information (first_name/last_name/gender/date_of_birth/
  // phone_number/marital_status/address_line1/state/district/city/pincode
  // are CONFIRMED field names; everything else on this step is BEST-GUESS)
  title: z.string().optional(),
  first_name: z.string().min(1, "First name is required."),
  middle_name: z.string().optional(),
  last_name: z.string().min(1, "Last name is required."),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Select a gender." }) }),
  date_of_birth: z.string().min(1, "Date of birth is required."),
  blood_group: z.string().optional(),
  marital_status: z.enum(["SINGLE", "MARRIED", "WIDOWED", "DIVORCED"], {
    errorMap: () => ({ message: "Select a marital status." }),
  }),
  spouse_name: z.string().optional(),
  anniversary_date: z.string().optional().or(z.literal("")),
  phone_number: z.string().min(1, "Mobile number is required."),
  alternate_phone_number: z.string().optional(),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  aadhaar_number: z.string().optional(),
  pan_number: z.string().optional(),
  passport_number: z.string().optional(),
  address_line1: z.string().min(1, "Address line 1 is required."),
  address_line2: z.string().optional(),
  country: z.string().min(1, "Country is required."),
  state: z.string().min(1, "State is required."),
  district: z.string().min(1, "District is required."),
  city: z.string().min(1, "City is required."),
  pincode: z.string().min(1, "Pincode is required."),

  // Step 3 — Church Information (church_id and joined_date are CONFIRMED
  // field names; everything else BEST-GUESS)
  church_id: z.union([z.string(), z.number()]).refine((v) => v !== "" && v != null, "Branch / Church is required."),
  worship_service_preference: z.string().optional(),
  joined_date: z.string().min(1, "Date of joining is required."),
  baptized: z.enum(["YES", "NO"], { errorMap: () => ({ message: "Select an option." }) }),
  baptism_date: z.string().optional().or(z.literal("")),
  baptism_place: z.string().optional(),
  confirmation_status: z.string().optional(),
  confirmation_date: z.string().optional().or(z.literal("")),
  confirmation_place: z.string().optional(),
  communion_status: z.string().optional(),
  communion_date: z.string().optional().or(z.literal("")),
  communion_place: z.string().optional(),
  ministry_interests: z.array(z.string()).optional(),
  ministry_interest_other: z.string().optional(),
  church_additional_info: z.string().optional(),

  // Step 4 — Family Information (all BEST-GUESS; family_id assigned after
  // familyService.create() in the submit handler, not part of this schema)
  family_head: z.object({ id: z.union([z.string(), z.number()]), name: z.string() }).nullable().optional(),
  relationship_to_family_head: z.string().min(1, "Relationship to family head is required."),
  family_name: z.string().optional(),
  family_email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  family_mobile_number: z.string().min(1, "Family mobile number is required."),
  family_marital_status: z.enum(["SINGLE", "MARRIED", "WIDOWED", "DIVORCED"], {
    errorMap: () => ({ message: "Select a marital status." }),
  }),
  date_of_marriage: z.string().optional().or(z.literal("")),
  family_anniversary: z.string().optional().or(z.literal("")),
  residential_status: z.string().min(1, "Residential status is required."),
  parish_house_locality: z.string().optional(),
  family_occupation: z.string().optional(),
  family_prayer_group: z.string().optional(),
  family_notes: z.string().optional(),
  family_members: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, "Name is required."),
      relationship: z.string().min(1, "Relationship is required."),
      gender: z.enum(["MALE", "FEMALE", "OTHER"]),
      date_of_birth: z.string().min(1, "Date of birth is required."),
      marital_status: z.enum(["SINGLE", "MARRIED", "WIDOWED", "DIVORCED"]),
    })
  ).optional(),
});

/** One row in the Step 4 "Add Family Member" modal. */
export const familyMemberEntrySchema = z.object({
  name: z.string().min(1, "Name is required."),
  relationship: z.string().min(1, "Relationship is required."),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Select a gender." }) }),
  date_of_birth: z.string().min(1, "Date of birth is required."),
  marital_status: z.enum(["SINGLE", "MARRIED", "WIDOWED", "DIVORCED"], {
    errorMap: () => ({ message: "Select a marital status." }),
  }),
});

/**
 * Visitor Management — Add/Edit Visitor modal. Nothing here is confirmed
 * against a real backend (no Visitor model exists in this codebase yet);
 * see services/visitorService.js's header comment.
 */
export const visitorSchema = z.object({
  full_name: z.string().min(1, "Name is required."),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  phone: z.string().min(1, "Phone number is required."),
  visit_date: z.string().min(1, "Visit date is required."),
  source: z.string().min(1, "Source is required."),
  follow_up_status: z.string().optional(),
  notes: z.string().optional(),
});

/**
 * Add New Visitor — full page (distinct from VisitorFormModal's quicker
 * Edit-focused field set). Nothing here is confirmed against a real
 * backend — see services/visitorService.js.
 */
export const addVisitorSchema = z.object({
  first_name: z.string().min(1, "First name is required."),
  middle_name: z.string().optional(),
  last_name: z.string().min(1, "Last name is required."),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Select a gender." }) }),
  date_of_birth: z.string().optional().or(z.literal("")),
  phone: z.string().min(1, "Phone number is required."),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  pincode: z.string().optional(),
  visit_date: z.string().min(1, "Visit date is required."),
  visit_time: z.string().optional(),
  purpose_source: z.string().min(1, "Purpose / Source is required."),
  how_did_you_hear: z.string().optional(),
  is_returning: z.enum(["YES", "NO"]).optional(),
  additional_notes: z.string().optional(),
  receive_updates: z.boolean().optional(),
  companions: z.array(
    z.object({
      id: z.string(),
      name: z.string().min(1, "Name is required."),
      relationship: z.string().optional(),
      phone: z.string().optional(),
    })
  ).optional(),
});

/** One row in the Add Companion modal. */
export const visitorCompanionSchema = z.object({
  name: z.string().min(1, "Name is required."),
  relationship: z.string().optional(),
  phone: z.string().optional(),
});

/**
 * Member Transfer In — 4-step form. The endpoint this submits to
 * (memberService.transferIn(), POST /members/transfer-in/) is REAL and
 * already existed in this codebase. The specific field names inside the
 * payload below are still best-guess — nothing in the existing codebase
 * shows what transferIn() actually expects beyond "some payload object".
 */
export const memberTransferInSchema = z.object({
  // Step 1 — Transfer Information + Member Search
  transfer_in_date: z.string().min(1, "Transfer in date is required."),
  requested_by: z.string().min(1, "Requested by is required."),
  request_type: z.string().min(1, "Request type is required."),
  transfer_reason: z.string().min(1, "Transfer reason is required."),
  additional_notes: z.string().optional(),
  search_mode: z.enum(["EXISTING", "NEW"]).default("EXISTING"),
  matched_member: z.object({ id: z.union([z.string(), z.number()]), name: z.string() }).nullable().optional(),

  // Step 2 — Member Information
  first_name: z.string().min(1, "First name is required."),
  middle_name: z.string().optional(),
  last_name: z.string().min(1, "Last name is required."),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Select a gender." }) }),
  date_of_birth: z.string().min(1, "Date of birth is required."),
  phone_number: z.string().min(1, "Mobile number is required."),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  membership_number: z.string().optional(),
  current_church: z.string().min(1, "Current church is required."),
  address: z.string().optional(),

  // Step 3 — Church Information
  from_parish_church: z.string().min(1, "From Parish / Church is required."),
  from_diocese: z.string().optional(),
  receiving_branch: z.union([z.string(), z.number()]).refine((v) => v !== "" && v != null, "Receiving branch is required."),
  pastor_vicar_name: z.string().optional(),
  transfer_certificate_no: z.string().optional(),
  certificate_date: z.string().optional().or(z.literal("")),
  baptism_status: z.string().optional(),
  confirmation_status: z.string().optional(),
  membership_category: z.string().optional(),
});

/**
 * Member Transfer Out — 4-step form. memberService.transferOut(id, payload)
 * (POST /members/{id}/transfer-out/) is REAL and already existed in this
 * codebase. Unlike Transfer In, there's no "Add New Member" path — a
 * transfer-out request always requires selecting an existing member
 * (you can't transfer someone out who was never in the system), so
 * matched_member is required, not optional.
 */
export const memberTransferOutSchema = z.object({
  // Step 1 — Transfer Request Details + Member Search
  transfer_out_date: z.string().min(1, "Transfer out date is required."),
  requested_by: z.string().min(1, "Requested by is required."),
  request_type: z.string().min(1, "Request type is required."),
  reason_category: z.string().min(1, "Reason category is required."),
  requested_certificate_type: z.string().min(1, "Requested certificate type is required."),
  priority: z.string().optional(),
  reason_for_transfer: z.string().min(1, "Reason for transfer is required.").max(250),
  additional_notes: z.string().max(250).optional(),
  matched_member: z.object({ id: z.union([z.string(), z.number()]), name: z.string() }).nullable().refine((v) => v !== null, "Search and select a member to continue."),

  // Step 2 — Member Information
  first_name: z.string().min(1, "First name is required."),
  middle_name: z.string().optional(),
  last_name: z.string().min(1, "Last name is required."),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Select a gender." }) }),
  date_of_birth: z.string().min(1, "Date of birth is required."),
  marital_status: z.enum(["SINGLE", "MARRIED", "WIDOWED", "DIVORCED"], { errorMap: () => ({ message: "Select a marital status." }) }),
  blood_group: z.string().optional(),
  phone_number: z.string().min(1, "Mobile number is required."),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  membership_number: z.string().min(1, "Membership number is required."),
  family_id: z.string().optional(),
  address_line1: z.string().min(1, "Address line 1 is required."),
  address_line2: z.string().optional(),
  city: z.string().min(1, "City is required."),
  state: z.string().min(1, "State is required."),
  district: z.string().min(1, "District is required."),
  pincode: z.string().min(1, "Pincode is required."),
  family_head_name: z.string().optional(),
  relationship_with_head: z.string().optional(),
  family_member_count: z.union([z.string(), z.number()]).optional(),
  transfer_scope: z.string().optional(),

  // Step 3 — Destination Church Information
  destination_church_name: z.string().min(1, "Destination church name is required."),
  destination_diocese_parish: z.string().min(1, "Diocese / Parish is required."),
  destination_church_address: z.string().min(1, "Church address is required."),
  destination_state: z.string().min(1, "State is required."),
  destination_district: z.string().min(1, "District is required."),
  destination_country: z.string().min(1, "Country is required."),
  destination_contact_person: z.string().optional(),
  destination_designation: z.string().optional(),
  destination_email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  destination_mobile: z.string().optional(),
  destination_landline: z.string().optional(),
  certificate_delivery: z.string().optional(),
  current_branch_church: z.string().min(1, "Current branch / church is required."),
  date_of_membership: z.string().optional().or(z.literal("")),
  transfer_certificate_no: z.string().optional(),
  baptism_register_no: z.string().optional(),
  confirmation_date: z.string().optional().or(z.literal("")),
  communion_date: z.string().optional().or(z.literal("")),

  // Step 4 — confirmation checkbox
  confirmed: z.boolean().optional(),
});

/** Inactive Member Tracking — Call/Reminder/Follow-up-note modals. */
export const callMemberNotesSchema = z.object({
  notes: z.string().optional(),
});

export const sendReminderSchema = z.object({
  to: z.string().min(1, "Recipient is required."),
  message: z.string().min(1, "Message is required."),
});

export const followUpNoteSchema = z.object({
  note: z.string().min(1, "Follow-up note is required."),
});

/** Migrated Member Tracking — Migrated Member Details / Follow-up Note modals. */
export const migrationDetailsSchema = z.object({
  from_church: z.string().optional(),
  migrated_to: z.string().min(1, "Migrated To is required."),
  migrated_on: z.string().optional(),
  reason: z.string().min(1, "Reason is required."),
  status: z.string().min(1, "Status is required."),
});

export const migrationFollowUpNoteSchema = z.object({
  note: z.string().min(1, "Follow-up note is required."),
});

/** Senior Citizen Registry — View details / Add Assistance-Support Note modals. */
export const seniorSupportNoteSchema = z.object({
  note: z.string().min(1, "Note is required."),
});

/** Senior Citizen Registry — the 3 secondary tabs' "Add" modals. */
export const milestoneSchema = z.object({
  member_name: z.string().min(1, "Member is required."),
  milestone_date: z.string().min(1, "Date is required."),
  description: z.string().min(1, "Description is required."),
});

export const assistanceRecordSchema = z.object({
  member_name: z.string().min(1, "Member is required."),
  assistance_type: z.string().min(1, "Type is required."),
  description: z.string().min(1, "Description is required."),
});

export const followUpEntrySchema = z.object({
  member_name: z.string().min(1, "Member is required."),
  category: z.string().min(1, "Category is required."),
  description: z.string().min(1, "Description is required."),
});

/** Senior Citizen Registry — Upcoming Milestones / Health & Assistance / Follow-up & Notes tab modals. */
export const addMilestoneSchema = z.object({
  member_name: z.string().min(1, "Member is required."),
  milestone_date: z.string().min(1, "Date is required."),
  ministry_group: z.string().optional(),
  status: z.string().min(1, "Status / note is required."),
});

export const addAssistanceSchema = z.object({
  member_name: z.string().min(1, "Member is required."),
  assistance_type: z.string().min(1, "Assistance type is required."),
  details: z.string().min(1, "Details are required."),
});

export const addFollowUpEntrySchema = z.object({
  member_name: z.string().min(1, "Member is required."),
  type: z.enum(["CALL", "GREETING", "NOTE"], { errorMap: () => ({ message: "Select a type." }) }),
  title: z.string().min(1, "Title is required."),
  description: z.string().optional(),
  assigned_to: z.string().optional(),
  tag: z.string().optional(),
  due_date: z.string().optional().or(z.literal("")),
});

/** Widow/Widower Registry — Add/Edit member modal + support note modal. */
export const widowWidowerMemberSchema = z.object({
  full_name: z.string().min(1, "Member name is required."),
  membership_number: z.string().optional(),
  gender: z.enum(["WIDOW", "WIDOWER"], { errorMap: () => ({ message: "Select Widow or Widower." }) }),
  age: z.union([z.string(), z.number()]).optional(),
  spouse_name: z.string().min(1, "Spouse name is required."),
  membership_status: z.enum(["ACTIVE", "INACTIVE"], { errorMap: () => ({ message: "Select a status." }) }),
  registered_on: z.string().optional(),
  ministry_group: z.string().optional(),
});

export const widowWidowerNoteSchema = z.object({
  note: z.string().min(1, "Note is required."),
});

/** Widow/Widower Registry — Upcoming Milestones / Follow-up & Notes tab modals. */
export const wwAddMilestoneSchema = z.object({
  title: z.string().min(1, "Title is required."),
  milestone_date: z.string().min(1, "Date is required."),
  description: z.string().min(1, "Description is required."),
});

export const wwGeneralNoteSchema = z.object({
  member_name: z.string().min(1, "Member is required."),
  note: z.string().min(1, "Note is required."),
});

/** Member Photo Management — Add/Replace Photo and Bulk Upload modals. */
export const memberPhotoUploadSchema = z.object({
  member_name: z.string().min(1, "Member is required."),
});

/**
 * Add New Baptism Record — 6-step wizard
 * (app/(dashboard)/sacraments/baptism/add). Entirely best-guess field
 * names, same as the rest of the Sacramental Records module — no
 * Baptism model/endpoint is confirmed anywhere in this codebase.
 */
export const addBaptismSchema = z.object({
  // Step 1 — Child Information
  baptism_date: z.string().min(1, "Date of baptism is required."),
  baptism_time: z.string().optional(),
  child_full_name: z.string().min(1, "Child's full name is required."),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], { errorMap: () => ({ message: "Select a gender." }) }),
  date_of_birth: z.string().min(1, "Date of birth is required."),
  place_of_birth: z.string().optional(),
  child_nationality: z.string().optional(),
  child_religion: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  pincode: z.string().optional(),
  country: z.string().optional(),

  // Step 2 — Parents / Guardians
  father_name: z.string().min(1, "Father / Guardian name is required."),
  father_occupation: z.string().optional(),
  father_phone: z.string().min(1, "Father / Guardian phone number is required."),
  father_email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  father_nationality: z.string().optional(),
  father_religion: z.string().optional(),
  mother_name: z.string().min(1, "Mother / Guardian name is required."),
  mother_occupation: z.string().optional(),
  mother_phone: z.string().min(1, "Mother / Guardian phone number is required."),
  mother_email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  mother_nationality: z.string().optional(),
  mother_religion: z.string().optional(),
  mother_is_guardian: z.enum(["YES", "NO"]).optional(),

  // Step 3 — Baptism Details
  place_of_baptism: z.string().min(1, "Place of baptism is required."),
  church_id: z.union([z.string(), z.number()]).refine((v) => v !== "" && v != null, "Church is required."),
  officiated_by: z.string().min(1, "Officiated By is required."),
  denomination: z.string().optional(),
  baptism_type: z.enum(["INFANT", "ADULT", "RE_BAPTISM"], { errorMap: () => ({ message: "Select a baptism type." }) }),
  baptism_certificate_no: z.string().optional(),
  baptism_service_type: z.string().optional(),
  bible_reading: z.string().optional(),
  sermon_title: z.string().optional(),
  remarks: z.string().optional(),

  // Step 4 — Godparents
  godparent1_same_as_father: z.boolean().optional(),
  godparent1_name: z.string().optional(),
  godparent1_relationship: z.string().optional(),
  godparent1_occupation: z.string().optional(),
  godparent1_phone: z.string().optional(),
  godparent1_email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  godparent1_nationality: z.string().optional(),
  godparent1_religion: z.string().optional(),
  godparent2_name: z.string().optional(),
  godparent2_relationship: z.string().optional(),
  godparent2_occupation: z.string().optional(),
  godparent2_phone: z.string().optional(),
  godparent2_email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  godparent2_nationality: z.string().optional(),
  godparent2_religion: z.string().optional(),

  // Step 5 — Documents & Notes
  additional_notes: z.string().optional(),

  // Step 6 — confirmation
  confirmed: z.boolean().optional(),
});

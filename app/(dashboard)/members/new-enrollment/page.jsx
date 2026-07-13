"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useNewMemberEnrollmentForm } from "@/hooks/useNewMemberEnrollmentForm";
import { EnrollmentStepper } from "@/components/enrollment/EnrollmentStepper";
import { EnrollmentProgressPanel } from "@/components/enrollment/EnrollmentProgressPanel";
import { EnrollmentQuickSummaryPanel } from "@/components/enrollment/EnrollmentQuickSummaryPanel";
import { DocumentsPanel, EnrollmentNotePanel } from "@/components/enrollment/DocumentsPanel";
import { FamilyMemberModal } from "@/components/enrollment/FamilyMemberModal";
import Step1EnrollmentDetails from "@/components/enrollment/steps/Step1EnrollmentDetails";
import Step2PersonalInformation from "@/components/enrollment/steps/Step2PersonalInformation";
import Step3ChurchInformation from "@/components/enrollment/steps/Step3ChurchInformation";
import Step4FamilyInformation from "@/components/enrollment/steps/Step4FamilyInformation";
import Step5DocumentsReview from "@/components/enrollment/steps/Step5DocumentsReview";

export default function NewMemberEnrollmentPage() {
  const router = useRouter();
  const {
    form, currentStep, completedSteps, goToStep, goNext, goPrevious,
    age, fullName, photo, photoPreviewUrl, setPhotoFile, clearPhoto,
    familyMemberFields, familyMemberModal, openAddFamilyMember, openEditFamilyMember,
    closeFamilyMemberModal, saveFamilyMember, removeFamilyMember, totalFamilyMembers,
    familySpouseName, familyChildrenCount, isSubmitting, submit,
  } = useNewMemberEnrollmentForm();

  const values = form.getValues();
  const isReviewStep = currentStep === 5;

  const handleSaveAndContinue = async () => {
    if (isReviewStep) return;
    await goNext();
  };

  const handleSubmitEnrollment = async () => {
    const result = await submit();
    if (result?.ok) router.push("/members/directory");
  };

  
  const nonReviewNav = (
    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
      {currentStep > 1 ? (
        <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={goPrevious}>
          Previous
        </Button>
      ) : (
        <Link href="/members/directory">
          <Button type="button" variant="secondary">Cancel</Button>
        </Link>
      )}
      <Button type="button" onClick={handleSaveAndContinue} rightIcon={<ArrowRight className="h-4 w-4" />}>
        Save &amp; Continue
      </Button>
    </div>
  );

  const stepComponents = {
    1: <Step1EnrollmentDetails form={form} nav={nonReviewNav} />,
    2: <Step2PersonalInformation form={form} age={age} nav={nonReviewNav} />,
    3: <Step3ChurchInformation form={form} nav={nonReviewNav} />,
    4: (
      <Step4FamilyInformation
        form={form}
        fullName={fullName}
        age={age}
        gender={values.gender}
        familyMemberFields={familyMemberFields}
        onAddMember={openAddFamilyMember}
        onEditMember={openEditFamilyMember}
        onRemoveMember={removeFamilyMember}
        nav={nonReviewNav}
      />
    ),
    5: (
      <Step5DocumentsReview
        form={form}
        fullName={fullName}
        age={age}
        totalFamilyMembers={totalFamilyMembers}
        familySpouseName={familySpouseName}
        familyChildrenCount={familyChildrenCount}
        goToStep={goToStep}
      />
    ),
  };

  return (
    <div className="space-y-5 pb-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">New Member Enrollment</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/members" className="hover:underline">Member Management</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">New Member Enrollment</span>
          </nav>
        </div>
        <Link href="/members/directory">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Member Directory
          </Button>
        </Link>
      </div>

      <EnrollmentStepper currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {isReviewStep ? (
            stepComponents[currentStep]
          ) : (
            <div className="rounded-lg border border-border bg-white p-6 shadow-card">{stepComponents[currentStep]}</div>
          )}

          {isReviewStep && (
            <div className="flex items-center justify-between px-1 py-2">
              <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />} onClick={goPrevious}>
                Previous
              </Button>
              <div className="flex gap-3">
                <Button type="button" variant="secondary" leftIcon={<Save className="h-4 w-4" />} disabled title="Draft saving has no backend endpoint yet">
                  Save as Draft
                </Button>
                <Button type="button" onClick={handleSubmitEnrollment} isLoading={isSubmitting} rightIcon={!isSubmitting && <ArrowRight className="h-4 w-4" />}>
                  {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <EnrollmentProgressPanel currentStep={currentStep} completedSteps={completedSteps} />
          <EnrollmentQuickSummaryPanel
            fullName={fullName}
            gender={values.gender}
            church={values.church_id ? "Selected" : "-"}
            mobile={values.phone_number}
            showFamily={currentStep >= 4}
            familyHeadName={values.family_head?.name}
            spouseName={familySpouseName}
            childrenCount={familyChildrenCount}
            totalMembers={totalFamilyMembers}
            address={[values.address_line1, values.city].filter(Boolean).join(", ")}
          />
          <DocumentsPanel
            mode={isReviewStep ? "upload" : "preview"}
            onPhotoSelect={setPhotoFile}
            photoSelected={!!photo}
          />
          <EnrollmentNotePanel />
        </div>
      </div>

      <FamilyMemberModal
        open={familyMemberModal.open}
        initialValues={familyMemberModal.editIndex !== null ? familyMemberFields[familyMemberModal.editIndex] : null}
        onClose={closeFamilyMemberModal}
        onSave={saveFamilyMember}
      />
    </div>
  );
}

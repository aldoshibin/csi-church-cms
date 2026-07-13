"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, RotateCcw, Save } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useIndividualMemberRegistrationForm } from "@/hooks/useIndividualMemberRegistrationForm";
import PersonalInformationForm from "@/components/individual-registration/PersonalInformationForm";
import ChurchInformationForm from "@/components/individual-registration/ChurchInformationForm";
import AddressInformationForm from "@/components/individual-registration/AddressInformationForm";
import OtherInformationForm from "@/components/individual-registration/OtherInformationForm";
import MemberPhotoPanel from "@/components/individual-registration/MemberPhotoPanel";
import QuickSummaryPanel from "@/components/individual-registration/QuickSummaryPanel";
import { DocumentsChecklist, NotePanel } from "@/components/individual-registration/DocumentsChecklist";

export default function IndividualMemberRegistrationPage() {
  const router = useRouter();
  const {
    form, age, summary, photoPreviewUrl, setPhotoFile, clearPhoto,
    isSubmitting, resetForm, submit,
  } = useIndividualMemberRegistrationForm();

  const handleSave = async () => {
    const result = await submit();
    if (result?.ok) {
      router.push("/members");
    }
  };

  return (
    <div className="space-y-6 pb-24">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Individual Member Registration</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/members" className="hover:underline">Member Management</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Individual Member Registration</span>
          </nav>
        </div>
        <Link href="/members">
          <Button type="button" variant="secondary" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Member Management
          </Button>
        </Link>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <PersonalInformationForm form={form} age={age} />
            <ChurchInformationForm form={form} />
            <AddressInformationForm form={form} />
            <OtherInformationForm form={form} />
          </div>

          <div className="space-y-6">
            <MemberPhotoPanel photoPreviewUrl={photoPreviewUrl} setPhotoFile={setPhotoFile} clearPhoto={clearPhoto} />
            <QuickSummaryPanel summary={summary} />
            <DocumentsChecklist />
            <NotePanel />
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-10 border-t border-border bg-white px-6 py-3">
          <div className="mx-auto flex max-w-[1600px] justify-end gap-3">
            <Button type="button" variant="secondary" leftIcon={<RotateCcw className="h-4 w-4" />} onClick={resetForm}>
              Reset
            </Button>
            <Button type="submit" isLoading={isSubmitting} leftIcon={!isSubmitting && <Save className="h-4 w-4" />}>
              {isSubmitting ? "Saving..." : "Save Member"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

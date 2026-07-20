import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepParishDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Parish Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the parish where the baptism was performed.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormSelect label="Diocese" required><option>Nagercoil Diocese</option></FormSelect>
        <FormSelect label="Parish / Church" required><option>CSI Holy Trinity Church, Nagercoil</option></FormSelect>

        <Input label="Parish Priest / Officiated By" required defaultValue="Rev. David Samuel" />
        <FormTextarea label="Address" required rows={3} maxLength={250} defaultValue={"12, Church Street,\nNagercoil - 629001,\nTamil Nadu, India"} />

        <Input label="Phone Number" defaultValue="+91 98765 67891" />
        <Input label="Email" type="email" defaultValue="holytrinitychurch@gmail.com" />
      </div>

      <div className="mt-5 rounded-lg border border-border bg-surface-canvas p-4">
        <h3 className="mb-3 text-sm font-bold text-ink">Baptism Register Reference</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Input label="Baptism Register Book No." required defaultValue="05" />
          <Input label="Baptism Register Sl. No." required defaultValue="128" />
          <Input label="Date of Entry in Register" required type="date" defaultValue="2025-05-12" />
          <Input label="Baptism Entry Page No." defaultValue="45" />
        </div>
      </div>
    </div>
  );
}

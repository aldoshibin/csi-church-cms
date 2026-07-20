import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepFromParish() {
  return (
    <div>
        <h2 className="text-lg font-bold text-ink">From Parish</h2>
        <p className="mb-5 text-sm text-ink-subtle">Enter the details of the parish / church where the member is currently registered.</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormSelect label="Diocese" required><option>Nagercoil Diocese</option></FormSelect>
          <FormSelect label="Parish / Church" required><option>CSI Holy Trinity Church, Nagercoil</option></FormSelect>

          <Input label="Parish Priest / In-Charge" required defaultValue="Rev. David Samuel" />
          <FormTextarea label="Address" required rows={3} defaultValue={"No. 12, Church Street,\nNagercoil - 629001,\nTamil Nadu, India"} />

          <Input label="Phone Number" defaultValue="+91 98765 67891" />
          <Input label="Email" type="email" defaultValue="holytrinitychurch@gmail.com" />
        </div>

        <div className="mt-5 rounded-lg border border-border bg-surface-canvas p-4">
          <h3 className="mb-3 text-sm font-bold text-ink">Parish Registration Details</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Input label="Parish Register Book No." defaultValue="05" />
            <Input label="Parish Register Sl. No." defaultValue="128" />
            <Input label="Date of Membership" required type="date" defaultValue="1985-04-15" />
            <FormSelect label="Membership Type"><option>Baptism</option><option>Transfer In</option></FormSelect>
          </div>
        </div>
    </div>
  );
}

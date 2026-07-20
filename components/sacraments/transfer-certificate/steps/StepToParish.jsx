import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

export function StepToParish() {
  return (
    <div>
        <h2 className="text-lg font-bold text-ink">To Parish</h2>
        <p className="mb-5 text-sm text-ink-subtle">Enter the details of the parish to which the member is transferring.</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormSelect label="Diocese" required><option>Nagercoil Diocese</option></FormSelect>
          <FormSelect label="Parish / Church" required><option>CSI Holy Trinity Church, Nagercoil</option></FormSelect>

          <Input label="Parish Priest / In-Charge" required defaultValue="Rev. David Samuel" />
          <FormTextarea label="Address" required rows={3} defaultValue={"No. 12, Church Street,\nNagercoil - 629001,\nTamil Nadu, India"} />

          <Input label="Phone Number" defaultValue="+91 98765 67891" />
          <Input label="Email" type="email" defaultValue="holytrinitychurch@gmail.com" />
        </div>

        <div className="mt-4">
          <FormTextarea label="Remarks (Optional)" placeholder="Enter any remarks..." />
        </div>
    </div>
  );
}

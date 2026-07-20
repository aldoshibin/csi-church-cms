import { Input } from "@/components/ui/Input";
import { FormSelect, FormTextarea } from "@/components/sacraments/confirmation/formFields";

function SponsorBlock({ n, name, relationship, address, phone, email }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-ink">Sponsor / Godparent {n}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Full Name" required defaultValue={name} />
        <FormSelect label="Relationship to Member" required defaultValue={relationship}>
          <option>Uncle</option><option>Aunt</option><option>Godfather</option><option>Godmother</option><option>Family Friend</option>
        </FormSelect>
        <FormTextarea label="Address" required rows={3} defaultValue={address} />
        <div className="space-y-4">
          <Input label="Phone Number" defaultValue={phone} />
          <Input label="Email" type="email" defaultValue={email} />
        </div>
      </div>
    </div>
  );
}

export function StepSponsorsDetails() {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Sponsors Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Enter the details of the sponsors / godparents.</p>

      <div className="space-y-6">
        <SponsorBlock
          n={1}
          name="Mr. John Mathew"
          relationship="Uncle"
          address={"12, Church Street,\nNagercoil - 629001,\nTamil Nadu, India"}
          phone="+91 98765 43210"
          email="john.mathew@email.com"
        />
        <hr className="border-border" />
        <SponsorBlock
          n={2}
          name="Mrs. Rose Mary"
          relationship="Aunt"
          address={"24, Mission Road,\nNagercoil - 629001,\nTamil Nadu, India"}
          phone="+91 91234 56789"
          email="rosemary@email.com"
        />
      </div>
    </div>
  );
}

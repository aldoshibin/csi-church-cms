import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FormSelect } from "@/components/sacraments/confirmation/formFields";

const CHILDREN_SEED = [
  { name: "John Wilson", dob: "1985-06-15", gender: "Male", occupation: "Engineer", phone: "98765 43210" },
  { name: "Sarah Wilson", dob: "1988-08-22", gender: "Female", occupation: "Nurse", phone: "91234 56789" },
  { name: "David Wilson", dob: "1992-01-10", gender: "Male", occupation: "Businessman", phone: "99887 76655" },
  { name: "Rachel Wilson", dob: "1995-05-05", gender: "Female", occupation: "Teacher", phone: "88776 65544" },
];

export function StepFamilyDetails() {
  const [children, setChildren] = useState(CHILDREN_SEED);

  const updateChild = (index, field, value) => {
    setChildren((prev) => prev.map((c, i) => (i === index ? { ...c, [field]: value } : c)));
  };
  const removeChild = (index) => {
    setChildren((prev) => prev.filter((_, i) => i !== index));
  };
  const addChild = () => {
    setChildren((prev) => [...prev, { name: "", dob: "", gender: "", occupation: "", phone: "" }]);
  };

  return (
    <div>
      <h2 className="text-lg font-bold text-ink">Family Details</h2>
      <p className="mb-5 text-sm text-ink-subtle">Please provide details of the immediate family members.</p>

      <h3 className="mb-3 text-sm font-bold text-ink">Spouse Information</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input label="Spouse Name" placeholder="Enter spouse name" defaultValue="Mary Wilson" />
        <Input label="Date of Birth" type="date" defaultValue="1962-03-12" />
        <FormSelect label="Religion" defaultValue="Christian">
          <option>Christian</option>
          <option>Hindu</option>
          <option>Muslim</option>
          <option>Other</option>
        </FormSelect>
        <Input label="Occupation (Optional)" placeholder="Enter occupation" defaultValue="Retired Teacher" />
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Parent Information</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Father's Name" placeholder="Enter father's name" defaultValue="Late. Joseph Wilson" />
        <Input label="Mother's Name" placeholder="Enter mother's name" defaultValue="Late. Anna Wilson" />
      </div>

      <h3 className="mb-3 mt-6 text-sm font-bold text-ink">Children</h3>
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full min-w-[900px] text-left text-[13px]">
          <thead>
            <tr className="border-b border-border bg-surface-muted text-xs font-semibold text-ink-subtle">
              <th className="px-3 py-2.5 w-10">#</th>
              <th className="px-2 py-2.5">Full Name</th>
              <th className="px-2 py-2.5">Date of Birth</th>
              <th className="px-2 py-2.5">Gender</th>
              <th className="px-2 py-2.5">Occupation</th>
              <th className="px-2 py-2.5">Contact Number</th>
              <th className="px-2 py-2.5 w-20">Action</th>
            </tr>
          </thead>
          <tbody>
            {children.map((child, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="px-3 py-2 text-ink-subtle">{i + 1}</td>
                <td className="px-2 py-2">
                  <Input
                    aria-label="Full Name"
                    value={child.name}
                    onChange={(e) => updateChild(i, "name", e.target.value)}
                    placeholder="Enter full name"
                  />
                </td>
                <td className="px-2 py-2">
                  <Input
                    aria-label="Date of Birth"
                    type="date"
                    value={child.dob}
                    onChange={(e) => updateChild(i, "dob", e.target.value)}
                  />
                </td>
                <td className="px-2 py-2">
                  <FormSelect
                    aria-label="Gender"
                    value={child.gender}
                    onChange={(e) => updateChild(i, "gender", e.target.value)}
                  >
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </FormSelect>
                </td>
                <td className="px-2 py-2">
                  <Input
                    aria-label="Occupation"
                    value={child.occupation}
                    onChange={(e) => updateChild(i, "occupation", e.target.value)}
                    placeholder="Enter occupation"
                  />
                </td>
                <td className="px-2 py-2">
                  <Input
                    aria-label="Contact Number"
                    value={child.phone}
                    onChange={(e) => updateChild(i, "phone", e.target.value)}
                    placeholder="Enter contact number"
                  />
                </td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-1.5">
                    <Button variant="outline" size="icon" aria-label="Edit child"><Pencil className="h-3.5 w-3.5 text-success-500" /></Button>
                    <Button variant="outline" size="icon" aria-label="Remove child" onClick={() => removeChild(i)}>
                      <Trash2 className="h-3.5 w-3.5 text-danger-500" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button variant="outline" className="mt-3" leftIcon={<Plus className="h-4 w-4" />} onClick={addChild}>
        Add Child
      </Button>
    </div>
  );
}

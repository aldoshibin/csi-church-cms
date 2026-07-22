import { User, Users, Church } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { FaChurch } from "react-icons/fa";

const ROLES = [
  { key: "member", label: "Member", sub: "Church member", icon: User },
  { key: "volunteer", label: "Volunteer", sub: "Ministry volunteer", icon: FaHandHoldingHeart },
  { key: "staff", label: "Staff", sub: "Church staff", icon: FaUsersGear },
  { key: "priest", label: "Priest / Pastor", sub: "Pastoral team", icon: FaChurch },
];

export function MemberRoleSelector({ value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
      {ROLES.map((role) => {
        const selected = value === role.key;
        return (
          <button
            key={role.key}
            type="button"
            onClick={() => onChange(role.key)}
            className={cn(
              "flex flex-col items-center gap-1.5 rounded-lg border-2 px-3 py-4 text-center transition-colors",
              selected ? "border-interactive-500 bg-interactive-50" : "border-border bg-white hover:bg-surface-muted"
            )}
          >
            <role.icon className="h-5 w-5 text-[#00796B]" />
            <span className="text-sm font-bold text-orange-600">{role.label}</span>
            <span className="text-xs text-ink-subtle">{role.sub}</span>
          </button>
        );
      })}
    </div>
  );
}

import { AdminNav } from "@/components/admin/admin-nav";
import LetterForm from "@/components/admin/letter-form";
import PersonForm from "@/components/admin/person-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ModeToggle from "@/components/ui/mode-toggle";

export default function Admin() {
  return (
    <div className="flex items-start justify-center pt-12 w-full">
      <ModeToggle />
      {/* <PersonForm /> */}
      <LetterForm />
    </div>
  );
}

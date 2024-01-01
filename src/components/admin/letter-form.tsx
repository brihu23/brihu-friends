import { AdminNav } from "@/components/admin/admin-nav";
import PersonForm from "@/components/admin/person-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ModeToggle from "@/components/ui/mode-toggle";
import { Combobox } from "../ui/combobox";

export default function LetterForm() {
  return (
    <div className="flex flex-col justify-start items-start w-2/5 space-y-3">
      <h1 className="text-2xl my-2">New Letter</h1>
      <div className="grid w-full  items-center gap-1.5">
        <Label htmlFor="First Name">Letter For</Label>
        <Combobox itemName="Person" itemNamePlural="People"/>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Title">Title</Label>
        <Input type="text" id="Title" placeholder="Title" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Password">Content </Label>
        <Input type="text" id="Password" placeholder="Password" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Display Date">Display Date</Label>
        <Input type="text" id="Display Date" placeholder="Display Date" />
      </div>
    </div>
  );
}

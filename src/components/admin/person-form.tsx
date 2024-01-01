import { AdminNav } from "@/components/admin/admin-nav";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ModeToggle from "@/components/ui/mode-toggle";
export default function PersonForm() {
  return (
    <div className="flex flex-col justify-start items-start w-2/5 space-y-3">
      <h1 className="text-2xl my-2">New Person</h1>
      <div className="grid w-full  items-center gap-1.5">
        <Label htmlFor="First Name">First Name</Label>
        <Input type="text" id="First Name" placeholder="First Name" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Last Name">Last Name</Label>
        <Input type="text" id="Last Name" placeholder="Last Name" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Password">Password</Label>
        <Input type="text" id="Password" placeholder="Password" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Email">Email</Label>
        <Input type="email" id="Email" placeholder="Email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Phone Number">Phone Number</Label>
        <Input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          id="Phone Number"
          placeholder="Phone Number"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Birthday">Birthday</Label>
        <Input type="date" id="Birthday" placeholder="Birthday" />
      </div>
    </div>
  );
}

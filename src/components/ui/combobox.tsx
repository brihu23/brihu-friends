import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Combobox({
  inputValues,
  open,
  setOpen,
  value,
  setValue,
  itemName,
  itemNamePlural,
}: {
  inputValues: {
    value: string;
    label: string;
  }[];
  open: boolean;
  setOpen: (input: boolean) => void;
  value: string;
  setValue: (input: string) => void;
  itemName: string;
  itemNamePlural:string
}) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? inputValues?.find((framework) => framework.value === value)?.label
            : `Select a ${itemName}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${itemNamePlural}...`} />
          <CommandEmpty>No {itemNamePlural} found.</CommandEmpty>
          <CommandGroup>
            {inputValues?.map((x) => (
              <CommandItem
                key={x.value}
                value={x.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === x.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {x.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

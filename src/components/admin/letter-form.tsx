import { AdminNav } from "@/components/admin/admin-nav";
import PersonForm from "@/components/admin/person-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ModeToggle from "@/components/ui/mode-toggle";
import { Combobox } from "../ui/combobox";
import { useState } from "react";
import {
  ArrowDownSquare,
  ArrowUpSquare,
  MinusSquare,
  PlusSquare,
} from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { set } from "date-fns";

type TContent = {
  imageUrl?: string;
  imageCaption?: string;
  text?: string;
  type: "image" | "text";
};

export default function LetterForm() {
  const [letterState, setLetterState] = useState<{
    personId: string | null;
    titles: string[];
    content: TContent[];
    displayDate: string;
  }>({
    personId: null,
    titles: [""],
    content: [
      {
        type: "text",
        text: "",
      },
    ],
    displayDate: "",
  });
  return (
    <div className="flex flex-col justify-start items-start w-2/5 space-y-3">
      <h1 className="text-2xl my-2">New Letter</h1>
      <div className="grid w-full  items-center gap-1.5">
        <Label className="text-md" htmlFor="First Name">
          Letter For
        </Label>
        <Combobox itemName="Person" itemNamePlural="People" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label
          className="flex justify-between items-center my-4 text-md"
          htmlFor="Title"
        >
          Title(s){" "}
          <PlusSquare
            className="cursor-pointer hover:scale-110 transition-all duration-300"
            onClick={() => {
              setLetterState((prevState) => ({
                ...prevState,
                titles: [...prevState.titles, ""],
              }));
            }}
          />
        </Label>
        {letterState.titles.map((title, index) => {
          return (
            <div className="flex items-center justify-between" key={index}>
              <Input
                type="text"
                id="Title"
                placeholder={`Title`}
                value={title}
                onChange={(e) => {
                  setLetterState((prevState) => {
                    const titles = [...prevState.titles];
                    titles[index] = e.target.value;
                    return { ...prevState, titles };
                  });
                }}
              />{" "}
              <MinusSquare
                className=" ml-2 cursor-pointer hover:scale-110 transition-all duration-300"
                onClick={() => {
                  setLetterState((prevState) => {
                    const titles = [...prevState.titles].filter(
                      (_, i) => i !== index
                    );
                    console.log(titles);
                    return { ...prevState, titles };
                  });
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <div className="flex justify-between items-center my-4">
          <Label className="text-md">Content </Label>
          <div className="flex  space-x-4 text-sm">
            {" "}
            <span className="flex">
              Text{" "}
              <PlusSquare
                className={cn("ml-2 cursor-pointer hover:scale-110 transition-all duration-300")}
                onClick={() => {
                  setLetterState((prevState) => {
                    const content = [...prevState.content];
                    content.push({ type: "text" });
                    return { ...prevState, content };
                  });
                }}
              />
            </span>
            <span className="flex">
              Image{" "}
              <PlusSquare
                className={cn("ml-2 cursor-pointer hover:scale-110 transition-all duration-300")}
                onClick={() => {
                  setLetterState((prevState) => {
                    const content = [...prevState.content];
                    content.push({ type: "image" });
                    return { ...prevState, content };
                  });
                }}
              />
            </span>
          </div>
        </div>

        {letterState.content.map((content, index) => {
          return (
            <div className="flex items-center w-full mb-4">
              {content.type === "image" ? (
                <div className="flex flex-col items-start w-full">
                  <Input
                    type="text"
                    placeholder={`Image Url`}
                    value={content.imageUrl}
                    onChange={(e) => {
                      setLetterState((prevState) => {
                        const content = [...prevState.content];
                        content[index].imageUrl = e.target.value;
                        return { ...prevState, content };
                      });
                    }}
                  />
                  <Input
                    type="text"
                    className="mt-1"
                    placeholder={`Image Caption`}
                    value={content.imageUrl}
                    onChange={(e) => {
                      setLetterState((prevState) => {
                        const content = [...prevState.content];
                        content[index].imageCaption = e.target.value;
                        return { ...prevState, content };
                      });
                    }}
                  />
                </div>
              ) : (
                <Textarea
                  placeholder={`Text`}
                  value={content.text}
                  onChange={(e) => {
                    setLetterState((prevState) => {
                      const content = [...prevState.content];
                      content[index].text = e.target.value;
                      return { ...prevState, content };
                    });
                  }}
                />
              )}
              <div className="flex flex-col gap-x-12">
                {" "}
                <ArrowUpSquare
                  className={cn(
                    "ml-2 cursor-pointer hover:scale-110 transition-all duration-300",
                    index === 0 && "opacity-50"
                  )}
                  onClick={() => {
                    if (index === 0) return;
                    setLetterState((prevState) => {
                      const content = [...prevState.content];
                      const temp = content[index];
                      content[index] = content[index - 1];
                      content[index - 1] = temp;
                      return { ...prevState, content };
                    });
                  }}
                />
                <ArrowDownSquare
                  className={cn(
                    "ml-2 cursor-pointer hover:scale-110 transition-all duration-300",
                    index === letterState.content.length - 1 && "opacity-50"
                  )}
                  onClick={() => {
                    if (index === letterState.content.length - 1) return;
                    setLetterState((prevState) => {
                      const content = [...prevState.content];
                      const temp = content[index];
                      content[index] = content[index + 1];
                      content[index + 1] = temp;
                      return { ...prevState, content };
                    });
                  }}
                />
                <MinusSquare
                  className=" ml-2 cursor-pointer hover:scale-110 transition-all duration-300"
                  onClick={() => {
                    setLetterState((prevState) => {
                      const content = [...prevState.content].filter(
                        (_, i) => i !== index
                      );
                      console.log(content);
                      return { ...prevState, content };
                    });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid w-full items-center gap-1.5 mt-4">
        <Label className='text-md'htmlFor="Display Date">Display Date</Label>
        <Input type="text" id="Display Date" placeholder="Display Date" />
      </div>
    </div>
  );
}

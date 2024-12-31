"use client";

import * as React from "react";
import { X, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

type SelectableItem = Record<"value" | "label", string>;

interface XMultiSelectProps {
    items: SelectableItem[]; // List of selectable items
    value: SelectableItem[]; // Selected items from the form
    onChange: (selected: SelectableItem[]) => void; // Callback to update the form field
    placeholder?: string; // Optional placeholder
}

export default function XMultiSelect({
    items,
    value = [],
    onChange,
    placeholder = "Select items...",
}: XMultiSelectProps) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    const handleUnselect = (item: SelectableItem) => {
        onChange(value.filter((selected) => selected.value !== item.value));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const input = inputRef.current;
        if (input) {
            if ((e.key === "Delete" || e.key === "Backspace") && input.value === "") {
                const newSelected = [...value];
                newSelected.pop();
                onChange(newSelected);
            }
            if (e.key === "Escape") {
                input.blur();
            }
        }
    };

    return (
        <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
            <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1">
                <div className="flex flex-wrap gap-1">
                    {value.map((item) => (
                        <Badge key={item.value} variant="secondary">
                            {item.label}
                            <button
                                className="ml-1 rounded-full outline-none ring-offset-background focus:ring-1 focus:ring-ring focus:ring-offset-1"
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                onClick={() => handleUnselect(item)}
                            >
                                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                            </button>
                        </Badge>
                    ))}
                    <CommandPrimitive.Input
                        ref={inputRef}
                        value={inputValue}
                        onValueChange={setInputValue}
                        onBlur={() => setOpen(false)}
                        onFocus={() => setOpen(true)}
                        placeholder={placeholder}
                        className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                    />
                </div>
            </div>
            <div className="relative mt-2">
                <CommandList>
                    {open && items.length > 0 ? (
                        <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                            <CommandGroup className="h-[300px] overflow-y-auto">
                                {items.map((item) => (
                                    <CommandItem
                                        key={item.value}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        onSelect={() => {
                                            if (!value.some((selected) => selected.value === item.value)) {
                                                onChange([...value, item]);
                                            }
                                            setInputValue("");
                                        }}
                                        className="cursor-pointer"
                                    >
                                        {item.label}
                                        {value.some((selected) => selected.value === item.value) && (
                                            <Check className="ml-auto h-4 w-4 text-muted-foreground" />
                                        )}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </div>
                    ) : null}
                </CommandList>
            </div>
        </Command>
    );
}

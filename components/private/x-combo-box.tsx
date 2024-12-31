"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Control, useController } from "react-hook-form";

interface Option {
    value: string;
    label: string;
}

interface XComboBoxProps {
    name: string;
    control: Control<any>;
    options: Option[];
    placeholder?: string;
}

export function XComboBox({
    name,
    control,
    options,
    placeholder = "Select an option...",
}: XComboBoxProps) {
    const { field } = useController({
        name,
        control,
    });

    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {field.value
                        ? options.find((option) => option.value === field.value)?.label
                        : placeholder}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No options found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option: Option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        field.onChange(currentValue === field.value ? "" : currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    {option.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            field.value === option.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

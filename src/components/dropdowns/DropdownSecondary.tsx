"use client";

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import DropdownOption from "./DropdownOption";
import ArrowDropUpIcon from "../icons/ArrowDropUpIcon";
import ArrowWrapper from "./ArrowWrapper";
import { DropdownSelectOption } from "@/types/dropdown";

const dropdownWidth = 320;

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const SelectButton = styled.button`
  width: ${dropdownWidth - 18}px;
  padding: 14px 20px;
  background-color: white;
  border: 2px solid #212121;
  border-radius: 8px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
`;

const StyledMenu = styled(DropdownMenu)`
  bottom: calc(100% + 8px);
  width: ${dropdownWidth}px;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const StyledOption = styled(DropdownOption)``;

interface DropdownSelectProps {
    options: DropdownSelectOption[];
    defaultValue?: string;
    onChange?: (value: DropdownSelectOption) => void;
}

export default function DropdownSecondary({
    options,
    defaultValue,
    onChange,
}: DropdownSelectProps) {
    const initialIndex =
        typeof defaultValue === "number" && options[defaultValue]
            ? defaultValue
            : 0;

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<DropdownSelectOption | null>(
        options[initialIndex],
    );

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleSelect(option: DropdownSelectOption) {
        setSelected(option);
        setIsOpen(false);
        onChange?.(option);
    }

    return (
        <Container ref={containerRef}>
            {isOpen && (
                <StyledMenu>
                    {options.map((option) => (
                        <StyledOption
                            key={option.id}
                            onClick={() => handleSelect(option)}
                            data-active={option.id === selected?.id}
                        >
                            {option.label}
                        </StyledOption>
                    ))}
                </StyledMenu>
            )}

            <SelectButton onClick={() => setIsOpen(!isOpen)}>
                <span>{selected && selected.label}</span>
                <ArrowWrapper data-open={isOpen}>
                    <ArrowDropUpIcon width="12px" height="12px" />
                </ArrowWrapper>
            </SelectButton>
        </Container>
    );
}

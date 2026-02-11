"use client";

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import DropdownOption from "./DropdownOption";
import ArrowDropUpIcon from "../icons/ArrowDropUpIcon";
import ArrowWrapper from "./ArrowWrapper";

const dropdownWidth = "320px";

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${dropdownWidth};
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  background-color: white;
  border: 2px solid #333;
  border-radius: 8px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    outline: none;
    border-color: #000;
  }
`;

const StyledMenu = styled(DropdownMenu)`
  bottom: calc(100% + 8px);
  width: ${dropdownWidth};
`;

const StyledOption = styled(DropdownOption)``;

export interface DropdownSelectOption {
    id: string;
    label: string;
}

interface DropdownSelectProps {
    options: DropdownSelectOption[];
    placeholder?: string;
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

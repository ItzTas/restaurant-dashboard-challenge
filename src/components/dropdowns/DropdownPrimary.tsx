"use client";

import { SVGProps, useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from "@/components/icons/ArrowDropDownIcon";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import DropdownOption from "./DropdownOption";
import ArrowWrapper from "./ArrowWrapper";
import { DropdownSelectOption } from "@/types/dropdown";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const ArrowWrapperStyled = styled(ArrowWrapper)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  white-space: nowrap;
  display: none;

  @media (min-width: 490px) {
    display: inline;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

const Subtitle = styled.span`
  color: #666;
  font-style: italic;
  font-size: 0.7rem;
  margin-left: 10px;

  &[data-active="true"] {
    color: #999;
  }
`;

interface DropdownPrimaryProps {
    options: DropdownSelectOption[];
    defaultValue?: number;
    onChange?: (value: DropdownSelectOption) => void;
}

export default function DropdownPrimary({
    options,
    defaultValue,
    onChange,
}: DropdownPrimaryProps) {
    const iconProps: SVGProps<SVGSVGElement> = {
        width: "9px",
        height: "9px",
        style: { marginRight: "2px" },
    } as const;

    const initialIndex =
        typeof defaultValue === "number" && options[defaultValue]
            ? defaultValue
            : 0;

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[initialIndex]);

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

    function handleSelect(optionId: DropdownSelectOption) {
        setSelected(optionId);
        setIsOpen(false);
        onChange?.(optionId);
    }

    const selectedOption = options.find((opt) => opt.id === selected.id);

    return (
        <Container ref={containerRef}>
            <Button onClick={() => setIsOpen(!isOpen)}>
                <Label>{selectedOption?.label}</Label>
                <ArrowWrapperStyled data-open={isOpen}>
                    <ArrowDropDownIcon {...iconProps} />
                </ArrowWrapperStyled>
            </Button>

            {isOpen && (
                <DropdownMenu>
                    {options.map((option) => (
                        <DropdownOption
                            key={option.id}
                            onClick={() => handleSelect(option)}
                            data-active={option.id === selected.id}
                        >
                            {option.label}

                            {option.subtitle && (
                                <Subtitle
                                    data-active={option.id === selected.id ? "true" : "false"}
                                >
                                    ({option.subtitle})
                                </Subtitle>
                            )}
                        </DropdownOption>
                    ))}
                </DropdownMenu>
            )}
        </Container>
    );
}

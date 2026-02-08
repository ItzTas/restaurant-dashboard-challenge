"use client";

import { SVGProps, useState } from "react";
import ArrowDropDownIcon from "@/components/icons/ArrowDropDownIcon";
import ArrowDropUpIcon from "../icons/ArrowDropUpIcon";
import styled from "styled-components";

const ArrowWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const Label = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 16rem; /* w-64 */
`;

const Menu = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  min-width: 200px;
  max-width: 300px;
  display: inline-block;
  position: fixed;
  z-index: 10;
`;

const Option = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background-color: white;
  color: #333;
  text-align: left;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.15s ease;
  font-family: inherit;

  &:hover {
    filter: brightness(80%);
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }

  &[data-active="true"] {
    background-color: #212121;
    color: white;

    &:hover {
      background-color: #1a1a1a;
      filter: brightness(180%);
    }
  }
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

interface DropDownPrimaryOption {
    id: string;
    label: string;
    subtitle?: string;
}

interface DropdownPrimaryProps {
    options: DropDownPrimaryOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export default function DropdownPrimary({
    options,
    defaultValue,
    onChange,
}: DropdownPrimaryProps) {
    const iconProps: SVGProps<SVGSVGElement> = {
        width: "9px",
        height: "9px",
        style: {
            marginRight: "2px",
        },
    } as const;

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue || options[0]?.id);

    const handleSelect = (optionId: string) => {
        setSelected(optionId);
        setIsOpen(false);
        onChange?.(optionId);
    };

    const selectedOption = options.find((opt) => opt.id === selected);

    return (
        <DropdownContainer>
            <Button onClick={() => setIsOpen(!isOpen)}>
                <Label>{selectedOption?.label}</Label>
                <ArrowWrapper>
                    {isOpen ? (
                        <ArrowDropUpIcon {...iconProps} />
                    ) : (
                        <ArrowDropDownIcon {...iconProps} />
                    )}
                </ArrowWrapper>
            </Button>

            {isOpen && (
                <Menu>
                    {options.map((option) => (
                        <Option
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            data-active={option.id === selected}
                        >
                            {option.label}

                            {option.subtitle && (
                                <Subtitle
                                    data-active={option.id === selected ? "true" : "false"}
                                >
                                    ({option.subtitle})
                                </Subtitle>
                            )}
                        </Option>
                    ))}
                </Menu>
            )}
        </DropdownContainer>
    );
}

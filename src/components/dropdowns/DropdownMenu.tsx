"use client";

import { useRef, useEffect } from "react";
import styled from "styled-components";

const Menu = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  min-width: 200px;
  z-index: 10;
`;

const InnerMenu = styled.div`
  overflow: visible;
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
    background-color: #f5f5f5;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }

  &[data-active="true"] {
    background-color: #1a1a1a;
    color: white;

    &:hover {
      background-color: #1a1a1a;
    }
  }
`;

const Subtitle = styled.span`
  color: #666;
  font-style: italic;
  font-size: 14px;
  margin-left: 6px;

  &[data-active="true"] {
    color: #999;
  }
`;

export interface DropdownOption {
    value: string | number;
    label: string;
    subtitle?: string;
}

interface DropdownMenuProps {
    options: DropdownOption[];
    value: string | number;
    onChange?: (value: string | number) => void;
    onClose?: () => void;
}

export default function DropdownMenu({
    options,
    value,
    onChange,
    onClose,
}: DropdownMenuProps) {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose?.();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    const handleSelect = (optionValue: string | number) => {
        onChange?.(optionValue);
        onClose?.();
    };

    return (
        <Menu ref={menuRef}>
            <InnerMenu>
                {options.map((option) => (
                    <Option
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        data-active={option.value === value ? "true" : "false"}
                    >
                        {option.label}
                        {option.subtitle && (
                            <Subtitle data-active={option.value === value ? "true" : "false"}>
                                ({option.subtitle})
                            </Subtitle>
                        )}
                    </Option>
                ))}
            </InnerMenu>
        </Menu>
    );
}

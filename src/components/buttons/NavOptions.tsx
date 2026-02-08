"use client";

import { usePathname } from "next/navigation";
import styled from "styled-components";
import NavOptionsTab from "./NavOptionsTab";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  border-radius: 1.25rem;
  padding: 0.375rem;
  width: fit-content;
`;

export interface TabItem {
    label: string;
    path: string;
}

export interface NavOptionsProps {
    tabs: TabItem[];
    handleTabChange?: (tabItem: TabItem) => void;
}

export default function NavOptions({ tabs, handleTabChange }: NavOptionsProps) {
    const [currentTab, setCurrentTab] = useState(tabs[0]);

    return (
        <Container>
            {tabs.map((tab) => {
                const { label, path } = tab;
                return (
                    <NavOptionsTab
                        key={`${path}-${label}`}
                        active={currentTab.label === label}
                        onClick={() => {
                            setCurrentTab(tab);
                            handleTabChange?.(tab);
                        }}
                    >
                        {label}
                    </NavOptionsTab>
                );
            })}
        </Container>
    );
}

"use client";

import styled from "styled-components";
import NavOptionsTab from "./NavOptionsTab";
import { useState } from "react";
import { redirect, usePathname } from "next/navigation";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  border-radius: 20px;
  padding: 8px;
`;

export interface TabItem {
    label: string;
    path?: string;
}

export interface NavOptionsProps {
    tabs: TabItem[];
    handleTabChange?: (tabItem: TabItem) => void;
}

export default function NavOptions({ tabs, handleTabChange }: NavOptionsProps) {
    const pathname = usePathname();
    const [currentTab, setCurrentTab] = useState<TabItem | null>(
        () => tabs.find((tab) => tab.path === pathname) || null,
    );

    function onTabChange(tab: TabItem) {
        const { path } = tab;
        if (!path) return;

        setCurrentTab(tab);
        redirect(path);
    }

    function onClick(tab: TabItem) {
        if (!handleTabChange) {
            onTabChange(tab);
            return;
        }

        handleTabChange(tab);
        setCurrentTab(tab);
    }

    return (
        <Container>
            {tabs.map((tab) => {
                const { label, path } = tab;
                return (
                    <NavOptionsTab
                        key={`${path}-${label}`}
                        active={currentTab?.label === label}
                        onClick={() => onClick(tab)}
                    >
                        {label}
                    </NavOptionsTab>
                );
            })}
        </Container>
    );
}

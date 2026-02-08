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

    const normalizePath = (path?: string) =>
        path?.startsWith("/") ? path : `/${path}`;

    const [currentTab, setCurrentTab] = useState<TabItem | null>(
        () => tabs.find((tab) => normalizePath(tab.path) === pathname) || null,
    );

    function onTabChange(tab: TabItem) {
        const path = normalizePath(tab.path);
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
                const { label } = tab;
                return (
                    <NavOptionsTab
                        key={`${normalizePath(tab.path)}-${label}`}
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

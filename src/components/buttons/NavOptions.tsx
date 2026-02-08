"use client";

import styled from "styled-components";
import NavOptionsTab from "./NavOptionsTab";
import { useState } from "react";
import { redirect, usePathname } from "next/navigation";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  background-color: white;
  border-radius: 20px;
`;

export interface TabItem {
    label: string;
    path?: string;
}

export interface NavOptionsProps {
    tabs: TabItem[];
    handleTabChange?: (tabItem: TabItem) => void;
    currentTab?: TabItem;
}

export default function NavOptions({
    tabs,
    handleTabChange,
    currentTab: propCurrentTab,
}: NavOptionsProps) {
    const pathname = usePathname();

    const normalizePath = (path?: string) =>
        path?.startsWith("/") ? path : `/${path}`;

    const [internalTab, setInternalTab] = useState<TabItem | null>(() => {
        if (propCurrentTab) {
            return null;
        }
        return tabs.find((tab) => normalizePath(tab.path) === pathname) || null;
    });

    const currentTab = propCurrentTab ?? internalTab;

    function internalTabChange(tab: TabItem) {
        const path = normalizePath(tab.path);
        if (!path) return;

        if (!propCurrentTab) {
            setInternalTab(tab);
        }
        redirect(path);
    }

    function onClick(tab: TabItem) {
        if (handleTabChange) {
            handleTabChange(tab);
        } else {
            internalTabChange(tab);
        }
    }

    return (
        <Container>
            {tabs.map((tab) => {
                const { label } = tab;
                return (
                    <NavOptionsTab
                        key={`${normalizePath(tab.path)}-${label}`}
                        data-active={currentTab?.label === label ? "true" : "false"}
                        onClick={() => onClick(tab)}
                    >
                        {label}
                    </NavOptionsTab>
                );
            })}
        </Container>
    );
}

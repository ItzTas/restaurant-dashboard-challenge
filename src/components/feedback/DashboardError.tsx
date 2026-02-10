"use client";

import styled from "styled-components";

interface ErrorMessageProps {
    title?: string;
    onRetry?: () => void;
}

const Container = styled.div`
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    font-size: 16px;
    font-weight: 600;
`;

const RetryButton = styled.button`
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
`;

export default function DashboardError({
    title = "Erro ao carregar",
    onRetry,
}: ErrorMessageProps) {
    return (
        <Container>
            <Title>{title}</Title>

            {onRetry && (
                <RetryButton onClick={onRetry}>
                    Tentar novamente
                </RetryButton>
            )}
        </Container>
    );
}


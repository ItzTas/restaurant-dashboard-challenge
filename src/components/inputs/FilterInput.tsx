"use client";

import Input from "./Input";
import SearchIcon from "../icons/SearchIcon";
import styled from "styled-components";
import { setFilterQuery } from "@/features/filters/slice";
import { useAppDispatch } from "@/store/hooks";
import { useFilterQuery } from "@/features/filters/hooks";

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 24px;
  display: flex;
  flex-direction: center;
  align-items: center;
`;

type SearchInputProps = {
    inputProps?: React.ComponentProps<typeof Input>;
    labelProps?: React.ComponentProps<typeof Label>;
};

export default function FilterInput({
    inputProps,
    labelProps,
}: SearchInputProps) {
    const dispatch = useAppDispatch();
    const filterQuery = useFilterQuery();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setFilterQuery(e.target.value));
    }

    return (
        <Label {...labelProps}>
            <IconWrapper>
                <SearchIcon width={17} height={17} />
            </IconWrapper>
            <Input value={filterQuery} onChange={handleChange} {...inputProps} />
        </Label>
    );
}

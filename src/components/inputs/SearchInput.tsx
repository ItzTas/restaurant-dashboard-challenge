import React from "react";
import Input from "./Input";
import SearchIcon from "../icons/SearchIcon";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
`;

type SearchInputProps = {
    inputProps?: React.ComponentProps<typeof Input>;
    labelProps?: React.ComponentProps<typeof Label>;
};

export default function SearchInput({
    inputProps,
    labelProps,
}: SearchInputProps) {
    return (
        <Label {...labelProps}>
            <SearchIcon width={17} height={17} />
            <Input {...inputProps} />
        </Label>
    );
}

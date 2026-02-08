import React from "react";
import Input from "./Input";
import SearchIcon from "../icons/SearchIcon";

type SearchInputProps = React.ComponentProps<typeof Input>;

export default function SearchInput({ ...props }: SearchInputProps) {
    return (
        <label>
            <SearchIcon width={17} height={17} />
            <Input {...props} />
        </label>
    );
}

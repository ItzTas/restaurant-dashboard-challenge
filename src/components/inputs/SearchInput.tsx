import React from "react";
import Input from "./Input";

type SearchInputProps = React.ComponentProps<typeof Input>;

export default function SearchInput({ ...props }: SearchInputProps) {
    return <Input {...props} />;
}

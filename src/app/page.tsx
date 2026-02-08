import NavOptions from "@/components/buttons/NavOptions";
import SearchInput from "@/components/inputs/SearchInput";

export default function Home() {
    return (
        <>
            <SearchInput />
            <NavOptions tabs={[]} />
        </>
    );
}

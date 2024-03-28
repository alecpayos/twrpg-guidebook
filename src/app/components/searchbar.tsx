import { Dispatch, SetStateAction } from "react";
import { SearchIcon } from "./searchIcon";
import { Input } from "@nextui-org/react";

export default function Searchbar({ searchValue }: { searchValue: Dispatch<SetStateAction<string>> }) {
  return (
    <Input
      classNames={{
        base: "me-8 max-w-full h-10 w-[256px]",
        mainWrapper: "h-full w-[256px]",
        input: "text-small",
        inputWrapper: "w-[256px] h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      onValueChange={searchValue}
      placeholder="Type to search..."
      size="sm"
      startContent={<SearchIcon />}
      type="test"
    />
  )
}

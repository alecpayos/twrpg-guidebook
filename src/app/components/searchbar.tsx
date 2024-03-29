import { Input } from "@nextui-org/react";

export default function Searchbar({ searchValue }: { searchValue: string }) {
  return (
    <Input
      classNames={{
        base: "me-8 max-w-full h-10 w-[256px]",
        mainWrapper: "h-full w-[256px]",
        input: "text-small",
        inputWrapper: "w-[256px] h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      value={searchValue}
      placeholder="Type to search..."
      size="sm"
      startContent={<SearchIcon />}
      type="test"
    />
  )
}

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}: {
  size?: number,
  strokeWidth?: number,
  width?: number,
  height?: number,
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);


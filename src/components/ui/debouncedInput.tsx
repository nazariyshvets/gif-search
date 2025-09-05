import React, { useState, useEffect, type ComponentProps } from "react";
import { useDebounceCallback } from "usehooks-ts";

import { Input } from "@/components/ui/input.tsx";

interface DebouncedInputProps
  extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (value: string) => void;
  delay?: number;
}

function DebouncedInput({
  value,
  onChange,
  delay = 1000,
  ...rest
}: DebouncedInputProps) {
  const [searchValue, setSearchValue] = useState(value);
  const debouncedFn = useDebounceCallback(onChange, delay);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchValue = e.target.value;
    setSearchValue(newSearchValue);
    debouncedFn(newSearchValue);
  };

  return (
    <Input value={searchValue} onChange={handleSearchValueChange} {...rest} />
  );
}

export { DebouncedInput };

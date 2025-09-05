import { useState } from "react";

import { DebouncedInput, GifList, GifListPagination } from "@/components/ui";
import { useSearchGifs } from "@/lib/hooks.ts";
import { PAGE_SIZE } from "@/lib/constants.ts";

function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useSearchGifs(searchValue, currentPage, PAGE_SIZE);
  const gifs = data?.data ?? [];
  const pagination = data?.pagination;
  const totalPages = Math.ceil((pagination?.total_count ?? 0) / PAGE_SIZE);

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-3xl font-bold">GIF Search</h1>

      <DebouncedInput
        value={searchValue}
        onChange={handleSearchValueChange}
        placeholder="Search for GIFs..."
      />

      <GifList items={gifs} />

      {totalPages > 1 && (
        <GifListPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export { HomePage };

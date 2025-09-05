import {
  useQuery,
  type UseQueryResult,
  keepPreviousData,
} from "@tanstack/react-query";

import { GIPHY_API_KEY, GIPHY_API_URL } from "@/lib/constants.ts";
import type { GifSearchResponse } from "@/lib/types";

export const useSearchGifs = (
  query: string,
  page: number,
  pageSize: number,
): UseQueryResult<GifSearchResponse, Error> =>
  useQuery<GifSearchResponse, Error>({
    queryKey: ["search gifs", query, page, pageSize],
    queryFn: async () => {
      const res = await fetch(
        `${GIPHY_API_URL}/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=${pageSize}&offset=${
          page * pageSize - pageSize
        }&rating=g&lang=en`,
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch gifs: ${res.statusText}`);
      }

      return (await res.json()) as GifSearchResponse;
    },
    enabled: !!query,
    placeholderData: keepPreviousData,
  });

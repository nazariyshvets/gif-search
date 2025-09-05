import { GifCard } from "@/components/ui/gifCard.tsx";
import { type GifObject } from "@/lib/types.ts";

interface GifListProps {
  items: GifObject[];
}

function GifList({ items: gifs }: GifListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {gifs.map((item) => (
        <GifCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export { GifList };

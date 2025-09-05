import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "sonner";
import { Info, Link, Download } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card.tsx";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover.tsx";
import { Button } from "@/components/ui/button.tsx";
import { downloadFile } from "@/lib/utils.ts";
import { type GifObject } from "@/lib/types.ts";

function GifCard({
  title,
  username,
  import_datetime,
  trending_datetime,
  slug,
  images,
}: GifObject) {
  const [_, copyUrl] = useCopyToClipboard();
  const url = images?.original?.url;

  const handleCopyUrl = async () => {
    if (!url) {
      return;
    }

    try {
      await copyUrl(url);
      toast.success("URL copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy URL");
      console.error("Failed to copy URL:", err);
    }
  };

  const handleDownload = async () => {
    if (!url) {
      return;
    }

    try {
      await downloadFile(url, slug);
      toast.success("Download successful");
    } catch (err) {
      toast.error("Download failed");
      console.error("Download failed:", err);
    }
  };

  return (
    <Card className="p-0">
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="truncate text-lg font-semibold">{title}</h3>
          <div className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Info className="size-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-2">
                {username && <span>Author: {username}</span>}
                {import_datetime && <span>Created: {import_datetime}</span>}
                {trending_datetime && (
                  <span>Trending: {trending_datetime}</span>
                )}
              </PopoverContent>
            </Popover>
            <Button variant="ghost" size="icon" onClick={handleCopyUrl}>
              <Link className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleDownload}>
              <Download className="size-4" />
            </Button>
          </div>
        </div>

        <img
          src={images?.original?.url}
          alt={title}
          className="aspect-video w-full rounded-lg object-contain"
        />
      </CardContent>
    </Card>
  );
}

export { GifCard };

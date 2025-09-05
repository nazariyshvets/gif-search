export type GifRating = "g" | "pg" | "pg-13" | "r";

export interface GifSearchResponse {
  data: GifObject[];
  pagination: GitPaginationObject;
  meta: GifMetaObject;
}

export interface GifImageObject {
  original: {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
  };
}

export interface GifObject {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: GifRating;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  images?: GifImageObject;
  title: string;
  alt_text: string;
  is_low_contrast: boolean;
}

export interface GitPaginationObject {
  offset: number;
  total_count: number;
  count: number;
}

export interface GifMetaObject {
  msg: string;
  status: number;
  response_id: string;
}

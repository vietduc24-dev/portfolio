const imageCdnUrl = process.env.NEXT_PUBLIC_IMAGE_CDN_URL?.replace(/\/+$/, "");

export function imageUrl(path: string, fallback?: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  if (!imageCdnUrl) {
    return fallback ?? `/${path.replace(/^\/+/, "")}`;
  }

  return `${imageCdnUrl}/${path.replace(/^\/+/, "")}`;
}

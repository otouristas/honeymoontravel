import { records, recordsByPath } from "@/content/records";
import type { ContentRecord } from "@/content/types";

export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

export function getRecord(path: string): ContentRecord | undefined {
  return recordsByPath[normalizePath(path)];
}

export function heroOf(record: ContentRecord): string {
  return record.featuredImage || record.images[0] || "";
}

export function seoTitleOf(record: ContentRecord): string {
  return record.seoTitle || record.title;
}

export function getPosts(): ContentRecord[] {
  return records.filter((r) => r.kind === "post");
}

export { records };

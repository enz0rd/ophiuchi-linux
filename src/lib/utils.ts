import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// WebKitGTK reports Linux in its user agent; false during static export (no navigator).
export const isLinux =
  typeof navigator !== "undefined" && navigator.userAgent.includes("Linux");

// Must match LINUX_CA_DIR in src-tauri/src/main.rs
export const LINUX_CA_DIR = "/usr/local/share/ca-certificates/ophiuchi";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

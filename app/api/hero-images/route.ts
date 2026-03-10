import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

// Fallback when Carousel is missing or readdir fails (e.g. Vercel serverless env)
const FALLBACK_HERO_IMAGES = ["/Carousel/tt.png", "/Carousel/ure.png", "/Carousel/iue.png"];

/**
 * Hero slideshow images are read from public/Carousel.
 * All image files in that folder are included in the rotation.
 * Returns fallback list if the folder is missing or unreadable (e.g. on Vercel).
 */
export async function GET() {
  try {
    const carouselDir = path.join(process.cwd(), "public", "Carousel");
    const files = await readdir(carouselDir);
    const images = files
      .filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => `/Carousel/${encodeURIComponent(f)}`);
    return NextResponse.json(images.length > 0 ? images : FALLBACK_HERO_IMAGES);
  } catch {
    return NextResponse.json(FALLBACK_HERO_IMAGES);
  }
}

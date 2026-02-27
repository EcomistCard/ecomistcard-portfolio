import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

/**
 * Hero slideshow images are read from public/Carousel.
 * All image files in that folder are included in the rotation.
 */
export async function GET() {
  try {
    const carouselDir = path.join(process.cwd(), "public", "Carousel");
    const files = await readdir(carouselDir);
    const images = files
      .filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => `/Carousel/${encodeURIComponent(f)}`);
    return NextResponse.json(images);
  } catch {
    return NextResponse.json([]);
  }
}

/** Resolve public asset paths for GitHub Pages base URL */
export function asset(path: string): string {
  const clean = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}

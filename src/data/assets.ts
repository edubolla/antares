const baseUrl = import.meta.env.BASE_URL || "/";

export function assetPath(path: string) {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}

export function pagePath(path: string) {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  if (!normalizedBase) {
    return `/${normalizedPath}`;
  }

  return `${normalizedBase}/${normalizedPath}`;
}

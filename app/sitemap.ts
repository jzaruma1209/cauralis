import { servicios } from "@/lib/data/servicios";

export default async function sitemap() {
  const baseUrl = "https://cauralis.com";

  const staticRoutes = ["", "/contacto"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const dynamicRoutes = servicios.map((servicio) => ({
    url: `${baseUrl}/servicios/${servicio.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}

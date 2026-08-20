import { MetadataRoute } from "next";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: reemplazar por el dominio real de producción cuando esté disponible.
  const baseUrl = "https://www.drraulmunozgomez.com";

  const staticPages = [
    "",
    "/enfermedades",
    "/servicios",
    "/sintomas",
    "/contacto",
    "/aviso-de-privacidad",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const diseasePages = diseases.map((d) => ({
    url: `${baseUrl}/enfermedades/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const symptomPages = symptoms.map((sym) => ({
    url: `${baseUrl}/sintomas/${sym.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...diseasePages, ...servicePages, ...symptomPages];
}

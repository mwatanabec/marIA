import type { Metadata } from "next";

const publicBase = "https://mwatanabec.github.io/marIA";

/** Metadados das páginas institucionais e propostas de demonstração. */
export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${publicBase}${path || "/"}`;
  const image = { url: `${publicBase}/brand/mari-laptop.png`, width: 1254, height: 1254, alt: "Mari, personagem oficial da MarIA" };
  return {
    title: `${title} | MarIA`, description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | MarIA`, description, url, siteName: "MarIA", locale: "pt_BR", type: "website", images: [image] },
    twitter: { card: "summary_large_image", title: `${title} | MarIA`, description, images: [image.url] },
  };
}

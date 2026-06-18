import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  /**
   * Legacy English slug redirects only (single hop → Spanish route).
   * Active English pages live under /en/* — not redirected here.
   */
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/como-funciona", permanent: true },
      {
        source: "/how-to-use-derivative-calculator",
        destination: "/como-funciona",
        permanent: true,
      },
      { source: "/what-is-a-derivative", destination: "/como-funciona", permanent: true },
      { source: "/derivative-examples", destination: "/ejemplos-de-derivadas", permanent: true },
      { source: "/examples", destination: "/ejemplos-de-derivadas", permanent: true },
      { source: "/rules", destination: "/reglas-de-derivacion", permanent: true },
      { source: "/basic-derivative-formulas", destination: "/reglas-de-derivacion", permanent: true },
      { source: "/partial-derivatives", destination: "/reglas-de-derivacion", permanent: true },
      { source: "/reglas", destination: "/reglas-de-derivacion", permanent: true },
      { source: "/ejemplos", destination: "/ejemplos-de-derivadas", permanent: true },
      { source: "/politica-de-privacidad", destination: "/privacy-policy", permanent: true },
      { source: "/terminos-de-servicio", destination: "/terms-of-service", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/about", destination: "/acerca-de", permanent: true },
      {
        source: "/en/chain-rule-derivative-calculator",
        destination: "/en/chain-rule-calculator",
        permanent: true,
      },
      {
        source: "/en/implicit-derivative-calculator",
        destination: "/en/implicit-differentiation-calculator",
        permanent: true,
      },
      { source: "/blog/derivada-de-sin-x", destination: "/derivada-de-sin-x", permanent: true },
      { source: "/blog/derivada-de-cos-x", destination: "/derivada-de-cos-x", permanent: true },
      { source: "/blog/derivada-de-tan-x", destination: "/derivada-de-tan-x", permanent: true },
      { source: "/en/derivative-of-e-x", destination: "/en/derivative-of-e-to-the-x", permanent: true },
    ];
  },
};

export default nextConfig;

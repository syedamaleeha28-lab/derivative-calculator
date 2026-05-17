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
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/como-funciona", permanent: true },
      { source: "/how-to-use-derivative-calculator", destination: "/como-funciona", permanent: true },
      { source: "/what-is-a-derivative", destination: "/como-funciona", permanent: true },
      { source: "/derivative-examples", destination: "/ejemplos", permanent: true },
      { source: "/examples", destination: "/ejemplos", permanent: true },
      { source: "/rules", destination: "/reglas", permanent: true },
      { source: "/basic-derivative-formulas", destination: "/reglas", permanent: true },
      { source: "/partial-derivatives", destination: "/reglas", permanent: true },
      { source: "/politica-de-privacidad", destination: "/privacy-policy", permanent: true },
      { source: "/terminos-de-servicio", destination: "/terms-of-service", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/about", destination: "/acerca-de", permanent: true },
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/:path*", permanent: true },
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      { source: "/pt", destination: "/", permanent: true },
      { source: "/pt/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;

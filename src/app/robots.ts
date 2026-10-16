import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/dashboard/",
        "/login/",
        "/login",
        "/signup/",
        "/signup",
      ],
    },
    sitemap: "https://abuhosain.dev/sitemap.xml",
    host: "https://abuhosain.dev",
  };
}

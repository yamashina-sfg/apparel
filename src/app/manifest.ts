import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HAKURO",
    short_name: "HAKURO",
    description: "Quiet garments for humid cities.",
    lang: "ja",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#f7f4ee"
  };
}

import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "./index";

export const Route = createFileRoute("/gallery")({
  component: () => (
    <div className="pt-10">
      <Gallery />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "Gallery — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Moments from campus life at PAKISTAN KARACHI SCHOOL PKS." },
      { property: "og:title", content: "Gallery — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "Moments from campus life." },
    ],
  }),
});

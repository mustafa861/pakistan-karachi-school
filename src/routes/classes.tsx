import { createFileRoute } from "@tanstack/react-router";
import { Classes } from "./index";

export const Route = createFileRoute("/classes")({
  component: () => (
    <div className="pt-10">
      <Classes />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "Classes — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Explore every grade at PAKISTAN KARACHI SCHOOL PKS — curriculum, subjects and activities." },
      { property: "og:title", content: "Classes — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "Every grade, thoughtfully designed." },
    ],
  }),
});

import { createFileRoute } from "@tanstack/react-router";
import { About } from "./index";

export const Route = createFileRoute("/about")({
  component: () => (
    <div className="pt-10">
      <About />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "About — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Discover the story, vision, mission and values of PAKISTAN KARACHI SCHOOL PKS." },
      { property: "og:title", content: "About — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "A school shaped by care, craft and curiosity." },
    ],
  }),
});

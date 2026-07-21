import { createFileRoute } from "@tanstack/react-router";
import { Teachers } from "./index";

export const Route = createFileRoute("/teachers")({
  component: () => (
    <div className="pt-10">
      <Teachers />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "Teachers — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Meet the faculty of PAKISTAN KARACHI SCHOOL PKS — teachers who inspire, mentor and stay." },
      { property: "og:title", content: "Teachers — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "Teachers who inspire, mentor and stay." },
    ],
  }),
});

import { createFileRoute } from "@tanstack/react-router";
import { Academics } from "./index";

export const Route = createFileRoute("/academics")({
  component: () => (
    <div className="pt-10">
      <Academics />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "Academics — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "A continuous academic journey from Play Group to Higher Secondary at PAKISTAN KARACHI SCHOOL PKS." },
      { property: "og:title", content: "Academics — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "Play Group through Higher Secondary." },
    ],
  }),
});

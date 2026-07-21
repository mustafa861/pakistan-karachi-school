import { createFileRoute } from "@tanstack/react-router";
import { Achievements } from "./index";

export const Route = createFileRoute("/achievements")({
  component: () => (
    <div className="pt-10">
      <Achievements />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "Achievements — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Board toppers, olympiad medals, sports champions and scholarships at PAKISTAN KARACHI SCHOOL PKS." },
      { property: "og:title", content: "Achievements — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "Excellence, quietly earned." },
    ],
  }),
});

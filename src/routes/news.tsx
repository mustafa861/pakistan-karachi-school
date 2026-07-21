import { createFileRoute } from "@tanstack/react-router";
import { News } from "./index";

export const Route = createFileRoute("/news")({
  component: () => (
    <div className="pt-10">
      <News />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "News — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Announcements and news from PAKISTAN KARACHI SCHOOL PKS." },
      { property: "og:title", content: "News — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "Fresh from the office." },
    ],
  }),
});

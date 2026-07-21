import { createFileRoute } from "@tanstack/react-router";
import { Events } from "./index";

export const Route = createFileRoute("/events")({
  component: () => (
    <div className="pt-10">
      <Events />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "Events — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Upcoming events and activities at PAKISTAN KARACHI SCHOOL PKS." },
      { property: "og:title", content: "Events — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "What's happening on campus." },
    ],
  }),
});

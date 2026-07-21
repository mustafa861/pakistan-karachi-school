import { createFileRoute } from "@tanstack/react-router";
import { Facilities } from "./index";

export const Route = createFileRoute("/facilities")({
  component: () => (
    <div className="pt-10">
      <Facilities />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "Facilities — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Explore campus facilities at PAKISTAN KARACHI SCHOOL PKS — labs, library, sports and more." },
      { property: "og:title", content: "Facilities — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "A campus designed for how children learn today." },
    ],
  }),
});

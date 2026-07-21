import { createFileRoute } from "@tanstack/react-router";
import { FAQs } from "./index";

export const Route = createFileRoute("/faqs")({
  component: () => (
    <div className="pt-10">
      <FAQs />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "FAQs — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Answers to common questions about PAKISTAN KARACHI SCHOOL PKS." },
      { property: "og:title", content: "FAQs — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "Answers to common questions." },
    ],
  }),
});

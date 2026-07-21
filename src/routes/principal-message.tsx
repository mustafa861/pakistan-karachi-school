import { createFileRoute } from "@tanstack/react-router";
import { Principal } from "./index";

export const Route = createFileRoute("/principal-message")({
  component: () => <Principal />,
  head: () => ({
    meta: [
      { title: "Principal's Message — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "A message from the Principal of PAKISTAN KARACHI SCHOOL PKS." },
      { property: "og:title", content: "Principal's Message — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "We teach children how to think, not what to think." },
    ],
  }),
});

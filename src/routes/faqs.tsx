import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/faqs")({
  component: () => {
    useEffect(() => { document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

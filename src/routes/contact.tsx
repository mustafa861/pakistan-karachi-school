import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/contact")({
  component: () => {
    useEffect(() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

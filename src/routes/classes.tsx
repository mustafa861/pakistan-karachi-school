import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/classes")({
  component: () => {
    useEffect(() => { document.getElementById("classes")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

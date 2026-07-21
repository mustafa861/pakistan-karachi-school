import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/events")({
  component: () => {
    useEffect(() => { document.getElementById("events")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

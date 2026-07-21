import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/achievements")({
  component: () => {
    useEffect(() => { document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

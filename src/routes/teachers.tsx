import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/teachers")({
  component: () => {
    useEffect(() => { document.getElementById("teachers")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

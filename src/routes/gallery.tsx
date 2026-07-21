import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/gallery")({
  component: () => {
    useEffect(() => { document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

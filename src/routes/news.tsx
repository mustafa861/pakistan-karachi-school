import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/news")({
  component: () => {
    useEffect(() => { document.getElementById("news")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/about")({
  component: () => {
    useEffect(() => { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/facilities")({
  component: () => {
    useEffect(() => { document.getElementById("facilities")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

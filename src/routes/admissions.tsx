import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/admissions")({
  component: () => {
    useEffect(() => { document.getElementById("admissions")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

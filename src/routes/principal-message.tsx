import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/principal-message")({
  component: () => {
    useEffect(() => { document.getElementById("principal")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

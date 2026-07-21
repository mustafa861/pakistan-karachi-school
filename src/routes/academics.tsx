import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Home } from "./index";

export const Route = createFileRoute("/academics")({
  component: () => {
    useEffect(() => { document.getElementById("academics")?.scrollIntoView({ behavior: "smooth" }); }, []);
    return <Home />;
  },
});

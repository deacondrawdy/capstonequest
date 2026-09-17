import { createFileRoute } from "@tanstack/react-router";
import { AccessibilityPage } from "@/pages/accessibility";

export const Route = createFileRoute("/accessibility")({ component: AccessibilityPage });

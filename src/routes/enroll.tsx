import { createFileRoute } from "@tanstack/react-router";
import { EnrollPage } from "@/pages/enroll";

export const Route = createFileRoute("/enroll")({ component: EnrollPage });

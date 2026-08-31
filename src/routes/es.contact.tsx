import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/contact";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/contact")({ component: ContactPage });

import { useEffect, useId, useRef, useState } from "react";

/**
 * Cal.com's inline booker.
 *
 * Tours are booked on Cal.com, not through a form on this site: the calendar is
 * the same one the voice agent books against, so a parent booking here and a
 * parent booking by phone cannot take the same slot.
 *
 * The embed is a cross-origin iframe. Its markup, keyboard behaviour and
 * translations belong to Cal.com — `npm run a11y` cannot see inside it, and the
 * accessibility statement lists it as third-party content. That is the trade
 * for a booking flow that works; the phone number stays on the page for anyone
 * the widget fails.
 *
 * The script is loaded once per page and each `calLink` gets its own namespace,
 * so switching campuses re-uses the already-loaded embed instead of refetching.
 */
declare global {
  interface Window {
    Cal?: CalApi;
  }
}

type CalApi = ((...args: unknown[]) => void) & {
  ns?: Record<string, (...args: unknown[]) => void>;
  loaded?: boolean;
  q?: unknown[];
};

const EMBED_SRC = "https://app.cal.com/embed/embed.js";

/** Cal's own loader, which queues calls made before the script arrives. */
function bootstrap(): CalApi {
  const existing = window.Cal;
  if (existing) return existing;

  const api = function (...args: unknown[]) {
    const cal = window.Cal as CalApi;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q ?? [];
      const script = document.createElement("script");
      script.src = EMBED_SRC;
      script.async = true;
      document.head.appendChild(script);
      cal.loaded = true;
    }
    if (args[0] === "init") {
      const namespace = args[1];
      if (typeof namespace === "string") {
        const nsApi = function (...nsArgs: unknown[]) {
          (nsApi as CalApi).q?.push(nsArgs);
        } as CalApi;
        nsApi.q = nsApi.q ?? [];
        cal.ns![namespace] = cal.ns![namespace] ?? nsApi;
        cal.ns![namespace].call(null, ...args);
        cal.q!.push(["initNamespace", namespace]);
        return;
      }
    }
    cal.q!.push(args);
  } as CalApi;

  window.Cal = api;
  return api;
}

export function CalBooker({
  calLink,
  namespace,
  className,
}: {
  /** "capstonequestacademy/yuma-tour-for-students-and-parents" */
  calLink: string;
  /** One per event type, so two campuses do not share an embed instance. */
  namespace: string;
  className?: string;
}) {
  const reactId = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const elementId = `cal-booker-${reactId}`;
  const mounted = useRef(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // Strict Mode runs effects twice in development; Cal would then mount two
    // bookers into the same element.
    if (mounted.current) return;
    mounted.current = true;

    let cancelled = false;
    try {
      const cal = bootstrap();
      cal("init", namespace, { origin: "https://app.cal.com" });
      cal.ns?.[namespace]?.("inline", {
        elementOrSelector: `#${elementId}`,
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink,
      });
      cal.ns?.[namespace]?.("ui", { hideEventTypeDetails: false, layout: "month_view" });
    } catch {
      setFailed(true);
    }

    // A blocked script, an offline browser or an ad blocker all leave an empty
    // box with no explanation. Check once and fall back to a plain link.
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      const host = document.getElementById(elementId);
      if (!host || host.childElementCount === 0) setFailed(true);
    }, 6000);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [calLink, namespace, elementId]);

  if (failed) {
    return (
      <p className={className}>
        <a
          href={`https://cal.com/${calLink}`}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-brand underline underline-offset-4"
        >
          {`cal.com/${calLink}`}
        </a>
      </p>
    );
  }

  return <div id={elementId} className={className} />;
}

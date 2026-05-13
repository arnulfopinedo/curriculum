import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = "G-8WWMJHXJJ6";

function sendPageView(path: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
    send_to: GA_ID,
  });
}

/**
 * Tracks SPA route changes (pathname + hash) and sends GA4 page_view events.
 */
export function useAnalytics() {
  useEffect(() => {
    let lastPath = "";

    const track = () => {
      const path = window.location.pathname + window.location.search + window.location.hash;
      if (path === lastPath) return;
      lastPath = path;
      sendPageView(path);
    };

    // Initial page view
    track();

    // History API patches
    const origPush = history.pushState;
    const origReplace = history.replaceState;
    history.pushState = function (...args) {
      const ret = origPush.apply(this, args);
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };
    history.replaceState = function (...args) {
      const ret = origReplace.apply(this, args);
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };

    window.addEventListener("popstate", track);
    window.addEventListener("hashchange", track);
    window.addEventListener("locationchange", track);

    return () => {
      window.removeEventListener("popstate", track);
      window.removeEventListener("hashchange", track);
      window.removeEventListener("locationchange", track);
      history.pushState = origPush;
      history.replaceState = origReplace;
    };
  }, []);
}

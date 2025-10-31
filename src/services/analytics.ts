import { AnalyticsEvent } from "../types/type";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

export type AnalyticsEventProps = Record<string, unknown>;

export const analyticsService = {
  logCustomEvent: (
    eventName: AnalyticsEvent,
    analyticsEventProps?: AnalyticsEventProps
  ) => {
    if (analytics) {
      logEvent(analytics, eventName, {
        ...analyticsEventProps,
        page_name: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  },
};

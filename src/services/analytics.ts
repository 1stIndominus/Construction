import { AnalyticsEvent } from "../types/type";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

export const analyticsService = {
  logCustomEvent: (eventName: AnalyticsEvent, pageName: string) => {
    if (analytics) {
      logEvent(analytics, eventName, {
        page_name: pageName,
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  },
};

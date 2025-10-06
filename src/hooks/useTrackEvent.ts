import { useEffect } from "react";
import { analyticsService } from "../services/analytics";
import { AnalyticsEvent } from "../types/type";

type EventProps = {
  eventName: AnalyticsEvent;
};

export const useTrackEvent = ({ eventName }: EventProps) => {
  useEffect(() => {
    analyticsService.logCustomEvent(eventName, document.title);
  }, []);
};

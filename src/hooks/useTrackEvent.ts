import { useEffect } from "react";
import { AnalyticsEventProps, analyticsService } from "../services/analytics";
import { AnalyticsEvent } from "../types/type";

type EventProps = {
  eventName: AnalyticsEvent;
  analyticsEventProps?: AnalyticsEventProps;
};

export const useTrackEvent = ({
  eventName,
  analyticsEventProps,
}: EventProps) => {
  useEffect(() => {
    analyticsService.logCustomEvent(eventName, { ...analyticsEventProps });
  }, []);
};

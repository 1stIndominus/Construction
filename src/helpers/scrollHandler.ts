import { RefObject } from "react";

export const scrollHandlerForPreview = (
  targetRef: RefObject<HTMLElement | null>
): (() => void) => {
  const blockElement = targetRef.current;

  if (!blockElement) return () => {};

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blockElement.classList.add("active");
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(blockElement);

  return () => {
    observer.unobserve(blockElement);
  };
};

export const scrollHandler = (
  targetRef: RefObject<HTMLElement | null>
): (() => void) => {
  const blockElement = targetRef.current;

  if (!blockElement) return () => {};

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const intersectionCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 0 && entry.boundingClientRect.y > 0) {
        blockElement.classList.remove("active");
      } else {
        blockElement.classList.add("active");
      }
    });
  };

  const observer = new IntersectionObserver(
    intersectionCallback,
    observerOptions
  );

  observer.observe(blockElement);

  return () => {
    observer.unobserve(blockElement);
  };
};

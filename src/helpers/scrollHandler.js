export const scrollHandlerForPreview = (targetRef) => {
  const blockElement = targetRef.current;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blockElement.classList.add(`active`);
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

export const scrollHandler = (targetRef) => {
  const blockElement = targetRef.current;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const intersectionCallback = (entries) => {
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

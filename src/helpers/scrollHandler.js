export const scrollHandler = (targetRef) => {
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

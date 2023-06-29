export const scrollHandler = (setIsActive, ref) => {
  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      setIsActive(entry.isIntersecting);
    },
    {
      threshold: 0.5,
    }
  );

  if (ref.current) {
    observer.observe(ref.current);
    setIsActive(true);
  }

  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
    // stopTimers();
  };
}
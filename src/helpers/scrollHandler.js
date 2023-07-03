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

  let isIntersecting = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
          // Block is intersecting and scrolled down
          isIntersecting = window.pageYOffset.current;
          blockElement.classList.add('active');
        } else {
          // Block is either not intersecting or scrolled to the top
          isIntersecting = false;
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(blockElement);

  // Additional logic to handle removing class when scrolling to the very top
  const scrollListener = () => {
    if (window.pageYOffset === 0) {
      blockElement.classList.remove('active');
    }
  };

  window.addEventListener('scroll', scrollListener);

  return () => {
    observer.unobserve(blockElement);
    window.removeEventListener('scroll', scrollListener);
  };
};


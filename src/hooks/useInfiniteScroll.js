import { useEffect, useRef } from "react";

const useInfiniteScroll = ({ callback, isMoreQuestion }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !isMoreQuestion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [isMoreQuestion, callback]);
  return { ref };
};
export default useInfiniteScroll;

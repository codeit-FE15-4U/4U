import { useEffect, useState } from "react";

const Toast = ({ children, timer, setToast }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setToast(false), 400);
    }, timer);
  }, [setToast, timer]);

  return (
    <div
      className={`tablet:bottom-60 bg-grayscale-60 shadow-2pt text-grayscale-10 text-caption1 fixed bottom-100 z-999 rounded-lg px-20 py-12 font-medium ${isVisible ? "animate-toastin" : "animate-toastout"}`}
    >
      {children}
    </div>
  );
};
export default Toast;

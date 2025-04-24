import { useEffect } from "react";

const Toast = ({ children, timer, setToast }) => {
  useEffect(() => {
    setTimeout(() => {
      setToast(false);
    }, timer);
  }, [setToast, timer]);

  return (
    <div className="tablet:bottom-60 bg-grayscale-60 shadow-2pt text-grayscale-10 text-caption1 fixed bottom-100 rounded-lg px-20 py-12 font-medium">
      {children}
    </div>
  );
};
export default Toast;

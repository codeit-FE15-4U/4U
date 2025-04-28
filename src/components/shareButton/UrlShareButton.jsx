import { useState } from "react";
import Toast from "../Toast";
import LinkIcon from "../../assets/icons/link.svg?react";
const UrlShareButton = () => {
  const [toast, setToast] = useState(false);

  const CopyUrl = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    setToast(true);
  };
  return (
    <>
      <button
        className="bg-brown-40 flex size-40 cursor-pointer items-center justify-center rounded-full"
        onClick={CopyUrl}
      >
        <LinkIcon className="text-grayscale-10 size-18" />
      </button>
      {toast && (
        <Toast timer={5000} setToast={setToast}>
          URL이 복사되었습니다
        </Toast>
      )}
    </>
  );
};
export default UrlShareButton;

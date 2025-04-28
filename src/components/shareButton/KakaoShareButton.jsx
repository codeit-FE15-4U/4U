import { useEffect } from "react";
import Kakao from "../../assets/icons/kakaotalk.svg?react";

const KakaoShareButton = () => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_API_KAKAO_JAVASCRIPT);
    }
  });
  const shareToKakao = () => {
    window.Kakao.Share.sendScrap({
      requestUrl: window.location.href,
    });
  };
  return (
    <button
      className="flex size-40 cursor-pointer items-center justify-center rounded-full bg-yellow-50"
      onClick={shareToKakao}
    >
      <Kakao className="size-18 text-black" />
    </button>
  );
};
export default KakaoShareButton;

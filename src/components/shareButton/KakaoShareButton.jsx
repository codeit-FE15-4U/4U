import { useEffect } from "react";
import Kakao from "../../assets/icons/kakaotalk.svg?react";

const KakaoShareButton = () => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_API_KAKAO_JAVASCRIPT);
    }
  });
  const shareToKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Open Mind",
        description: "오픈마인드에서 익명으로 마음껏 소통하세요!",
        imageUrl: "https://codeit-openmind-4u.vercel.app/opengraph.png",
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          webUrl: "https://codeit-openmind-4u.vercel.app/",
        },
      },
      buttons: [
        {
          title: "자세히 보기",
          link: {
            webUrl: window.location.href,
          },
        },
      ],
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

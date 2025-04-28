import Facebook from "../../assets/icons/facebook.svg?react";

const FacebookShareButton = () => {
  const shareToFacebook = () => {
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
    );
  };
  return (
    <button
      className="flex size-40 cursor-pointer items-center justify-center rounded-full bg-blue-50"
      onClick={shareToFacebook}
    >
      <Facebook className="size-18 text-white" />
    </button>
  );
};
export default FacebookShareButton;

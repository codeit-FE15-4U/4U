function SkeletonUserCard(className) {
  return (
    <div
      className={`${className} tablet:h-187 border-grayscale-40 bg-grayscale-10 flex h-168 animate-pulse flex-col justify-between rounded-xl border p-16`}
    >
      <div className="flex flex-col gap-12">
        <div className="bg-grayscale-30 h-48 w-48 rounded-full"></div>
        <p className="bg-grayscale-30 h-24 w-full rounded-full"></p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <span className="bg-grayscale-30 tablet:size-18 size-16 rounded-full"></span>
          <span className="bg-grayscale-30 tablet:w-60 h-18 w-52 rounded-full"></span>
        </div>
        <p className="bg-grayscale-30 h-18 w-24 rounded-full"></p>
      </div>
    </div>
  );
}

export default SkeletonUserCard;

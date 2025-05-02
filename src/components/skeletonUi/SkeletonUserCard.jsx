function SkeletonUserCard(className) {
  return (
    <div
      className={`${className} tablet:h-187 tablet:p-20 border-grayscale-40 bg-grayscale-10 flex h-168 animate-pulse flex-col justify-between rounded-xl border p-16`}
    >
      <div className="flex flex-col gap-12">
        <div className="bg-grayscale-30 tablet:size-60 size-48 rounded-full"></div>
        <div className="bg-grayscale-30 h-24 w-full rounded-full"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <div className="bg-grayscale-30 tablet:size-18 size-16 rounded-full"></div>
          <div className="bg-grayscale-30 tablet:w-60 h-18 w-52 rounded-full"></div>
        </div>
        <div className="bg-grayscale-30 h-18 w-24 rounded-full"></div>
      </div>
    </div>
  );
}

export default SkeletonUserCard;

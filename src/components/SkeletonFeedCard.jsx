const SkeletonFeedCard = () => {
  return (
    <div className="tablet:gap-32 tablet:p-32 shadow-1pt bg-grayscale-10 flex animate-pulse flex-col gap-24 rounded-2xl p-24">
      <div className="flex justify-between">
        <div className="bg-grayscale-30 h-26 w-76 rounded-full" />
      </div>
      <div>
        <div className="bg-grayscale-30 mb-4 h-18 w-100 rounded-full" />
        <div className="tablet:h-24 tablet:w-180 bg-grayscale-30 h-22 w-160 rounded-full" />
      </div>
      <div className="flex flex-row gap-12">
        <div className="tablet:size-48 bg-grayscale-30 size-32 rounded-full" />
        <section className="grow">
          <div className="mb-4 flex flex-row items-center gap-8">
            <div className="tablet:h-24 bg-grayscale-30 h-18 w-60 rounded-full" />
            <div className="bg-grayscale-30 h-18 w-40 rounded-full" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-grayscale-30 h-22 w-full rounded-full" />
            <div className="bg-grayscale-30 h-22 w-full rounded-full" />
          </div>
        </section>
      </div>
      <div className="border-grayscale-30 h-43 border-t border-solid">
        <div className="mt-25 flex gap-32">
          <div className="bg-grayscale-30 h-18 w-60 rounded-full" />
          <div className="bg-grayscale-30 h-18 w-60 rounded-full" />
        </div>
      </div>
    </div>
  );
};
export default SkeletonFeedCard;

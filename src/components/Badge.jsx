function Badge({ completed }) {
  return (
    <div
      className={
        "text-caption1 inline-block rounded-lg border px-11 py-3 font-medium " +
        (completed
          ? "border-brown-40 text-brown-40"
          : "border-grayscale-40 text-grayscale-40")
      }
    >
      {completed ? "답변 완료" : "미답변"}
    </div>
  );
}

export default Badge;
